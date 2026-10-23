import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initStaggeredWords(element) {
  if (!element) return () => {};

  if (prefersReducedMotion()) {
    element.classList.add('visible');
    return () => {};
  }

  element.classList.add('visible');
  return () => {};
}
