/* ============================================================
   LOCKED-IN — Shared Frontend Behaviour (main.js)
   ============================================================
   Only genuinely shared, cross-page behaviour lives here.
   Feature-specific logic belongs in each page's own JS file.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ── 1. Active nav-link highlighting ──────────────────────── */
  (() => {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.navbar-locked-in .nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      // Resolve relative href to absolute for comparison
      const a = document.createElement('a');
      a.href = href;
      if (a.pathname === currentPath || currentPath.startsWith(a.pathname) && a.pathname !== '/') {
        link.classList.add('active');
      }
    });
  })();

  /* ── 2. Navbar scroll effect ──────────────────────────────── */
  (() => {
    const navbar = document.querySelector('.navbar-locked-in');
    if (!navbar) return;
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ── 3. Bootstrap tooltip init ────────────────────────────── */
  (() => {
    const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipEls.forEach(el => {
      if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        new bootstrap.Tooltip(el);
      }
    });
  })();

  /* ── 4. Toast helper ──────────────────────────────────────── */
  window.showToast = function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
        position: fixed; bottom: 24px; right: 24px; z-index: 9999;
        display: flex; flex-direction: column; gap: 8px;
      `;
      document.body.appendChild(container);
    }
    const colorMap = {
      success: 'var(--color-success)',
      danger:  'var(--color-danger)',
      warning: 'var(--color-warning)',
      info:    'var(--color-info)',
    };
    const toast = document.createElement('div');
    toast.style.cssText = `
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-left: 4px solid ${colorMap[type] || colorMap.success};
      color: var(--color-text);
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.4);
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.3s ease;
      max-width: 360px;
    `;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.addEventListener('transitionend', () => toast.remove());
    }, 3500);
  };

  /* ── 5. Smooth fade-in-up on scroll ───────────────────────── */
  (() => {
    const els = document.querySelectorAll('.fade-in-up');
    if (!els.length) return;
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => {
        el.style.animationPlayState = 'paused';
        obs.observe(el);
      });
    }
  })();

  /* ── 6. Confirm-action helper (for admin pages etc.) ──────── */
  window.confirmAction = function confirmAction({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', type = 'danger' }) {
    return new Promise(resolve => {
      const id = 'confirmModal_' + Date.now();
      const colorClass = type === 'danger' ? 'btn-li-danger' : 'btn-li-primary';
      const iconClass  = type === 'danger' ? 'bi-exclamation-triangle text-danger' : 'bi-check-circle text-primary';
      const html = `
        <div class="modal fade modal-li" id="${id}" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
              <div class="modal-body">
                <div class="confirm-dialog-body">
                  <i class="bi ${iconClass} confirm-icon"></i>
                  <div class="confirm-title">${title}</div>
                  <p class="confirm-message">${message}</p>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn-li-outline" data-bs-dismiss="modal">${cancelText}</button>
                <button type="button" class="${colorClass}" id="${id}_confirm">${confirmText}</button>
              </div>
            </div>
          </div>
        </div>`;
      document.body.insertAdjacentHTML('beforeend', html);
      const modalEl = document.getElementById(id);
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
      document.getElementById(`${id}_confirm`).addEventListener('click', () => {
        modal.hide();
        resolve(true);
      });
      modalEl.addEventListener('hidden.bs.modal', () => {
        modalEl.remove();
        resolve(false);
      }, { once: true });
    });
  };

  /* ── 7. Relative time formatter ───────────────────────────── */
  window.formatRelativeTime = function formatRelativeTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60)    return 'just now';
    if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
});
