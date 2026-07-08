(function () {
  let translations = window.SHITDANCE_LOCALES || {};

  const storage = {
    get() {
      try { return localStorage.getItem("shitdance-lang"); } catch { return null; }
    },
    set(lang) {
      try { localStorage.setItem("shitdance-lang", lang); } catch {}
    }
  };

  function initHomeBrand() {
    document.querySelectorAll("[data-home-brand]").forEach((brand) => {
      brand.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });
  }

  function preferredLanguage() {
    return storage.get()
      || (navigator.language && navigator.language.startsWith("zh") ? "zh" : "en");
  }

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.en || {};
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const titleKey = document.body?.dataset.titleI18n;
    if (titleKey && dictionary[titleKey]) {
      document.title = dictionary[titleKey];
    }

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        node.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-prefix]").forEach((node) => {
      const key = node.dataset.i18nPrefix;
      const value = node.dataset.i18nValue || "";
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        node.textContent = `${dictionary[key]} ${value}`.trim();
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      const label = dictionary.toggle_label || "";
      toggle.innerHTML = `<span class="lang-toggle-icon" aria-hidden="true">🌐</span><span class="lang-toggle-code">${label}</span>`;
      toggle.setAttribute("aria-label", dictionary.toggle_aria || "");
      toggle.setAttribute("title", dictionary.toggle_aria || "");
    });

    storage.set(lang);
    formatLocalDatetimes(lang);
    document.dispatchEvent(new CustomEvent("shitdance:languagechange"));
  }

  function formatLocalDatetimes(lang) {
    const locale = lang === "zh" ? "zh-CN" : "en";
    const formatter = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

    document.querySelectorAll("[data-local-datetime]").forEach((node) => {
      const raw = node.getAttribute("datetime");
      if (!raw) return;
      const date = new Date(raw);
      if (Number.isNaN(date.getTime())) return;
      node.textContent = formatter.format(date);
    });
  }

  function nextLanguage() {
    const languages = Object.keys(translations);
    if (languages.length <= 1) return preferredLanguage();
    const current = document.documentElement.lang === "zh-CN" ? "zh" : "en";
    const index = languages.indexOf(current);
    return languages[(index + 1) % languages.length] || languages[0];
  }

  function initLanguage() {
    if (!translations || !Object.keys(translations).length) {
      return;
    }
    setLanguage(preferredLanguage());
    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        setLanguage(nextLanguage());
      });
    });
  }

  function initHeroCarousel() {
    const carousel = document.querySelector("[data-hero-carousel]");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    const dotsWrap = carousel.querySelector(".hero-carousel-dots");
    if (slides.length < 2 || dots.length !== slides.length) {
      if (dotsWrap) dotsWrap.hidden = true;
      return;
    }
    if (dotsWrap) dotsWrap.hidden = false;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (activeIndex < 0) activeIndex = 0;
    let timer = null;
    let paused = false;

    function setActive(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });
      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      if (reduceMotion || paused) return;
      timer = window.setInterval(() => setActive(activeIndex + 1), 3000);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        setActive(index);
        start();
      });
    });

    carousel.addEventListener("mouseenter", () => {
      paused = true;
      stop();
    });
    carousel.addEventListener("mouseleave", () => {
      paused = false;
      start();
    });
    carousel.addEventListener("focusin", () => {
      paused = true;
      stop();
    });
    carousel.addEventListener("focusout", () => {
      paused = false;
      start();
    });

    setActive(activeIndex);
    start();
  }

  function initSubmitAgentSelector() {
    const selector = document.querySelector("[data-agent-selector]");
    if (!selector) return;

    const buttons = Array.from(selector.querySelectorAll("[data-agent-option]"));
    const installNode = document.querySelector("[data-agent-install-output]");
    const triggerNode = document.querySelector("[data-agent-trigger-output]");
    const copyButton = document.querySelector("[data-copy-agent-install]");
    if (!buttons.length || !installNode || !triggerNode) return;

    function languageKey() {
      return document.documentElement.lang === "zh-CN" ? "zh" : "en";
    }

    function activeButton() {
      return buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
    }

    function update(button) {
      const selected = button || activeButton();
      const installKey = languageKey() === "zh" ? "agentInstallZh" : "agentInstallEn";
      const triggerKey = languageKey() === "zh" ? "agentTriggerZh" : "agentTriggerEn";
      const dictionary = translations[languageKey()] || translations.en || {};

      buttons.forEach((item) => {
        const isActive = item === selected;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      installNode.textContent = selected.dataset[installKey] || selected.dataset.agentInstallEn || "";
      triggerNode.textContent = selected.dataset[triggerKey] || selected.dataset.agentTriggerEn || "";
      if (copyButton) copyButton.textContent = dictionary.submit_agent_copy_cta || "Copy";
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => update(button));
    });
    if (copyButton) {
      copyButton.addEventListener("click", async () => {
        const dictionary = translations[languageKey()] || translations.en || {};
        const copyLabel = dictionary.submit_agent_copy_cta || "Copy";
        const doneLabel = dictionary.submit_agent_copy_done || "Copied";
        try {
          await navigator.clipboard.writeText(installNode.textContent || "");
          copyButton.textContent = doneLabel;
          window.setTimeout(() => {
            copyButton.textContent = copyLabel;
          }, 1400);
        } catch {
          copyButton.textContent = copyLabel;
        }
      });
    }
    document.addEventListener("shitdance:languagechange", () => update());

    update(activeButton());
  }

  function initShareImage() {
    const trigger = document.querySelector("[data-share-image]");
    const detail = document.querySelector(".moment-detail");
    if (!trigger || !detail) return;

    const thinkingPhraseGroups = [
      ["Cogitating", "Pondering", "Musing", "Ruminating", "Discombobulating"],
      ["Simmering", "Brewing", "Marinating", "Baking"],
      ["Moseying", "Schlepping", "Gallivanting"],
      ["Honking", "Booping"]
    ];
    let lastFocus = null;
    let currentDataUrl = "";
    let modal = null;
    let terminalLoading = null;
    let terminalLoadingTimer = null;

    function languageKey() {
      return document.documentElement.lang === "zh-CN" ? "zh" : "en";
    }

    function dictionary() {
      return translations[languageKey()] || translations.en || {};
    }

    function text(key, fallback) {
      return dictionary()[key] || fallback;
    }

    function shuffle(items) {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
      }
      return result;
    }

    function sampleThinkingLines() {
      const groups = shuffle(thinkingPhraseGroups).slice(0, 2);
      const lines = groups.map((group) => group[Math.floor(Math.random() * group.length)]);
      lines.push("Dancing");
      return shuffle(lines);
    }

    function sleep(ms) {
      return new Promise((resolve) => window.setTimeout(resolve, ms));
    }

    function assetUrl(filename) {
      const script = Array.from(document.scripts).find((item) => /\/assets\/site\.js$/.test(item.src));
      if (script) return new URL(filename, script.src).href;
      return new URL(`../../assets/${filename}`, window.location.href).href;
    }

    function pageUrl() {
      const canonical = document.querySelector("link[rel='canonical']");
      return canonical?.href || window.location.href.split("#")[0];
    }

    function canCopyImage() {
      return Boolean(navigator.clipboard?.write && window.ClipboardItem);
    }

    function dataUrlToBlob(dataUrl) {
      const parts = dataUrl.split(",");
      const mime = (parts[0].match(/:(.*?);/) || [])[1] || "image/png";
      const binary = atob(parts[1] || "");
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
      }
      return new Blob([bytes], { type: mime });
    }

    function createModal() {
      const root = document.createElement("div");
      root.className = "share-image-modal";
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");
      root.setAttribute("aria-hidden", "true");
      root.innerHTML = `
        <div class="share-image-backdrop" data-share-close></div>
        <div class="share-image-panel" tabindex="-1">
          <button class="share-image-close" type="button" data-share-close aria-label=""></button>
          <div class="share-image-body" data-share-body></div>
        </div>
      `;
      root.addEventListener("click", (event) => {
        if (event.target.closest("[data-share-close]")) closeModal();
      });
      document.body.appendChild(root);
      return root;
    }

    function getModal() {
      if (!modal) modal = createModal();
      return modal;
    }

    function setModalLabels() {
      const root = getModal();
      const close = root.querySelector(".share-image-close");
      if (close) {
        close.textContent = "×";
        close.setAttribute("aria-label", text("share_image_close", "Close"));
      }
    }

    function openModal() {
      const root = getModal();
      lastFocus = document.activeElement;
      setModalLabels();
      root.classList.add("is-open");
      root.setAttribute("aria-hidden", "false");
      document.body.classList.add("share-image-lock");
      root.querySelector(".share-image-panel")?.focus();
    }

    function closeModal() {
      const root = getModal();
      root.classList.remove("is-open");
      root.setAttribute("aria-hidden", "true");
      document.body.classList.remove("share-image-lock");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function createTerminalLoading() {
      const root = document.createElement("div");
      root.className = "share-terminal-loading";
      root.setAttribute("aria-hidden", "true");
      root.innerHTML = `<div class="share-terminal-lines"></div>`;
      document.body.appendChild(root);
      return root;
    }

    function openTerminalLoading() {
      const root = terminalLoading || createTerminalLoading();
      terminalLoading = root;
      const lines = root.querySelector(".share-terminal-lines");
      if (lines) {
        lines.innerHTML = "";
        sampleThinkingLines().forEach((phrase) => {
          const line = document.createElement("p");
          const label = document.createElement("span");
          label.textContent = phrase;
          const dots = document.createElement("span");
          dots.className = "share-terminal-dots";
          dots.textContent = ".";
          line.append(label, dots);
          lines.appendChild(line);
        });
      }
      window.clearInterval(terminalLoadingTimer);
      let dotIndex = 0;
      terminalLoadingTimer = window.setInterval(() => {
        dotIndex = (dotIndex + 1) % 3;
        root.querySelectorAll(".share-terminal-dots").forEach((dots) => {
          dots.textContent = ".".repeat(dotIndex + 1);
        });
      }, 360);
      root.classList.add("is-open");
      root.setAttribute("aria-hidden", "false");
      document.body.classList.add("share-image-lock");
    }

    function closeTerminalLoading() {
      if (!terminalLoading) return;
      window.clearInterval(terminalLoadingTimer);
      terminalLoadingTimer = null;
      terminalLoading.classList.remove("is-open");
      terminalLoading.setAttribute("aria-hidden", "true");
      if (!modal?.classList.contains("is-open")) document.body.classList.remove("share-image-lock");
    }

    function setError() {
      const root = getModal();
      const body = root.querySelector("[data-share-body]");
      if (body) {
        body.innerHTML = "";
        const error = document.createElement("p");
        error.className = "share-image-error";
        error.textContent = text("share_image_error", "Generation failed. Please retry.");
        body.appendChild(error);
      }
    }

    function setPreview(dataUrl) {
      const root = getModal();
      const body = root.querySelector("[data-share-body]");
      currentDataUrl = dataUrl;
      if (body) {
        body.innerHTML = "";
        const stage = document.createElement("div");
        stage.className = "share-image-stage";
        const image = document.createElement("img");
        image.className = "share-image-preview";
        image.src = dataUrl;
        image.alt = text("share_image_modal_title", "Share image");
        stage.appendChild(image);
        body.appendChild(stage);
      }
      openModal();
    }

    function collectShareData() {
      const title = detail.querySelector(".reader-head h1")?.textContent.trim() || document.title.replace(/\s+\|\s+Shit Dance$/, "");
      const paragraphs = Array.from(detail.querySelectorAll(".reader-section p"))
        .map((node) => node.textContent.trim())
        .filter(Boolean);
      const meta = Array.from(detail.querySelectorAll(".reader-meta .agent-chip"))
        .map((node) => node.textContent.trim())
        .filter(Boolean)
        .slice(0, 2);
      return {
        lang: languageKey(),
        title,
        paragraphs,
        meta,
        url: pageUrl(),
        logoUrl: assetUrl("logo.png")
      };
    }

    function textTokens(value) {
      const tokens = [];
      let buffer = "";
      for (const char of Array.from(value)) {
        if (/\s/.test(char)) {
          if (buffer) tokens.push(buffer);
          tokens.push(" ");
          buffer = "";
        } else if (/[\u3400-\u9fff\u3000-\u303f\uff00-\uffef]/.test(char)) {
          if (buffer) tokens.push(buffer);
          tokens.push(char);
          buffer = "";
        } else {
          buffer += char;
        }
      }
      if (buffer) tokens.push(buffer);
      return tokens;
    }

    function wrapText(ctx, text, maxWidth) {
      const lines = [];
      let line = "";
      for (const token of textTokens(text)) {
        const test = line + token;
        if (line && ctx.measureText(test.trimEnd()).width > maxWidth) {
          lines.push(line.trimEnd());
          line = token.trimStart();
        } else {
          line = test;
        }
      }
      if (line.trim()) lines.push(line.trimEnd());
      return lines;
    }

    function roundedRect(ctx, x, y, width, height, radius) {
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(x, y, width, height, radius);
        return;
      }
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }

    function drawChip(ctx, label, x, y, width) {
      ctx.beginPath();
      roundedRect(ctx, x, y, width, 40, 20);
      ctx.fillStyle = "rgba(101,119,151,.1)";
      ctx.fill();
      ctx.fillStyle = "#335a9f";
      ctx.font = "850 20px Inter, system-ui, sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(label, x + width / 2, y + 20);
      ctx.textAlign = "start";
    }

    function drawBackground(ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 1200);
      gradient.addColorStop(0, "#f3f7fc");
      gradient.addColorStop(0.42, "#fbfcfe");
      gradient.addColorStop(1, "#eef4fb");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 900, 1200);

      ctx.fillStyle = "rgba(101,119,151,.16)";
      for (let y = 820; y < 1080; y += 18) {
        for (let x = 560; x < 820; x += 18) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function drawHeader(ctx, data) {
      ctx.fillStyle = "#2f75ff";
      ctx.beginPath();
      ctx.arc(80, 78, 9, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = "950 28px Inter, system-ui, sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillText(data.lang === "zh" ? "精选翻车" : "Featured Moment", 104, 78);

      const chips = data.meta.length ? data.meta : ["Codex", "GPT-5"];
      let right = 832;
      chips.slice(0, 2).reverse().forEach((chip) => {
        const width = Math.max(92, ctx.measureText(chip).width + 42);
        right -= width;
        drawChip(ctx, chip, right, 58, width);
        right -= 14;
      });
    }

    function drawTitle(ctx, title) {
      ctx.fillStyle = "#050b18";
      ctx.font = "900 44px Georgia, 'Songti SC', serif";
      ctx.textBaseline = "top";
      const lines = wrapText(ctx, title, 764).slice(0, 3);
      lines.forEach((line, index) => {
        ctx.fillText(line, 68, 136 + index * 56);
      });
      return 136 + lines.length * 56 + 42;
    }

    function drawBody(ctx, paragraphs, y, height) {
      const x = 68;
      const width = 764;
      const lineHeight = 42;
      const paragraphGap = 28;
      const fadeStart = 500;
      const fadeEnd = y + height;
      let cursorY = y;

      ctx.font = "28px Georgia, 'Songti SC', serif";
      ctx.textBaseline = "top";

      for (const paragraph of paragraphs) {
        const lines = wrapText(ctx, paragraph, width);
        for (const line of lines) {
          if (cursorY + lineHeight > y + height) return;
          const centerY = cursorY + lineHeight / 2;
          let alpha = 1;
          if (centerY > fadeStart) {
            const progress = Math.min(1, (centerY - fadeStart) / Math.max(1, fadeEnd - fadeStart));
            if (progress < 0.18) {
              alpha = 1 - progress * 1.55;
            } else if (progress < 0.78) {
              alpha = 0.72 - (progress - 0.18) * 0.9;
            } else {
              alpha = 0.18 - (progress - 0.78) * 0.64;
            }
            alpha = Math.max(0.04, alpha);
          }
          ctx.globalAlpha = alpha;
          ctx.fillStyle = "#252b38";
          ctx.fillText(line, x, cursorY);
          ctx.globalAlpha = 1;
          cursorY += lineHeight;
        }
        cursorY += paragraphGap;
        if (cursorY > y + height) return;
      }
    }

    async function loadImage(src) {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = src;
      if (typeof image.decode === "function") {
        await image.decode();
      } else {
        await new Promise((resolve, reject) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", reject, { once: true });
        });
      }
      return image;
    }

    async function makeQrImage(url) {
      const holder = document.createElement("div");
      holder.style.position = "fixed";
      holder.style.left = "-9999px";
      holder.style.top = "0";
      document.body.appendChild(holder);
      new QRCode(holder, {
        text: url,
        width: 90,
        height: 90,
        colorDark: "#0f1f38",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const node = holder.querySelector("canvas") || holder.querySelector("img");
      if (!node) {
        holder.remove();
        throw new Error("QR code did not render");
      }
      const src = node.tagName === "CANVAS" ? node.toDataURL("image/png") : node.src;
      holder.remove();
      return loadImage(src);
    }

    async function drawFooter(ctx, data) {
      const [logo, qr] = await Promise.all([loadImage(data.logoUrl), makeQrImage(data.url)]);
      const y = 1020;

      ctx.drawImage(logo, 82, y + 14, 68, 68);

      ctx.fillStyle = "#1f2f45";
      ctx.font = "850 17px Inter, system-ui, sans-serif";
      ctx.textBaseline = "top";
      ctx.fillText("屎山跳动", 164, y + 14);

      ctx.fillStyle = "#1f2f45";
      ctx.font = "800 18px Inter, system-ui, sans-serif";
      ctx.fillText("Shit Dance", 164, y + 39);

      ctx.fillStyle = "rgba(31,47,69,.58)";
      ctx.font = "14px Inter, system-ui, sans-serif";
      ctx.fillText("shitdance.com", 164, y + 66);

      ctx.strokeStyle = "rgba(101,119,151,.26)";
      ctx.beginPath();
      ctx.moveTo(292, y + 14);
      ctx.lineTo(292, y + 86);
      ctx.stroke();

      ctx.fillStyle = "rgba(31,47,69,.74)";
      ctx.font = "700 14px Inter, system-ui, sans-serif";
      ctx.fillText("Agentic genius is 1% judgment and 99% agent-generated shit", 316, y + 22);
      ctx.fillText("mountain.", 316, y + 40);

      ctx.fillStyle = "rgba(31,47,69,.58)";
      ctx.font = "650 13px Inter, system-ui, sans-serif";
      ctx.fillText("Agentic 天才，是 1% 的判断，加 99% 的 Agent 屎山。", 316, y + 66);

      ctx.save();
      ctx.shadowColor = "rgba(31,47,69,.08)";
      ctx.shadowBlur = 26;
      ctx.shadowOffsetY = 10;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      roundedRect(ctx, 742, y + 10, 104, 104, 8);
      ctx.fill();
      ctx.restore();

      ctx.drawImage(qr, 749, y + 17, 90, 90);
    }

    async function renderShareImage(data) {
      const scale = 2;
      const canvas = document.createElement("canvas");
      canvas.width = 900 * scale;
      canvas.height = 1200 * scale;
      const ctx = canvas.getContext("2d");
      ctx.scale(scale, scale);

      drawBackground(ctx);
      drawHeader(ctx, data);
      const bodyY = drawTitle(ctx, data.title);
      const footerY = 1020;
      drawBody(ctx, data.paragraphs, bodyY, footerY - bodyY - 36);
      await drawFooter(ctx, data);

      return canvas.toDataURL("image/png");
    }

    async function generate() {
      currentDataUrl = "";
      openTerminalLoading();

      if (!window.QRCode) {
        closeTerminalLoading();
        openModal();
        setError();
        return;
      }

      try {
        const startedAt = performance.now();
        const dataUrl = await renderShareImage(collectShareData());
        setPreview(dataUrl);
        await sleep(Math.max(0, 3200 - (performance.now() - startedAt)));
        closeTerminalLoading();
      } catch {
        closeTerminalLoading();
        openModal();
        setError();
      }
    }

    trigger.addEventListener("click", generate);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal?.classList.contains("is-open")) {
        closeModal();
      }
    });
    document.addEventListener("shitdance:languagechange", () => {
      if (modal?.classList.contains("is-open")) setModalLabels();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initHeroCarousel();
      initSubmitAgentSelector();
      initLanguage();
      initHomeBrand();
      initShareImage();
    });
  } else {
    initHeroCarousel();
    initSubmitAgentSelector();
    initLanguage();
    initHomeBrand();
    initShareImage();
  }
})();
