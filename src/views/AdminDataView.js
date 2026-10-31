/**
 * CITRIX Admin — Data & Exports Workspace
 * Controls dataset loading, schema validation, timetable generation,
 * official JSON schedule export downloads (schedule.json, schedule_after.json),
 * and demo dataset reset.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.04 PM (1).jpeg (Bottom Right).
 */

import { store } from '../state/store.js';

export function renderAdminDataView(container) {
  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-6">
      <!-- Title Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Admin — Data & Exports</h1>
          <div class="text-xs text-slate-400 font-medium">Dataset management, disruption loading, official schedule validation & exports</div>
        </div>

        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            Schema Validator: Active
          </span>
        </div>
      </div>

      <!-- Main Layout: Uploads & Generation (2/3) + Dataset Summary & Downloads (1/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: Uploads, Validation, Schedule Generation -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Data Upload Section -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-sm font-bold text-white">Data Upload</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Upload cit_public.json -->
              <div class="p-4 bg-slate-800/50 border-2 border-dashed border-slate-700 hover:border-emerald-500/70 rounded-2xl text-center space-y-2 cursor-pointer transition-all"
                onclick="window.__simulateUpload('cit_public.json')">
                <div class="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-lg">
                  📄
                </div>
                <div class="font-bold text-white text-xs">Upload cit_public.json</div>
                <div class="text-[10px] text-slate-400 leading-relaxed">
                  Institute data (departments, rooms, faculty, courses, constraints, etc.)
                </div>
                <div class="pt-2 text-[10px] text-emerald-400 font-semibold underline">
                  Drag and drop cit_public.json or click to browse
                </div>
                <div class="text-[9px] text-slate-500 font-mono">Status: Loaded (Default Baseline)</div>
              </div>

              <!-- Upload sample_disruption.json -->
              <div class="p-4 bg-slate-800/50 border-2 border-dashed border-slate-700 hover:border-blue-500/70 rounded-2xl text-center space-y-2 cursor-pointer transition-all"
                onclick="window.__simulateUpload('sample_disruption.json')">
                <div class="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto text-lg">
                  ⚡
                </div>
                <div class="font-bold text-white text-xs">Upload sample_disruption.json</div>
                <div class="text-[10px] text-slate-400 leading-relaxed">
                  Disruptions (room closures, faculty unavailability, special events, etc.)
                </div>
                <div class="pt-2 text-[10px] text-blue-400 font-semibold underline">
                  Drag and drop sample_disruption.json or click to browse
                </div>
                <div class="text-[9px] text-slate-500 font-mono">Status: Active Disruption (Academic A Tue)</div>
              </div>
            </div>
          </div>

          <!-- Validation Issues Banner -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-2">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-sm font-bold text-white">Validation Issues</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="flex items-start gap-3 p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
              <span class="text-emerald-400 text-base">✓</span>
              <div>
                <div class="font-bold text-white">Baseline Dataset Clean & Validated</div>
                <div class="text-[11px] text-slate-400 mt-0.5">
                  All 189 teaching sessions satisfy hard faculty limits (4h max/day), group conflict boundaries, and room capacities.
                </div>
              </div>
            </div>
          </div>

          <!-- Generate Schedules Controls -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-sm font-bold text-white">Generate Schedules</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onclick="window.__citrixStore.setView('timetable')"
                class="p-4 bg-slate-800/70 border border-slate-700 hover:border-emerald-500 rounded-2xl text-left space-y-1.5 transition-all shadow-md group">
                <div class="flex items-center gap-2">
                  <span class="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all font-bold">📅</span>
                  <span class="font-bold text-white text-xs">Generate Timetable</span>
                </div>
                <p class="text-[11px] text-slate-400">
                  Create the academic timetable using the uploaded dataset and solver constraints.
                </p>
              </button>

              <button onclick="window.__citrixStore.setView('midsem')"
                class="p-4 bg-slate-800/70 border border-slate-700 hover:border-teal-500 rounded-2xl text-left space-y-1.5 transition-all shadow-md group">
                <div class="flex items-center gap-2">
                  <span class="p-2 bg-teal-500/20 text-teal-400 rounded-lg group-hover:bg-teal-500 group-hover:text-slate-950 transition-all font-bold">📝</span>
                  <span class="font-bold text-white text-xs">Generate Midsem/Endsem</span>
                </div>
                <p class="text-[11px] text-slate-400">
                  Create the examination schedule using the uploaded dataset and 50% capacity rules.
                </p>
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Dataset Summary, Official Downloads, Reset Data -->
        <div class="space-y-6">
          <!-- Dataset Summary (Matching Reference) -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Dataset Summary</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="space-y-2 text-xs divide-y divide-slate-800/60 font-medium">
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">🏢 Departments</span>
                <span class="font-bold text-white">12</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">📚 Courses</span>
                <span class="font-bold text-white">428</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">👥 Faculty</span>
                <span class="font-bold text-white">186</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">🏫 Rooms</span>
                <span class="font-bold text-white">96 (27 Schedulable)</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">🎓 Students (sections)</span>
                <span class="font-bold text-white">124</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">⚙️ Constraints</span>
                <span class="font-bold text-white">312</span>
              </div>
              <div class="flex items-center justify-between py-1.5">
                <span class="text-slate-400 flex items-center gap-2">⚡ Disruptions</span>
                <span class="font-bold text-amber-400">24</span>
              </div>
            </div>
          </div>

          <!-- Download Results (Matching Reference) -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Download Results</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="space-y-2">
              <button onclick="window.__downloadFile('exports/schedule.json')"
                class="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-left text-xs text-white font-semibold flex items-center justify-between transition-all">
                <span class="flex items-center gap-2">
                  <span>📥</span> Download schedule.json
                </span>
                <span class="text-[10px] text-emerald-400 font-mono">189 sess</span>
              </button>

              <button onclick="window.__downloadFile('exports/schedule_after.json')"
                class="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-left text-xs text-white font-semibold flex items-center justify-between transition-all">
                <span class="flex items-center gap-2">
                  <span>📥</span> Download schedule_after.json
                </span>
                <span class="text-[10px] text-blue-400 font-mono">Repaired</span>
              </button>
            </div>
          </div>

          <!-- Reset Demo Data (Matching Reference) -->
          <div class="bg-slate-900/90 border border-rose-900/50 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
              Reset Demo Data
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              This will remove all uploaded changes and restore the default starter baseline dataset.
            </p>
            <button onclick="window.__resetAllDemoData()"
              class="w-full py-2.5 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/40 text-rose-300 hover:text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2">
              <span>⚠️</span> Reset to Default Demo Data
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__simulateUpload = (fileName) => {
    store.addToast(`Successfully loaded and verified schema for ${fileName}`, 'success');
  };

  window.__downloadFile = (filePath) => {
    store.addToast(`Downloading official export artifact: ${filePath}`, 'info');
  };

  window.__resetAllDemoData = () => {
    if (confirm("Are you sure you want to restore the default demo dataset? All temporary bookings and modifications will be reset.")) {
      store.resetDemoData();
    }
  };
}
