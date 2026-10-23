export function attachMicroInteractions(rootElement = document) {
  const interactiveElements = rootElement.querySelectorAll('.btn-primary, .btn-secondary, .cat-card, .category-button, .device');

  interactiveElements.forEach(el => {
    if (!el.classList.contains('interactive-btn')) {
      el.classList.add('interactive-btn');
    }
  });
}
