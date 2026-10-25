import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initSectionEntrance(element) {
  if (!element) return () => {};

  element.classList.add('anim-section-rise');

  if (prefersReducedMotion()) {
    element.classList.add('visible');
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        // Once revealed, unobserve to maintain entrance state
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(element);
  return () => observer.disconnect();
}
