// Shared language switch. Each page defines window.SBO_COPY = { nl: {...}, en: {...}, de: {...} }
// before this file loads; every element with data-i18n="section.key" gets its text from it.
(function () {
  const copy = window.SBO_COPY || {};

  function setLanguage(lang) {
    const selected = copy[lang] ? lang : 'en';
    document.documentElement.lang = selected;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const [section, key] = el.dataset.i18n.split('.');
      const text = copy[selected] && copy[selected][section] && copy[selected][section][key];
      if (typeof text === 'string') el.textContent = text;
    });
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === selected);
    });
    try { localStorage.setItem('sbo-lang', selected); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  let stored = null;
  try { stored = localStorage.getItem('sbo-lang'); } catch (e) { /* private mode */ }
  const fromUrl = new URLSearchParams(location.search).get('lang');
  setLanguage(fromUrl || stored || 'en');
})();
