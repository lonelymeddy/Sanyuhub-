/**
 * ButtonAction - Reusable button interaction handler
 * Manages tactile press feedback, loading animations, state disabling,
 * temporary color changes, duplicate click prevention, and success/error feedback.
 */

export function executeButtonAction(button, asyncAction, options = {}) {
  if (!button || button.disabled || button.dataset.loading === 'true') {
    return Promise.resolve();
  }

  const {
    loadingText = 'Processing...',
    successText = 'Completed',
    errorText = 'Failed',
    successDuration = 1800,
    errorDuration = 2400,
    onSuccess = null,
    onError = null
  } = options;

  // Save original contents and styles
  const originalHTML = button.innerHTML;
  const originalWidth = button.offsetWidth ? `${button.offsetWidth}px` : '';

  // Prevent duplicate clicks
  button.dataset.loading = 'true';
  button.disabled = true;
  if (originalWidth) {
    button.style.minWidth = originalWidth;
  }

  // Tactile interaction feedback
  button.classList.add('btn-state-loading');

  // Loading spinner SVG
  const spinnerSvg = `
    <svg class="btn-spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite; display: inline-block; vertical-align: middle; margin-right: 6px;">
      <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
      <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
    </svg>
  `;

  button.innerHTML = `${spinnerSvg}<span>${loadingText}</span>`;

  return Promise.resolve()
    .then(() => asyncAction())
    .then((result) => {
      button.classList.remove('btn-state-loading');
      button.classList.add('btn-state-success');

      const checkSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      button.innerHTML = `${checkSvg}<span>${typeof successText === 'function' ? successText(result) : successText}</span>`;

      if (typeof onSuccess === 'function') {
        try { onSuccess(result); } catch (e) { console.error(e); }
      }

      setTimeout(() => {
        resetButton(button, originalHTML);
      }, successDuration);

      return result;
    })
    .catch((err) => {
      console.error('Button action failure:', err);
      button.classList.remove('btn-state-loading');
      button.classList.add('btn-state-error');

      const errorMsg = (err && err.message) ? err.message : errorText;
      const alertSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="display: inline-block; vertical-align: middle; margin-right: 6px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;

      button.innerHTML = `${alertSvg}<span>${errorMsg}</span>`;

      if (typeof onError === 'function') {
        try { onError(err); } catch (e) { console.error(e); }
      }

      setTimeout(() => {
        resetButton(button, originalHTML);
      }, errorDuration);

      throw err;
    });
}

function resetButton(button, originalHTML) {
  button.classList.remove('btn-state-loading', 'btn-state-success', 'btn-state-error');
  button.disabled = false;
  button.removeAttribute('data-loading');
  button.style.minWidth = '';
  button.innerHTML = originalHTML;
}

// Make globally available in browser window for vanilla JS components
if (typeof window !== 'undefined') {
  window.executeButtonAction = executeButtonAction;
}
