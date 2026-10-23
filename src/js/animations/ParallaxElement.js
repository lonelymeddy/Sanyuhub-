import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initParallaxElement(element, rate = 0.2, maxOffset = 40) {
  if (!element) return () => {};

  element.classList.add('anim-parallax');

  const handleScroll = () => {
    if (prefersReducedMotion()) {
      element.style.transform = 'none';
      return;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const centerY = rect.top + rect.height / 2;
      const distFromCenter = centerY - windowHeight / 2;
      let offsetY = distFromCenter * rate;
      offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
      element.style.transform = `translateY(${offsetY.toFixed(2)}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}
