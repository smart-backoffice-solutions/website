// Navigating to a page should land at the top of it, whatever position the
// browser remembers from an earlier visit. A fragment in the URL still wins,
// so in-page anchors keep working.
(function () {
  if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }

  function toTop() {
    if (location.hash) { return; }
    var root = document.documentElement;
    var keep = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = keep;
  }

  window.addEventListener('pageshow', toTop);
  if (document.readyState !== 'loading') { toTop(); }
  else { document.addEventListener('DOMContentLoaded', toTop); }
})();
