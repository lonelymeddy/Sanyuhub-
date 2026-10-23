import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initBlurToFocus(element) {
  if (!element) return () => {};

  element.classList.add('anim-blur-focus');

  if (prefersReducedMotion()) {
    element.classList.add('visible');
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  observer.observe(element);
  return () => observer.disconnect();
}
