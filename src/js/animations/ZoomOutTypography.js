import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initZoomOutTypography(element) {
  if (!element) return () => {};

  element.classList.add('anim-zoom-out');

  const handleScroll = () => {
    if (prefersReducedMotion()) {
      element.style.transform = 'scale(1)';
      return;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Interpolate scale from 1.0 down to 0.78 as user advances through section
      const scrolled = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 1.2), 0), 1);
      const scale = 1.0 - (1.0 - 0.78) * scrolled;
      element.style.transform = `scale(${scale.toFixed(3)})`;
      element.style.opacity = (1.0 - 0.2 * scrolled).toFixed(2);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}
