/**
 * CITRIX Unified Navigation Sidebar
 * Features the signature deep emerald/teal active highlights,
 * semantic Lucide-style SVG icons, and responsive collapsing.
 */

import { store } from '../state/store.js';

export function renderSidebar(container) {
  const current = store.currentView;

  const links = [
    {
      id: 'dean_cc',
      label: 'Campus',
      badge: null,
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
    },
    {
      id: 'timetable',
      label: 'Timetable',
      badge: null,
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
    },
    {
      id: 'bookings',
      label: 'Bookings',
      badge: null,
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>`
    },
    {
      id: 'spectra',
      label: 'Spectra',
      badge: '25',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>`
    },
    {
      id: 'midsem',
      label: 'Midsem',
      badge: '41',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`
    },
    {
      id: 'changes',
      label: 'Changes',
      badge: 'Diff',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>`
    },
    {
      id: 'assistant',
      label: 'Assistant',
      badge: 'AI',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>`
    },
    {
      id: 'approvals',
      label: 'Approvals',
      badge: '5',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
    },
    {
      id: 'dashboards',
      label: 'Role Views',
      badge: null,
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
    },
    {
      id: 'admin',
      label: 'Admin Data',
      badge: 'Export',
      icon: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
    }
  ];

  const html = `
    <aside class="w-56 bg-[#0B132B] border-r border-slate-800 text-slate-300 flex flex-col justify-between p-3 select-none">
      <nav class="space-y-1">
        ${links.map(l => {
          const isActive = (current === l.id) || (l.id === 'dean_cc' && (current === 'campus' || current === 'dean_cc'));
          return `
            <button onclick="window.__citrixStore.setView('${l.id}')"
              class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-[#007A64] text-white font-semibold shadow-sm shadow-emerald-950/50' : 'hover:bg-slate-800/80 hover:text-white text-slate-400'}">
              <div class="flex items-center gap-3">
                <span class="${isActive ? 'text-white' : 'text-slate-400'}">${l.icon}</span>
                <span>${l.label}</span>
              </div>
              ${l.badge ? `<span class="px-1.5 py-0.2 rounded text-[10px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400 border border-slate-700'}">${l.badge}</span>` : ''}
            </button>
          `;
        }).join('')}
      </nav>

      <!-- Bottom Status Widget -->
      <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">Campus Solver</span>
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </div>
        <div class="text-emerald-400 font-bold text-xs flex items-center gap-1">
          <span>●</span> 0 Hard Conflicts
        </div>
        <div class="text-[10px] text-slate-400 mt-1">
          243 contact hours / wk scheduled
        </div>
      </div>
    </aside>
  `;

  container.innerHTML = html;
}
