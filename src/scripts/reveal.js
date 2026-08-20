import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const items = gsap.utils.toArray(".reveal");

if (prefersReducedMotion) {
  items.forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = "none";
  });
} else {
  items.forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: (i % 3) * 0.06,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}
