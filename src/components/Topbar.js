/**
 * CITRIX Unified Navigation Topbar
 * Displays brand, dynamic breadcrumbs, date range navigator,
 * system notifications bell, and role-based user switcher.
 */

import { store, ROLES } from '../state/store.js';

export function renderTopbar(container) {
  const user = store.currentUser;

  // Breadcrumbs text based on current view and 3D spatial state
  let breadcrumb = 'Campus';
  if (store.currentView === 'campus' || store.currentView === 'dean_cc') {
    breadcrumb = `Campus / Academic A / Floor ${store.selectedFloor}`;
  } else if (store.currentView === 'timetable') {
    breadcrumb = 'Weekly Timetable · Plan, Allocate & Optimize';
  } else if (store.currentView === 'spectra') {
    breadcrumb = 'Spectra Bookings · Campus Priority & Space Allocation';
  } else if (store.currentView === 'midsem') {
    breadcrumb = 'Midsem Exams · Hall Allocations (50% Capacity)';
  } else if (store.currentView === 'changes') {
    breadcrumb = 'Review Timetable Repair · Disruption Diff & Impact';
  } else if (store.currentView === 'assistant') {
    breadcrumb = 'Faculty Assistant · Natural Language Schedule Helper';
  } else if (store.currentView === 'approvals') {
    breadcrumb = 'Approvals & Audit · Central Decision Queue';
  } else if (store.currentView === 'admin') {
    breadcrumb = 'Admin · Dataset Upload & Official Schedule Exports';
  }

  const html = `
    <header class="h-16 bg-[#0B132B] border-b border-slate-800 text-white flex items-center justify-between px-6 z-30 sticky top-0 shadow-md">
      <!-- Left: Brand & Breadcrumbs -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.__citrixStore.setView('landing')">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-black tracking-wider text-white shadow-lg shadow-emerald-900/30">
            C
          </div>
          <div>
            <div class="font-extrabold tracking-tight text-lg text-white leading-none">CITRIX</div>
            <div class="text-[10px] text-slate-400 tracking-wide font-medium">Chilika Institute of Technology</div>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-2 pl-4 border-l border-slate-800 text-sm">
          <span class="text-slate-400 font-medium">${breadcrumb}</span>
        </div>
      </div>

      <!-- Center: Date Range Navigator -->
      <div class="hidden lg:flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 shadow-sm">
        <button class="hover:text-emerald-400 transition-colors p-1" title="Previous Week">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span class="flex items-center gap-2 font-medium">
          <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Mon, 12 Aug – Sun, 18 Aug 2024
          <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
        </span>
        <button class="hover:text-emerald-400 transition-colors p-1" title="Next Week">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <!-- Right: View Mode Toggle, Notifications & Role Switcher -->
      <div class="flex items-center gap-4">
        <!-- 3D vs 2D Toggle (If on Campus Explorer or Dean CC) -->
        <button onclick="window.__citrixStore.toggleViewMode()" 
          class="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border border-slate-700 bg-slate-800 text-slate-200 hover:border-emerald-500 hover:text-emerald-400 transition-all">
          <span class="w-2 h-2 rounded-full ${store.viewMode3D ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}"></span>
          ${store.viewMode3D ? '3D View' : '2D Fallback'}
        </button>

        <!-- Notification Bell -->
        <div class="relative cursor-pointer hover:text-emerald-400 transition-colors" onclick="window.__toggleNotifs()">
          <svg class="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
            ${store.notifications.length}
          </span>
        </div>

        <!-- Role User Dropdown Pill -->
        <div class="relative group">
          <button class="flex items-center gap-2.5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-left transition-all">
            <div class="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center justify-center">
              ${user.initials}
            </div>
            <div class="hidden sm:block">
              <div class="text-xs font-semibold text-white leading-tight">${user.name}</div>
              <div class="text-[10px] text-slate-400 leading-tight">${user.label}</div>
            </div>
            <svg class="w-3.5 h-3.5 text-slate-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>

          <!-- Dropdown Menu for Instant Role Switching -->
          <div class="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 hidden group-hover:block z-50">
            <div class="px-3 py-2 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Switch User Role Context
            </div>
            ${Object.keys(ROLES).map(k => {
              const r = ROLES[k];
              const isActive = r.id === user.id;
              return `
                <button onclick="window.__citrixStore.setUser('${k}')" class="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-all ${isActive ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-600/50' : 'hover:bg-slate-800 text-slate-200'}">
                  <div>
                    <div class="text-xs font-semibold">${r.label}</div>
                    <div class="text-[10px] text-slate-400">${r.name}</div>
                  </div>
                  ${isActive ? '<span class="text-xs text-emerald-400 font-bold">✓</span>' : ''}
                </button>
              `;
            }).join('')}
            <div class="mt-2 pt-2 border-t border-slate-800 text-center">
              <button onclick="window.__citrixStore.setView('login')" class="text-xs text-rose-400 hover:underline">
                Sign Out / Return to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  container.innerHTML = html;
}
