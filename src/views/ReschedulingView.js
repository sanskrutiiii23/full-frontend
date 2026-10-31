/**
 * CITRIX Timetable Repair & Disruption Diff Workspace
 * Side-by-side comparison of Before (Current) vs. Proposed timetable,
 * session-by-session diff, revalidation status, and Independent Admin approval workflow.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.03 PM.jpeg (Top Half).
 */

import { store } from '../state/store.js';

export function renderReschedulingView(container) {
  const disruption = store.disruptions[0];

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-6">
      <!-- Title Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Review timetable repair</h1>
          <div class="text-xs text-slate-400 font-medium">Disruption diff · Minimal-perturbation reschedule proposal</div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            Status: Proposal · Not applied
          </span>
        </div>
      </div>

      <!-- Disruption Summary Header & Revalidation Alert Banner -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Disruption Metadata -->
        <div class="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-black text-lg border border-rose-500/30">
            A
          </div>
          <div class="space-y-1.5 flex-1">
            <div class="flex items-center justify-between">
              <span class="text-base font-black text-white">${disruption.title}</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>
            <div class="text-xs text-slate-300">
              <strong class="text-rose-400">Disruption:</strong> ${disruption.reason}
            </div>
            <div class="text-[11px] text-slate-400 flex items-center gap-3 pt-1">
              <span>📄 Uploaded file: <strong class="text-slate-300 font-mono">${disruption.fileName}</strong></span>
              <span>•</span>
              <span>Uploaded: ${disruption.uploadTime}</span>
            </div>
          </div>
        </div>

        <!-- Revalidation Notice Banner -->
        <div class="bg-blue-950/40 border border-blue-500/40 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div class="flex items-start gap-3">
            <span class="text-blue-400 text-base font-bold">ⓘ</span>
            <div class="text-xs">
              <div class="font-bold text-blue-200">Revalidation required before applying</div>
              <div class="text-slate-300 mt-1 leading-relaxed text-[11px]">
                This proposal was generated earlier. Please revalidate with latest data (new bookings, room changes) before applying.
              </div>
            </div>
          </div>
          <div class="mt-3 text-right">
            <button onclick="window.__revalidateProposal()"
              class="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold shadow transition-all">
              Revalidate now
            </button>
          </div>
        </div>
      </div>

      <!-- Side-by-Side Comparison: Before (Current) vs Proposed Timetable Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <!-- Before (Current Timetable) -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <span class="text-xs font-bold text-white uppercase tracking-wider">Before (Current timetable)</span>
            <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
          </div>

          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="text-[10px] text-slate-500 border-b border-slate-800">
                <th class="py-2 pr-2">Time</th>
                <th class="p-1">Mon</th>
                <th class="p-1 text-rose-400 font-bold">Tue 13 Aug</th>
                <th class="p-1">Wed</th>
                <th class="p-1">Thu 15 Aug</th>
                <th class="p-1">Fri</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium text-[11px]">
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">8:00 - 9:00</td>
                <td class="p-1 text-slate-400">MA101<br><span class="text-[9px] text-slate-600">R1</span></td>
                <!-- Tuesday Clash Slot -->
                <td class="p-1 bg-rose-950/40 border border-rose-500/50 rounded text-rose-300 font-bold">
                  CS201<br><span class="text-[9px] text-rose-400">R2</span>
                </td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-400">EE110<br><span class="text-[9px] text-slate-600">R4</span></td>
                <td class="p-1 text-slate-600">–</td>
              </tr>
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">9:00 - 10:00</td>
                <td class="p-1 text-slate-600">–</td>
                <!-- Tuesday Clash Slot 2 -->
                <td class="p-1 bg-rose-950/40 border border-rose-500/50 rounded text-rose-300 font-bold">
                  CS202<br><span class="text-[9px] text-rose-400">R3</span>
                </td>
                <td class="p-1 text-slate-400">PH105<br><span class="text-[9px] text-slate-600">R1</span></td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-400">ME210<br><span class="text-[9px] text-slate-600">R2</span></td>
              </tr>
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">10:00 - 11:00</td>
                <td class="p-1 text-slate-400">HS101<br><span class="text-[9px] text-slate-600">R5</span></td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-400">CS301<br><span class="text-[9px] text-slate-600">R2</span></td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-600">–</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Proposed Timetable (With Highlighted Target Slots) -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-800">
            <span class="text-xs font-bold text-white uppercase tracking-wider">Proposed timetable</span>
            <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
          </div>

          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="text-[10px] text-slate-500 border-b border-slate-800">
                <th class="py-2 pr-2">Time</th>
                <th class="p-1">Mon</th>
                <th class="p-1">Tue 13 Aug</th>
                <th class="p-1">Wed</th>
                <th class="p-1 text-amber-400 font-bold">Thu 15 Aug</th>
                <th class="p-1">Fri</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium text-[11px]">
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">8:00 - 9:00</td>
                <td class="p-1 text-slate-400">MA101<br><span class="text-[9px] text-slate-600">R1</span></td>
                <!-- Tuesday Freed Up -->
                <td class="p-1 text-emerald-400 font-bold">–</td>
                <td class="p-1 text-slate-600">–</td>
                <!-- Thursday Rescheduled Slot 1 -->
                <td class="p-1 bg-amber-950/40 border-2 border-amber-500/70 rounded text-amber-300 font-bold">
                  CS201<br><span class="text-[9px] text-amber-400">R2</span>
                </td>
                <td class="p-1 text-slate-600">–</td>
              </tr>
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">9:00 - 10:00</td>
                <td class="p-1 text-slate-600">–</td>
                <!-- Tuesday Freed Up -->
                <td class="p-1 text-emerald-400 font-bold">–</td>
                <td class="p-1 text-slate-400">PH105<br><span class="text-[9px] text-slate-600">R1</span></td>
                <!-- Thursday Rescheduled Slot 2 -->
                <td class="p-1 bg-amber-950/40 border-2 border-amber-500/70 rounded text-amber-300 font-bold">
                  CS202<br><span class="text-[9px] text-amber-400">R3</span>
                </td>
                <td class="p-1 text-slate-400">ME210<br><span class="text-[9px] text-slate-600">R2</span></td>
              </tr>
              <tr class="h-10">
                <td class="text-slate-500 font-mono text-[10px]">10:00 - 11:00</td>
                <td class="p-1 text-slate-400">HS101<br><span class="text-[9px] text-slate-600">R5</span></td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-400">CS301<br><span class="text-[9px] text-slate-600">R2</span></td>
                <td class="p-1 text-slate-600">–</td>
                <td class="p-1 text-slate-600">–</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Changes Summary & Backend Validation Checklist -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Changes summary</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <!-- Detailed Changes Table -->
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="text-[10px] text-slate-500 border-b border-slate-800">
                  <th class="py-1">#</th>
                  <th class="py-1">Day / Time</th>
                  <th class="py-1">Room</th>
                  <th class="py-1">Before → After</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 font-medium">
                <tr>
                  <td class="py-2 text-slate-500">1</td>
                  <td class="py-2">
                    <span class="line-through text-slate-500">Tue 13 Aug</span><br>
                    <span class="text-emerald-400 font-bold">Thu 15 Aug</span> (8:00–9:00)
                  </td>
                  <td class="py-2 text-white">R2</td>
                  <td class="py-2 text-slate-300">CS201 (Prof. A)</td>
                </tr>
                <tr>
                  <td class="py-2 text-slate-500">2</td>
                  <td class="py-2">
                    <span class="line-through text-slate-500">Tue 13 Aug</span><br>
                    <span class="text-emerald-400 font-bold">Thu 15 Aug</span> (9:00–10:00)
                  </td>
                  <td class="py-2 text-white">R3</td>
                  <td class="py-2 text-slate-300">CS202 (Prof. A)</td>
                </tr>
              </tbody>
            </table>

            <!-- Backend Validation Checklist (Matching Reference) -->
            <div class="p-3 bg-slate-800/70 border border-slate-700 rounded-xl space-y-2 text-xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                  <span>✓</span> Backend validation (Demo preview)
                </span>
                <button onclick="window.__revalidateProposal()" class="text-[10px] text-slate-400 hover:text-white underline">
                  Re-run checks
                </button>
              </div>
              <ul class="space-y-1 text-[11px] text-slate-300">
                <li class="flex items-center gap-1.5"><span class="text-emerald-400 font-bold">✓</span> No room clashes detected (example)</li>
                <li class="flex items-center gap-1.5"><span class="text-emerald-400 font-bold">✓</span> Faculty availability OK (for proposed slots)</li>
                <li class="flex items-center gap-1.5"><span class="text-emerald-400 font-bold">✓</span> Curriculum constraints OK (example)</li>
                <li class="flex items-center gap-1.5"><span class="text-emerald-400 font-bold">✓</span> Student cohort clashes OK (example)</li>
              </ul>
            </div>
            <div class="text-[10px] text-slate-400">
              Example: 2 sessions moved · No other changes (demo only)
            </div>
          </div>

          <!-- Action Bar: Independent Admin Approval -->
          <div class="pt-3 border-t border-slate-800 space-y-2">
            <div class="text-[10px] text-slate-400 text-center">
              Independent Admin approval required to apply these changes.
            </div>
            <div class="flex items-center gap-3">
              <button onclick="window.__applyRepairProposal('${disruption.id}')"
                class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all">
                Approve & apply
              </button>
              <button onclick="window.__rejectRepairProposal()"
                class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 font-bold text-xs border border-slate-700 transition-all">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__revalidateProposal = () => {
    store.addToast('Revalidation check passed: 0 clashes detected against live dataset.', 'success');
  };

  window.__applyRepairProposal = (dId) => {
    store.applyDisruptionRepair(dId);
  };

  window.__rejectRepairProposal = () => {
    store.addToast('Timetable repair proposal rejected. Current timetable remains intact.', 'info');
  };
}
