/**
 * CITRIX Application Entry Point
 * Orchestrates navigation, reactive state subscription, deep links,
 * and view lifecycle.
 */

import { store } from './state/store.js';
import { renderLandingView } from './views/LandingView.js';

// Expose store globally for inline event handlers
window.__citrixStore = store;

class App {
  constructor() {
    this.appRoot = document.getElementById('app');
    this.init();
  }

  init() {
    // Parse deep-link hash on startup
    const hash = window.location.hash.replace('#', '') || 'landing';
    store.currentView = hash;

    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '') || 'landing';
      if (store.currentView !== newHash) {
        store.currentView = newHash;
        this.render();
      }
    });

    store.subscribe(() => {
      this.render();
    });

    this.render();
  }

  render() {
    const view = store.currentView;

    // Toast Container (Always present)
    const toastHTML = `
      <div id="toast-container" class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        ${store.toasts.map(t => `
          <div class="pointer-events-auto px-4 py-2.5 rounded-xl border shadow-2xl text-xs font-semibold flex items-center gap-2.5 transition-all transform animate-bounce ${
            t.type === 'error' ? 'bg-rose-950 border-rose-600 text-rose-200' :
            t.type === 'success' ? 'bg-emerald-950 border-emerald-600 text-emerald-200' :
            'bg-slate-900 border-slate-700 text-slate-200'
          }">
            <span>${t.type === 'error' ? '❌' : t.type === 'success' ? '✅' : 'ℹ️'}</span>
            <span>${t.message}</span>
          </div>
        `).join('')}
      </div>
    `;

    // 1. Landing View (Premium Editorial Landing Experience)
    if (view === 'landing') {
      this.appRoot.innerHTML = `
        <div class="flex flex-col min-h-screen bg-[#F7F8F6] text-[#101110]">
          <main id="main-view-mount" class="flex-1"></main>
          ${toastHTML}
        </div>
      `;
      renderLandingView(document.getElementById('main-view-mount'));
      return;
    }

    // 2. Workspace View (Blank container for user's future frontend)
    // As requested: "when i click enter workspace, it should not enter anything, leave that blank, i have my other frontend that i will later add there, this is just a landing page"
    this.appRoot.innerHTML = `
      <div id="workspace-root" class="w-full min-h-screen bg-[#F7F8F6]">
        <!-- Blank workspace container for external frontend -->
      </div>
    `;
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
