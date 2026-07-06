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
      toggle.textContent = dictionary.toggle_label || "";
      toggle.setAttribute("aria-label", dictionary.toggle_aria || "");
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initHeroCarousel();
      initSubmitAgentSelector();
      initLanguage();
    });
  } else {
    initHeroCarousel();
    initSubmitAgentSelector();
    initLanguage();
  }
})();
