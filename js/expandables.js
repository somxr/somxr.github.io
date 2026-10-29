// Expandable "Process" boxes on project pages.
// Each .xbox-head button toggles its .xbox-body; boxes open independently.
document.querySelectorAll('.xbox').forEach(function (box) {
  var head = box.querySelector('.xbox-head');
  var body = box.querySelector('.xbox-body');
  var inner = box.querySelector('.xbox-inner');
  if (!head || !body) return;

  function setOpen(open) {
    head.setAttribute('aria-expanded', String(open));
    box.classList.toggle('is-open', open);
  }

  head.addEventListener('click', function () {
    setOpen(head.getAttribute('aria-expanded') !== 'true');
  });

  // "- Close" button at the bottom: collapse and bring the title back into view.
  if (inner) {
    var foot = document.createElement('div');
    foot.className = 'xbox-foot';
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'xbox-close';
    close.textContent = '− Close';
    foot.appendChild(close);
    inner.appendChild(foot);

    close.addEventListener('click', function () {
      setOpen(false);
      var top = box.getBoundingClientRect().top;
      if (top < 0) {
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: window.scrollY + top - 16, behavior: reduce ? 'auto' : 'smooth' });
      }
      head.focus({ preventScroll: true });
    });
  }

  // The page height changes when a box opens or closes, so let the pinned
  // side images (GSAP ScrollTrigger) recalculate once the slide finishes.
  body.addEventListener('transitionend', function (e) {
    if (e.target === body && e.propertyName === 'grid-template-rows' && window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  });
});
