/**
 * CITRIX Midsem Examination Workspace
 * Handles the 41 official midsem exams, the 50% hall capacity spacing rule,
 * exam hall generators, and export readiness.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.03 PM (1).jpeg (Bottom Screen).
 */

import { store } from '../state/store.js';
import { MIDSEM_EXAMS, ROOMS } from '../state/dataset.js';

export function renderMidsemView(container) {
  const exams = store.exams;
  let selectedRoomId = 'A-104';
  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[3];

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- Title & Action Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Midsem exams</h1>
          <div class="text-xs text-slate-400 font-medium">Schedule · Validate · Publish · Chilika Institute of Technology</div>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.__generateMidsemSolver()"
            class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
            <span>▶</span> Generate exams
          </button>
          <button onclick="window.__citrixStore.setView('admin')"
            class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs shadow transition-all flex items-center gap-1.5">
            <span>↓</span> Export
          </button>
        </div>
      </div>

      <!-- Banner -->
      <div class="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl flex items-center gap-2.5 text-xs text-blue-200">
        <span class="text-blue-400 font-bold">ⓘ</span>
        <span>Demo preview · Validation results appear after generation. No real exam schedule is implied.</span>
      </div>

      <!-- Main Layout: Table (3 cols) + Room Details (1 col) -->
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <!-- Exams Table -->
        <div class="xl:col-span-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl overflow-x-auto">
          <div class="text-xs text-slate-400 mb-3 font-semibold">Exam schedule (Demo preview · 41 exams)</div>
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-[10px] text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                <th class="py-2.5 px-3 font-semibold w-8">#</th>
                <th class="py-2.5 px-3 font-semibold">Course code</th>
                <th class="py-2.5 px-3 font-semibold">Course title</th>
                <th class="py-2.5 px-3 font-semibold">Group / Semester</th>
                <th class="py-2.5 px-3 font-semibold">Date</th>
                <th class="py-2.5 px-3 font-semibold">Time</th>
                <th class="py-2.5 px-3 font-semibold">Room</th>
                <th class="py-2.5 px-3 text-right font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              ${exams.slice(0, 10).map((ex, idx) => `
                <tr class="hover:bg-slate-800/40 transition-colors">
                  <td class="py-3 px-3 text-slate-500">${idx + 1}</td>
                  <td class="py-3 px-3 font-bold text-emerald-400">${ex.courseCode}</td>
                  <td class="py-3 px-3 font-semibold text-white">${ex.courseTitle}</td>
                  <td class="py-3 px-3 text-slate-300">${ex.group}</td>
                  <td class="py-3 px-3 text-slate-300">${ex.date}</td>
                  <td class="py-3 px-3 font-mono text-[11px] text-slate-200">${ex.time}</td>
                  <td class="py-3 px-3 font-medium text-white">${ex.roomId}</td>
                  <td class="py-3 px-3 text-right font-mono text-slate-400">${ex.duration}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Right Side: Room Details (50% capacity) & Validation Check -->
        <div class="space-y-5">
          <!-- Room Details Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Room details</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div>
              <label class="block text-[10px] text-slate-400 mb-1">Select Hall / Room</label>
              <select onchange="window.__selectMidsemRoom(this.value)" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-medium outline-none">
                <option value="A-104">A-104 (Lecture Hall · 80 seats)</option>
                <option value="AUD-Mini">AUD-Mini (Mini Auditorium · 120 seats)</option>
                <option value="B-201">B-201 (Seminar Hall · 80 seats)</option>
              </select>
            </div>

            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400">Normal capacity</span>
                <span class="font-bold text-white text-sm">80 seats</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400">Effective exam capacity</span>
                <span class="font-bold text-emerald-400 text-sm">40 seats</span>
              </div>
            </div>

            <!-- Exam 50% Rule Callout -->
            <div class="p-3 bg-emerald-950/30 border border-emerald-600/40 rounded-xl text-[11px] text-emerald-300 space-y-1">
              <div class="font-bold">ⓘ 50% Capacity Spacing Rule:</div>
              <div class="text-slate-300 leading-relaxed">
                Exam capacity is strictly capped at 50% of nominal room capacity to ensure alternating desk separation.
              </div>
            </div>
          </div>

          <!-- Validation Status Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Validation status</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="flex items-center gap-3 py-2">
              <div class="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-sm">
                ✓
              </div>
              <div>
                <div class="font-bold text-white text-xs">Ready & Validated</div>
                <div class="text-[10px] text-slate-400">0 student clashes across 41 exams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__generateMidsemSolver = () => {
    store.addToast('Midsem exam schedule generated: 41 exams assigned with 50% capacity compliance.', 'success');
  };

  window.__selectMidsemRoom = (rId) => {
    store.addToast(`Inspecting seating layout for ${rId}`, 'info');
  };
}
