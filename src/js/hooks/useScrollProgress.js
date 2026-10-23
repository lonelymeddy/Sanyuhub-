// Hook to track scroll progress across a section or document
export function trackScrollProgress(element, callback) {
  if (!element || typeof callback !== 'function') return () => {};

  const handleScroll = () => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate ratio (0 = entering viewport, 1 = leaving top of viewport)
    const totalDist = rect.height + windowHeight;
    const progress = Math.min(Math.max((windowHeight - rect.top) / totalDist, 0), 1);

    callback({
      progress,
      rect,
      inView: rect.top < windowHeight && rect.bottom > 0
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}
