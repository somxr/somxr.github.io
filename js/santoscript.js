gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// // create the smooth scroller FIRST!
// const smoother = ScrollSmoother.create({
//  wrapper: "#wrapper",
//  content: "#content",
//  smooth: 3,
//  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
//  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
//  effects: true,
//  preventDefault: true
// });

// let's get at that scrollTrigger
// gsap.to('.trigger', {
//     scrollTrigger: '.trigger',
//     y:0,
//     opacity:1,
//     duration: .3
// });

// var containers = gsap.utils.toArray(".anim-wrap");

// containers.forEach(function (container) {
//   gsap.fromTo(
//     container.querySelectorAll(".trigger"),
//     { y: 350, opacity:0, },
//     {
//       y: 0,
//       opacity:1,
//       stagger: 0.3,
//       scrollTrigger: {
//         trigger: container,
//         // scrub: true,
//         // start: "top bottom",
//         start: "top 90%",
//         end: "top top",
//         immediateRender: false,
//         // markers: true
//       }
//     }
//   );
// });


// var banners = gsap.utils.toArray(".marquee");

// banners.forEach(function (banner) {
//   gsap.fromTo(
//     banner.querySelectorAll(".ticker"),
//     { x: 0, opacity: 0,},
//     {
//       x: -500, opacity:1,
//     //   stagger: 0.3,
//       scrollTrigger: {
//         trigger: banner,
//         scrub: true,
//         // start: "top bottom",
//         start: "top 95%",
//         end: "top -70%",
//         immediateRender: false,
//         // markers: true
//         toggleActions: "restart none none none",
//       }
//     }
//   );
// });


ScrollTrigger.create({
  trigger: "#spirit-tales",
  start: "top top", 
  end: "bottom bottom",
  pin: "#spirit-tales-side"
});

ScrollTrigger.create({
  trigger: "#bcr",
  start: "top top", 
  end: "bottom bottom",
  pin: "#bcr-side"
});

ScrollTrigger.create({
  trigger: "#btsr",
  start: "top top", 
  end: "bottom bottom",
  pin: "#btsr-side"
});

ScrollTrigger.create({
  trigger: "#poster2",
  start: "top top", 
  end: "bottom bottom",
  pin: "#poster2-side"
});


// splitter testing
// let tl = gsap.timeline();
// let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
// let chars = mySplitText.chars;

// chars.forEach((char, i) => {
//  smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
// });

