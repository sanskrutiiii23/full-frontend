/**
 * CITRIX Dean's Command Center (Flagship View)
 * Institution-wide real-time intelligence communicating campus operational state at a glance.
 * Reproduces WhatsApp Image 2026-10-31 at 5.28.02 PM (1).jpeg with exact fidelity:
 * - 4 Metric cards (27 Rooms, 189 Sessions, 40 Faculty, Pending approvals)
 * - Interactive 3D Campus viewer with live floating HUD tags & zoom controls
 * - Needs Attention widget & Pending Approvals drawer
 * - What-If Analysis Simulator with realistic backend proposal calculation
 * - Room Occupancy Heatmap Grid (Buildings x Time Slots)
 * - Departmental Availability Table
 */

import { BUILDINGS, ROOMS } from '../state/dataset.js';
import { store } from '../state/store.js';
import { CampusScene } from '../campus3d/CampusScene.js';

export function renderDeanCommandCenter(container) {
  const pendingApprovalsCount = store.bookings.filter(b => b.status === 'pending').length;

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-6">
      <!-- Title & Header Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Campus, at a glance</h1>
          <div class="text-xs text-slate-400 font-medium">Institutional view · Chilika Institute of Technology</div>
        </div>
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
            Teaching Week: <strong class="text-emerald-400">Week 12</strong> (2 Nov - 8 Nov)
          </span>
          <button onclick="window.__citrixStore.setView('campus')" 
            class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all">
            Open Campus Explorer →
          </button>
        </div>
      </div>

      <!-- Top 4 Metric Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- 27 Rooms -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-lg">
          <div class="flex items-center gap-3.5">
            <div class="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <div class="text-2xl font-black text-white">27</div>
              <div class="text-xs text-slate-400 font-medium">Rooms</div>
            </div>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
        </div>

        <!-- 189 Sessions -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-lg">
          <div class="flex items-center gap-3.5">
            <div class="p-3 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <div>
              <div class="text-2xl font-black text-white">189</div>
              <div class="text-xs text-slate-400 font-medium">Sessions</div>
            </div>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
        </div>

        <!-- 40 Faculty -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-lg">
          <div class="flex items-center gap-3.5">
            <div class="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <div class="text-2xl font-black text-white">40</div>
              <div class="text-xs text-slate-400 font-medium">Faculty</div>
            </div>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
        </div>

        <!-- Pending Approvals -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center justify-between shadow-lg">
          <div class="flex items-center gap-3.5">
            <div class="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <div class="text-2xl font-black text-white">${pendingApprovalsCount}</div>
              <div class="text-xs text-slate-400 font-medium">Pending approvals</div>
            </div>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
        </div>
      </div>

      <!-- Main Middle Grid: 3D Campus on Left (2/3) + Operations Radar on Right (1/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Central 3D Canvas with Floating HUD Pins -->
        <div class="lg:col-span-2 relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden min-h-[460px] shadow-2xl flex flex-col">
          <div id="dean-canvas-container" class="w-full flex-1 relative">
            <!-- Floating Building HUD Tags -->
            <div class="absolute inset-0 pointer-events-none z-10 p-4">
              <!-- HUD Academic Block A -->
              <div class="absolute top-16 left-12 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-emerald-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('academic_a'); window.__citrixDeanFocus('academic_a');">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span class="text-xs font-bold text-white">Academic Block A</span>
                <span class="text-[10px] text-slate-400">12 sessions</span>
              </div>

              <!-- HUD Academic Block B -->
              <div class="absolute top-8 left-48 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-amber-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('academic_b'); window.__citrixDeanFocus('academic_b');">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span class="text-xs font-bold text-white">Academic Block B</span>
                <span class="text-[10px] text-slate-400">8 sessions</span>
              </div>

              <!-- HUD Central Plaza -->
              <div class="absolute top-20 right-48 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-blue-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('central_plaza'); window.__citrixDeanFocus('central_plaza');">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                <span class="text-xs font-bold text-white">Central Plaza</span>
                <span class="text-[10px] text-slate-400">Event · Demo</span>
              </div>

              <!-- HUD Science Complex -->
              <div class="absolute top-36 right-16 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-emerald-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('science_complex'); window.__citrixDeanFocus('science_complex');">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span class="text-xs font-bold text-white">Science Complex</span>
                <span class="text-[10px] text-slate-400">6 sessions</span>
              </div>

              <!-- HUD Library -->
              <div class="absolute bottom-16 left-48 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-emerald-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('library'); window.__citrixDeanFocus('library');">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span class="text-xs font-bold text-white">Library</span>
                <span class="text-[10px] text-slate-400">4 sessions</span>
              </div>

              <!-- HUD Auditorium -->
              <div class="absolute bottom-20 right-36 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-xl flex items-center gap-2 pointer-events-auto cursor-pointer hover:border-rose-500 transition-all"
                onclick="window.__citrixStore.selectBuilding('auditorium'); window.__citrixDeanFocus('auditorium');">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span class="text-xs font-bold text-white">Auditorium</span>
                <span class="text-[10px] text-slate-400">2 sessions</span>
              </div>
            </div>

            <!-- Canvas Bottom Controls: Building Selector & Zoom Controls -->
            <div class="absolute bottom-4 left-4 z-20 flex items-center gap-2">
              <select onchange="window.__citrixStore.selectBuilding(this.value); window.__citrixDeanFocus(this.value);" 
                class="bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-medium shadow-lg outline-none hover:border-emerald-500 transition-all">
                <option value="">Buildings ▾</option>
                ${BUILDINGS.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
              </select>
            </div>

            <div class="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 rounded-lg p-1 shadow-lg">
              <button onclick="window.__citrixDeanZoomIn()" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm bg-slate-700/60 rounded" title="Zoom In">+</button>
              <button onclick="window.__citrixDeanZoomOut()" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm bg-slate-700/60 rounded" title="Zoom Out">−</button>
              <button onclick="window.__citrixDeanReset()" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white text-xs bg-slate-700/60 rounded" title="Reset Camera">⌂</button>
            </div>
          </div>
        </div>

        <!-- Right Operations Sidebar (Needs attention, Approvals, What-If, Insights) -->
        <div class="space-y-4">
          <!-- Needs Attention Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Needs Attention</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-rose-500/80 transition-all flex items-center justify-between cursor-pointer"
                onclick="window.__citrixStore.setView('changes')">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500 flex-shrink-0"></span>
                  <div>
                    <div class="font-bold text-slate-200">Room conflict detected</div>
                    <div class="text-[11px] text-slate-400">AC-A101 · Mon, 12 Aug · 10:00–11:00</div>
                  </div>
                </div>
                <span class="text-slate-400 text-sm">›</span>
              </div>

              <div class="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-amber-500/80 transition-all flex items-center justify-between cursor-pointer">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                  <div>
                    <div class="font-bold text-slate-200">Room under maintenance</div>
                    <div class="text-[11px] text-slate-400">Lab-2 · Tue, 13 Aug · Full day</div>
                  </div>
                </div>
                <span class="text-slate-400 text-sm">›</span>
              </div>

              <div class="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/70 hover:border-amber-500/80 transition-all flex items-center justify-between cursor-pointer"
                onclick="window.__citrixStore.setView('spectra')">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                  <div>
                    <div class="font-bold text-slate-200">High room demand</div>
                    <div class="text-[11px] text-slate-400">CSE · Tue, 13 Aug · 3 pending bookings</div>
                  </div>
                </div>
                <span class="text-slate-400 text-sm">›</span>
              </div>
            </div>
          </div>

          <!-- Pending Approvals Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Pending Approvals</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700"
                onclick="window.__citrixStore.setView('approvals')">
                <div>
                  <div class="font-semibold text-white">Room booking request</div>
                  <div class="text-[10px] text-slate-400">CSE · AC-B203 · Tue, 13 Aug</div>
                </div>
                <span class="text-slate-400">›</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700"
                onclick="window.__citrixStore.setView('approvals')">
                <div>
                  <div class="font-semibold text-white">New course room allocation</div>
                  <div class="text-[10px] text-slate-400">Mathematics · 2 sessions</div>
                </div>
                <span class="text-slate-400">›</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-slate-700"
                onclick="window.__citrixStore.setView('changes')">
                <div>
                  <div class="font-semibold text-white">Timetable change request</div>
                  <div class="text-[10px] text-slate-400">ECE · Swap slots · Mon, 12 Aug</div>
                </div>
                <span class="text-slate-400">›</span>
              </div>
            </div>
            <div class="mt-3 text-right">
              <button onclick="window.__citrixStore.setView('approvals')" class="text-xs text-emerald-400 hover:underline font-semibold">
                View all approvals (5) ›
              </button>
            </div>
          </div>

          <!-- What-If Analysis Engine -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">What-if analysis</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="space-y-3">
              <select id="whatif-select" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-medium outline-none">
                <option value="close_academic_a">Close Academic A tomorrow</option>
                <option value="shift_ece_afternoon">Shift ECE Sessions to Afternoon</option>
              </select>

              <button onclick="window.__runWhatIfSimulation()" 
                class="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2">
                <span>▷</span> Preview impact
              </button>
              <div class="text-[10px] text-slate-400 text-center">
                Runs a proposal; does not change the timetable.
              </div>

              <!-- Dynamic Simulation Result Box -->
              <div id="whatif-result-container" class="mt-2 text-xs ${store.whatIfResult ? '' : 'hidden'}">
                ${store.whatIfResult ? `
                  <div class="p-3 bg-emerald-950/40 border border-emerald-600/40 rounded-xl text-emerald-200 space-y-1.5">
                    <div class="font-bold text-xs text-emerald-300">${store.whatIfResult.title}</div>
                    <div class="text-[11px]">• Displaced: ${store.whatIfResult.displacedSessions} sessions</div>
                    <div class="text-[11px]">• Reassigned without clashes: ${store.whatIfResult.reassignedSuccessfully}</div>
                    <div class="text-[10px] text-slate-300 mt-1">${store.whatIfResult.capacityImpact}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>

          <!-- Insights Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Insights (sample)</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="flex gap-2.5 text-xs text-slate-300">
              <span class="text-amber-400 text-base">💡</span>
              <ul class="space-y-1.5 text-[11px] list-disc list-inside text-slate-300">
                <li>CSE has the highest demand next week.</li>
                <li>2 room conflicts need approval.</li>
                <li>Library and Science Complex have available slots.</li>
                <li>Consider shifting one non-core session from Academic A (as per what-if analysis).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Grid: Room Occupancy Heatmap (Left) + Departmental Availability Table (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Room Occupancy Sample View (Heatmap) -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
            <span class="text-sm font-bold text-white">Room occupancy (sample view)</span>
            <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
          </div>

          <!-- Heatmap Matrix -->
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-[10px] text-slate-400 border-b border-slate-800">
                  <th class="py-2 pr-3 font-semibold">Time</th>
                  <th class="p-1 text-center">8-9</th>
                  <th class="p-1 text-center">9-10</th>
                  <th class="p-1 text-center">10-11</th>
                  <th class="p-1 text-center">11-12</th>
                  <th class="p-1 text-center">12-1</th>
                  <th class="p-1 text-center">1-2</th>
                  <th class="p-1 text-center">2-3</th>
                  <th class="p-1 text-center">3-4</th>
                  <th class="p-1 text-center">4-5</th>
                  <th class="p-1 text-center">5-6</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 font-medium">
                ${renderHeatmapRow('Academic A', [1, 2, 4, 4, 2, 0, 3, 4, 3, 2])}
                ${renderHeatmapRow('Academic B', [1, 2, 3, 3, 2, 0, 3, 3, 2, 1])}
                ${renderHeatmapRow('Science Cmplx', [2, 4, 4, 4, 2, 0, 4, 4, 4, 2])}
                ${renderHeatmapRow('Library', [0, 1, 2, 2, 1, 0, 2, 2, 1, 0])}
                ${renderHeatmapRow('Auditorium', [0, 1, 1, 2, 1, 0, 2, 3, 2, 0])}
                ${renderHeatmapRow('Labs', [2, 4, 4, 4, 2, 0, 4, 4, 4, 2])}
              </tbody>
            </table>
          </div>

          <!-- Heatmap Legend -->
          <div class="flex items-center justify-end gap-3 mt-4 text-[10px] text-slate-400">
            <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-slate-800"></span> Free</div>
            <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-emerald-900/60"></span> Low</div>
            <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-emerald-700/80"></span> Medium</div>
            <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-emerald-500"></span> High</div>
          </div>
        </div>

        <!-- Departmental Availability Table -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <span class="text-sm font-bold text-white">Departmental availability</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-[10px] text-slate-400 border-b border-slate-800">
                  <th class="py-2 font-semibold">Department</th>
                  <th class="py-2 text-center font-semibold">Rooms available</th>
                  <th class="py-2 text-right font-semibold">Upcoming sessions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60">
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">CSE</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">3 / 6</td>
                  <td class="py-2 text-right text-slate-300">12</td>
                </tr>
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">ECE</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">4 / 6</td>
                  <td class="py-2 text-right text-slate-300">10</td>
                </tr>
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">Mechanical</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">5 / 5</td>
                  <td class="py-2 text-right text-slate-300">8</td>
                </tr>
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">Civil</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">4 / 5</td>
                  <td class="py-2 text-right text-slate-300">6</td>
                </tr>
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">Electrical</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">4 / 5</td>
                  <td class="py-2 text-right text-slate-300">7</td>
                </tr>
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-2 font-semibold text-white">Mathematics</td>
                  <td class="py-2 text-center text-emerald-400 font-bold">6 / 6</td>
                  <td class="py-2 text-right text-slate-300">9</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pt-3 border-t border-slate-800 text-right">
            <button onclick="window.__citrixStore.setView('timetable')" class="text-xs text-emerald-400 hover:underline font-semibold">
              View all departments ›
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Initialize embedded 3D scene
  const canvasContainer = document.getElementById('dean-canvas-container');
  if (canvasContainer) {
    const scene = new CampusScene(canvasContainer, (bId) => {
      store.selectBuilding(bId);
    });
    window.__citrixDeanScene = scene;
    window.__citrixDeanFocus = (id) => scene.focusBuilding(id);
    window.__citrixDeanZoomIn = () => scene.zoomIn();
    window.__citrixDeanZoomOut = () => scene.zoomOut();
    window.__citrixDeanReset = () => scene.resetCamera();
  }

  window.__runWhatIfSimulation = () => {
    const sel = document.getElementById('whatif-select');
    if (sel) {
      store.runWhatIf(sel.value);
    }
  };
}

function renderHeatmapRow(buildingName, slots) {
  const getCellColor = (val) => {
    if (val === 0) return 'bg-slate-800/40 text-slate-600';
    if (val === 1) return 'bg-emerald-950/70 text-emerald-400';
    if (val === 2) return 'bg-emerald-800/80 text-emerald-200';
    if (val === 3) return 'bg-emerald-600/90 text-white';
    return 'bg-emerald-500 text-white font-bold';
  };

  return `
    <tr class="hover:bg-slate-800/30 transition-colors">
      <td class="py-2 pr-3 font-semibold text-white whitespace-nowrap">${buildingName}</td>
      ${slots.map(v => `
        <td class="p-1 text-center">
          <div class="w-7 h-6 rounded flex items-center justify-center text-[10px] mx-auto ${getCellColor(v)}">
            ${v > 0 ? v : '–'}
          </div>
        </td>
      `).join('')}
    </tr>
  `;
}
