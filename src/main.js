/**
 * CITRIX Application Entry Point
 * Mounts the CITRIX Landing Page.
 */

import { renderLandingView } from './views/LandingView.js';

class App {
  constructor() {
    this.appRoot = document.getElementById('app');
    this.render();
  }

  render() {
    this.appRoot.innerHTML = `
      <div class="flex flex-col min-h-screen bg-[#F7F8F6] text-[#101110]">
        <main id="main-view-mount" class="flex-1"></main>
      </div>
    `;
    renderLandingView(document.getElementById('main-view-mount'));
  }
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
