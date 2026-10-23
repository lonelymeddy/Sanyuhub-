import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initDirectionalReveal(element, direction = 'left') {
  if (!element) return () => {};

  element.classList.add(direction === 'right' ? 'anim-slide-right' : 'anim-slide-left');

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
  }, { threshold: 0.1 });

  observer.observe(element);
  return () => observer.disconnect();
}
