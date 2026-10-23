export function attachMicroInteractions(rootElement = document) {
  const interactiveSelector = [
    'button',
    '.btn-primary',
    '.btn-secondary',
    '.cat-card',
    '.category-button',
    '.device',
    '.menu-toggle',
    '[role="button"]'
  ].join(', ');

  const elements = rootElement.querySelectorAll(interactiveSelector);

  elements.forEach(el => {
    if (el.dataset.microAttached === 'true') return;
    el.dataset.microAttached = 'true';

    // Skip disabled elements from transform scale
    if (el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true' || el.classList.contains('btn-disabled') || el.classList.contains('btn-unsupported')) {
      return;
    }

    // Touch event handlers for instant mobile response on Android and iOS
    const handleTouchStart = () => {
      el.classList.add('is-pressed');
    };

    const handleTouchEnd = () => {
      el.classList.remove('is-pressed');
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Keyboard activation feedback (Space & Enter)
    el.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        el.classList.add('is-pressed');
      }
    });

    el.addEventListener('keyup', () => {
      el.classList.remove('is-pressed');
    });

    el.addEventListener('blur', () => {
      el.classList.remove('is-pressed');
    });
  });
}
