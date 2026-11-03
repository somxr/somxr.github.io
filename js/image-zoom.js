// Click a project image to see it full size (desktop only).
// Skips cover/hero images, logos, linked images, menu cards and Process box thumbnails.
(function () {
  var desktop = window.matchMedia('(min-width: 822px)');
  var skip = '.menu-overlay, a, .image-wrapper, .xbox-head';

  var imgs = Array.prototype.filter.call(document.querySelectorAll('img'), function (img) {
    return !img.closest(skip) &&
      !img.classList.contains('show-on-mobile') &&
      !img.classList.contains('logo') &&
      !img.hasAttribute('data-no-zoom');
  });
  if (!imgs.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'img-zoom';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Enlarged image');
  overlay.tabIndex = -1;
  overlay.hidden = true;
  var big = document.createElement('img');
  overlay.appendChild(big);
  document.body.appendChild(overlay);

  var lastFocus = null;
  function close() {
    overlay.hidden = true;
    document.body.classList.remove('img-zoom-open');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function setup() {
    imgs.forEach(function (img) {
      if (desktop.matches) {
        img.classList.add('zoomable');
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Enlarge image' + (img.alt ? ': ' + img.alt : ''));
      } else {
        img.classList.remove('zoomable');
        img.removeAttribute('tabindex');
        img.removeAttribute('role');
        img.removeAttribute('aria-label');
      }
    });
  }

  imgs.forEach(function (img) {
    function open() {
      if (!desktop.matches) return;
      lastFocus = img;
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      overlay.hidden = false;
      document.body.classList.add('img-zoom-open');
      overlay.focus();
    }
    img.addEventListener('click', open);
    img.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && desktop.matches) { e.preventDefault(); open(); }
    });
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });

  setup();
  if (desktop.addEventListener) desktop.addEventListener('change', setup);
})();
