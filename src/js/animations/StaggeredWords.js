import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initStaggeredWords(element) {
  if (!element) return () => {};

  element.classList.add('anim-stagger-word');

  if (prefersReducedMotion()) {
    element.classList.add('visible');
    return () => {};
  }

  // If spans aren't already created, wrap each word in a <span> with staggered delay
  if (!element.querySelector('span')) {
    const text = element.textContent.trim();
    if (text) {
      const words = text.split(/\s+/);
      element.innerHTML = words
        .map((word, idx) => `<span style="transition-delay: ${idx * 35}ms">${word}</span>`)
        .join(' ');
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
  return () => observer.disconnect();
}
