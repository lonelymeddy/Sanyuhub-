import { prefersReducedMotion } from '../hooks/useReducedMotion.js';

export function initPinnedStorySection(containerElement, headlineElement, visualElement) {
  if (!containerElement || !headlineElement) return () => {};

  containerElement.classList.add('anim-pinned');

  const handleScroll = () => {
    if (prefersReducedMotion()) {
      headlineElement.style.transform = 'none';
      if (visualElement) visualElement.style.opacity = '1';
      return;
    }

    const rect = containerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= 80 && rect.bottom >= windowHeight * 0.5) {
      // Progress from 0 to 1 as container scrolls through
      const totalScrollable = rect.height - windowHeight + 80;
      const progress = Math.min(Math.max((-rect.top + 80) / Math.max(totalScrollable, 1), 0), 1);

      const scale = 1 + progress * 0.08;
      headlineElement.style.transform = `scale(${scale.toFixed(3)})`;

      if (visualElement) {
        visualElement.style.opacity = (0.3 + progress * 0.7).toFixed(2);
        visualElement.style.transform = `translateY(${(20 - progress * 20).toFixed(1)}px)`;
      }
    } else {
      headlineElement.style.transform = 'scale(1)';
      if (visualElement) visualElement.style.transform = 'translateY(0)';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}
