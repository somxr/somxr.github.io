// Scroll reveal: content blocks fade in and drift up slightly as they enter
// the viewport; the pinned side images (aside.showcase) only fade.
// The hidden state comes only from classes added here, so without JS (or with
// reduced motion) everything simply stays visible.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Must match the durations in the "Scroll reveal" block of css/styles.css.
  var RISE_MS = 600;
  var FADE_MS = 800;
  var STEP_MS = 60;
  var MAX_DELAY_MS = 300;

  var RISE = [
    '.section-header',
    '.hero-text',
    '.hero-text + .fit',                  // AR page: analytics image under the "200+ Million" heading
    '.vision-text',
    '.case-description > :not(.process)', // title, paragraphs, images, videos, embeds, buttons
    '.case-description > .process > *',   // "Process" heading and each box, not the wrapper
    '.project-section .content-half',
    '.filter-grid-item',
    '.spirit-tales-themes',
    '.aside-header-left',
    '.article-right > .description',
    '.end-navigation'
  ].join(', ');

  // Never animate the menu copy or the content of collapsed Process boxes.
  var SKIP = '.menu-overlay, .xbox-body';

  document.documentElement.classList.add('reveal-on');

  var rise = [];
  Array.prototype.forEach.call(document.querySelectorAll(RISE), function (el) {
    if (el.closest(SKIP) || el.matches('aside.showcase, script, style, br')) return;
    // querySelectorAll returns elements in document order, so any ancestor
    // target has already been marked; skip nested ones.
    if (el.parentElement && el.parentElement.closest('.reveal')) return;
    el.classList.add('reveal');
    rise.push(el);
  });

  var fade = [];
  Array.prototype.forEach.call(document.querySelectorAll('aside.showcase'), function (el) {
    if (el.closest(SKIP)) return;
    el.classList.add('reveal-fade'); // opacity only: never transform a pinned showcase
    fade.push(el);
  });

  // Put the element back to exactly its own styles (several targets have
  // their own transition or hover transform that .reveal would override).
  function cleanup(el) {
    el.classList.remove('reveal', 'reveal-fade', 'is-visible');
    el.style.removeProperty('--reveal-delay');
    if (el.getAttribute('style') === '') el.removeAttribute('style');
  }

  function makeObserver(duration, rootMargin) {
    var io = new IntersectionObserver(function (entries) {
      var shown = [];
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          shown.push(entry.target);
        } else if (entry.boundingClientRect.bottom < 0) {
          // Already scrolled past (e.g. back button): show it straight away.
          io.unobserve(entry.target);
          cleanup(entry.target);
        }
      });

      // Stagger the ones that appear together, in document order.
      shown.sort(function (a, b) {
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
      shown.forEach(function (el, i) {
        var delay = Math.min(i * STEP_MS, MAX_DELAY_MS);
        io.unobserve(el);
        el.style.setProperty('--reveal-delay', delay + 'ms');
        el.classList.add('is-visible');
        // A timeout rather than transitionend, which can be missed.
        setTimeout(function () { cleanup(el); }, duration + delay + 100);
      });
    }, { threshold: 0, rootMargin: rootMargin });
    return io;
  }

  var riseObserver = makeObserver(RISE_MS, '0px 0px -10% 0px');
  rise.forEach(function (el) { riseObserver.observe(el); });

  var fadeObserver = makeObserver(FADE_MS, '0px 0px -15% 0px');
  fade.forEach(function (el) { fadeObserver.observe(el); });
})();
