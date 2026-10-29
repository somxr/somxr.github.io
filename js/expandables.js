// Expandable "Process" boxes on project pages.
// Each .xbox-head button toggles its .xbox-body; boxes open independently.
document.querySelectorAll('.xbox').forEach(function (box) {
  var head = box.querySelector('.xbox-head');
  var body = box.querySelector('.xbox-body');
  if (!head || !body) return;

  head.addEventListener('click', function () {
    var open = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!open));
    box.classList.toggle('is-open', !open);
  });

  // The page height changes when a box opens or closes, so let the pinned
  // side images (GSAP ScrollTrigger) recalculate once the slide finishes.
  body.addEventListener('transitionend', function (e) {
    if (e.target === body && e.propertyName === 'grid-template-rows' && window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  });
});
