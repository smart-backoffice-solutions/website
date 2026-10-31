// Cookie consent and Google Analytics, on every page of the site.
//
// Nothing is loaded from Google until the visitor clicks Accept: without consent there is no
// Google tag, no cookie and no request to Google. The choice itself is kept in localStorage (no
// cookie) and asked again after a year. Any element with data-consent-open reopens the banner, so
// consent can be withdrawn as easily as it was given; withdrawing also deletes the _ga cookies.
// The banner carries its own styles and texts, because Food Moments pages use their own stylesheet
// and six languages. The privacy statement (/privacy/) describes exactly this; change both together.
(function () {
  var GA_ID = 'G-F29KPBNC6V';
  var KEY = 'sbo-consent';
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000;
  // Local previews show the banner but never send data to the real property.
  var LIVE = location.hostname === 'smart-backoffice.nl';

  var TEXT = {
    en: { title: 'Cookies', text: 'May we use Google Analytics cookies to see how visitors use this website? We only use this to improve the site. You can change your choice at any time.', privacy: 'Privacy statement', accept: 'Accept', reject: 'Reject' },
    nl: { title: 'Cookies', text: 'Mogen we cookies van Google Analytics gebruiken om te zien hoe bezoekers deze website gebruiken? We gebruiken dit alleen om de site te verbeteren. U kunt uw keuze altijd wijzigen.', privacy: 'Privacyverklaring', accept: 'Accepteren', reject: 'Weigeren' },
    de: { title: 'Cookies', text: 'Dürfen wir Cookies von Google Analytics verwenden, um zu sehen, wie Besucher diese Website nutzen? Wir nutzen das nur, um die Website zu verbessern. Sie können Ihre Wahl jederzeit ändern.', privacy: 'Datenschutzerklärung', accept: 'Akzeptieren', reject: 'Ablehnen' },
    es: { title: 'Cookies', text: '¿Podemos usar cookies de Google Analytics para ver cómo se utiliza este sitio web? Solo lo usamos para mejorar el sitio. Puede cambiar su elección en cualquier momento.', privacy: 'Declaración de privacidad (en inglés)', accept: 'Aceptar', reject: 'Rechazar' },
    fr: { title: 'Cookies', text: 'Pouvons-nous utiliser des cookies Google Analytics pour voir comment ce site est utilisé ? Nous nous en servons uniquement pour améliorer le site. Vous pouvez modifier votre choix à tout moment.', privacy: 'Déclaration de confidentialité (en anglais)', accept: 'Accepter', reject: 'Refuser' },
    pt: { title: 'Cookies', text: 'Podemos usar cookies do Google Analytics para ver como este site é utilizado? Usamos isto apenas para melhorar o site. Pode alterar a sua escolha a qualquer momento.', privacy: 'Declaração de privacidade (em inglês)', accept: 'Aceitar', reject: 'Recusar' }
  };
  var PRIVACY = { nl: '/nl/privacy/', de: '/de/privacy/' };

  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  if (!TEXT[lang]) lang = 'en';
  var t = TEXT[lang];

  function readChoice() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY));
      if (c && typeof c.analytics === 'boolean' && Date.now() - c.at < MAX_AGE) return c.analytics;
    } catch (e) {}
    return null;
  }

  function saveChoice(analytics) {
    try { localStorage.setItem(KEY, JSON.stringify({ analytics: analytics, at: Date.now() })); } catch (e) {}
  }

  var loaded = false;
  function startAnalytics() {
    window['ga-disable-' + GA_ID] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    if (!LIVE) { console.info('consent.js: analytics accepted; the Google tag only loads on smart-backoffice.nl'); return; }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function stopAnalytics() {
    window['ga-disable-' + GA_ID] = true;
    document.cookie.split(';').forEach(function (part) {
      var name = part.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      ['', '; domain=' + location.hostname, '; domain=.' + location.hostname].forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; path=/' + domain;
      });
    });
  }

  var style = document.createElement('style');
  style.textContent =
    '.sbo-consent{position:fixed;left:20px;bottom:20px;z-index:1000;box-sizing:border-box;width:min(440px,calc(100% - 40px));' +
    'padding:22px 22px 20px;background:#fff;color:#161616;border:1px solid #dedede;box-shadow:0 18px 40px -24px rgba(0,0,0,.35);' +
    'font:15px/1.55 Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:left}' +
    '.sbo-consent[hidden]{display:none}' +
    '.sbo-consent h2{margin:0 0 8px;font:500 12px/1.2 "IBM Plex Mono",ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#e65143}' +
    '.sbo-consent p{margin:0;color:#4a4a4a}' +
    '.sbo-consent p a{color:#161616;font-weight:600;text-decoration:none;border-bottom:2px solid #e65143;white-space:nowrap}' +
    '.sbo-consent-actions{display:flex;gap:10px;margin-top:18px}' +
    '.sbo-consent button{flex:1;min-height:44px;padding:0 16px;background:#fff;color:#161616;border:1px solid #161616;border-radius:0;' +
    'font:600 14px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:background .2s ease,color .2s ease}' +
    '.sbo-consent button:hover{background:#161616;color:#fff}' +
    '.sbo-consent a:focus-visible,.sbo-consent button:focus-visible{outline:3px solid rgba(230,81,67,.45);outline-offset:3px}' +
    '@media (max-width:520px){.sbo-consent{left:12px;bottom:12px;width:calc(100% - 24px);padding:18px}}';

  var banner;
  function buildBanner() {
    banner = document.createElement('section');
    banner.className = 'sbo-consent';
    banner.setAttribute('aria-labelledby', 'sbo-consent-title');
    banner.setAttribute('lang', lang);
    banner.hidden = true;
    banner.innerHTML =
      '<h2 id="sbo-consent-title"></h2><p><span></span> <a></a></p>' +
      '<div class="sbo-consent-actions"><button type="button" data-choice="0"></button><button type="button" data-choice="1"></button></div>';
    banner.querySelector('h2').textContent = t.title;
    banner.querySelector('p span').textContent = t.text;
    var link = banner.querySelector('p a');
    link.textContent = t.privacy;
    link.href = PRIVACY[lang] || '/privacy/';
    // Reject first and styled the same as Accept: refusing must be as easy as agreeing.
    banner.querySelector('[data-choice="0"]').textContent = t.reject;
    banner.querySelector('[data-choice="1"]').textContent = t.accept;
    banner.addEventListener('click', function (e) {
      var button = e.target.closest('button[data-choice]');
      if (!button) return;
      var analytics = button.getAttribute('data-choice') === '1';
      saveChoice(analytics);
      if (analytics) startAnalytics(); else stopAnalytics();
      banner.hidden = true;
    });
    document.head.appendChild(style);
    document.body.appendChild(banner);
  }

  function openBanner(focus) {
    banner.hidden = false;
    if (focus) banner.querySelector('button').focus();
  }

  function init() {
    buildBanner();
    var choice = readChoice();
    if (choice === true) startAnalytics();
    if (choice === null) openBanner(false);

    document.addEventListener('click', function (e) {
      var opener = e.target.closest('[data-consent-open]');
      if (opener) { e.preventDefault(); openBanner(true); return; }
      // Enhanced measurement does not count email links, and an email is what the site is for.
      var mail = e.target.closest('a[href^="mailto:"]');
      if (mail && loaded && window.gtag) gtag('event', 'contact_email', { link_url: mail.getAttribute('href') });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
