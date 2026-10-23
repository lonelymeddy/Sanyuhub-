import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initZoomTypography(element) {
  if (!element) return () => {};

  element.classList.add('anim-zoom-in');

  const handleScroll = () => {
    if (prefersReducedMotion()) {
      element.classList.add('visible');
      element.style.transform = 'scale(1)';
      return;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Interpolate scale from 0.82 to 1.0 based on viewport progress
      const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.7), 0), 1);
      const scale = 0.82 + (1 - 0.82) * scrollProgress;
      element.style.transform = `scale(${scale.toFixed(3)})`;
      element.style.opacity = Math.min(0.85 + 0.15 * scrollProgress, 1).toFixed(2);
      element.classList.add('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}
