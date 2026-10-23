// Hook to detect user's reduced motion preference
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function subscribeReducedMotion(callback) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = (e) => callback(e.matches);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
  }
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handler);
    } else if (mediaQuery.removeListener) {
      mediaQuery.removeListener(handler);
    }
  };
}
