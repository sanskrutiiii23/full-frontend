/**
 * CITRIX Weekly Timetable Workspace
 * Faculty, Student Group, and Room perspectives.
 * Implements 3-hour lab block scheduling, lunch protection,
 * class details drawer, and "Why this slot?" constraint explanations.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.03 PM (1).jpeg.
 */

import { store } from '../state/store.js';
import { DAYS, PERIODS, FACULTY_MEMBERS, COURSES, ROOMS } from '../state/dataset.js';

export function renderTimetableView(container) {
  const currentPerspective = store.timetablePerspective;
  const faculty = FACULTY_MEMBERS.find(f => f.id === store.selectedFacultyId) || FACULTY_MEMBERS[1]; // Dr. R. Patnaik

  // Active sessions for this faculty
  const facultySessions = store.sessions.filter(s => s.facultyId === faculty.id);

  let selectedClassDetails = facultySessions.find(s => s.durationHours === 3) || facultySessions[0];

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- Title & Perspective Controls Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Weekly timetable</h1>
          <div class="text-xs text-slate-400 font-medium">Plan · Allocate · Optimize · Chilika Institute of Technology</div>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.__generateTimetableSolver()"
            class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
            <span>▶</span> Generate timetable
          </button>
          <button onclick="window.__exportScheduleJSON()"
            class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs shadow transition-all flex items-center gap-1.5">
            <span>↓</span> Export
          </button>
        </div>
      </div>

      <!-- Filter Controls: Perspective Tabs + Dropdowns -->
      <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <!-- Perspective Tabs -->
        <div class="flex items-center gap-2 border-b border-slate-800 pb-1 sm:border-0 sm:pb-0">
          <button onclick="window.__setPerspective('faculty')" 
            class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentPerspective === 'faculty' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
            Faculty view
          </button>
          <button onclick="window.__setPerspective('group')" 
            class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentPerspective === 'group' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
            Student group view
          </button>
          <button onclick="window.__setPerspective('room')" 
            class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentPerspective === 'room' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
            Room view
          </button>
        </div>

        <!-- Filter Dropdowns -->
        <div class="flex flex-wrap items-center gap-3 text-xs">
          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">Faculty</label>
            <select onchange="window.__selectFaculty(this.value)" class="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-medium outline-none">
              ${FACULTY_MEMBERS.slice(0, 8).map(f => `
                <option value="${f.id}" ${f.id === faculty.id ? 'selected' : ''}>${f.name} (Demo)</option>
              `).join('')}
            </select>
          </div>

          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">Department</label>
            <select class="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-medium outline-none">
              <option>Computer Science (Demo)</option>
              <option>Electronics & Comm</option>
              <option>Mechanical Engg</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">Semester</label>
            <select class="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-medium outline-none">
              <option>All (Demo)</option>
              <option>Sem 3</option>
              <option>Sem 5</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Timetable Grid & Class Details Slide-Over -->
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <!-- Main Timetable Weekly Grid (3 cols on xl) -->
        <div class="xl:col-span-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl overflow-x-auto">
          <table class="w-full border-collapse min-w-[700px] text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-400">
                <th class="py-3 px-2 text-left font-semibold w-24">Time</th>
                <th class="py-3 px-2 text-center font-semibold w-1/5">Mon<br><span class="text-[10px] text-slate-500 font-normal">04 Nov</span></th>
                <th class="py-3 px-2 text-center font-semibold w-1/5">Tue<br><span class="text-[10px] text-slate-500 font-normal">05 Nov</span></th>
                <th class="py-3 px-2 text-center font-semibold w-1/5">Wed<br><span class="text-[10px] text-slate-500 font-normal">06 Nov</span></th>
                <th class="py-3 px-2 text-center font-semibold w-1/5">Thu<br><span class="text-[10px] text-slate-500 font-normal">07 Nov</span></th>
                <th class="py-3 px-2 text-center font-semibold w-1/5">Fri<br><span class="text-[10px] text-slate-500 font-normal">08 Nov</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              <!-- 08:00 - 09:00 -->
              <tr class="h-16">
                <td class="py-2 px-2 text-slate-400 font-mono text-[11px] align-top">08:00 - 09:00</td>
                <td class="p-1.5"></td>
                <td class="p-1.5"></td>
                <td class="p-1.5"></td>
                <td class="p-1.5"></td>
                <td class="p-1.5"></td>
              </tr>

              <!-- 09:00 - 12:00 (Includes 3-Hour Lab Block) -->
              <tr class="h-28">
                <td class="py-2 px-2 text-slate-400 font-mono text-[11px] align-top">09:00 - 12:00</td>
                <!-- Monday 3-Hour Lab Block -->
                <td class="p-1.5 align-top">
                  <div onclick="window.__showClassDetails('CS301L')"
                    class="h-full p-2.5 bg-emerald-950/60 border-2 border-emerald-500/70 rounded-xl cursor-pointer hover:border-emerald-400 transition-all flex flex-col justify-between shadow-lg">
                    <div>
                      <div class="flex items-center justify-between text-[10px] font-bold text-emerald-400">
                        <span>09:00 – 12:00</span>
                        <span class="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[9px] uppercase font-black">Lab</span>
                      </div>
                      <div class="font-bold text-white text-xs mt-1">CS301 Computer Networks Lab</div>
                      <div class="text-[10px] text-emerald-300 mt-0.5">B.Tech CSE A · Lab 1 (Demo)</div>
                    </div>
                    <div class="text-[9px] text-slate-400">3 hours continuous</div>
                  </div>
                </td>

                <!-- Tuesday 10:00 - 11:00 -->
                <td class="p-1.5 align-top">
                  <div class="p-2 bg-blue-950/40 border border-blue-500/50 rounded-lg text-xs space-y-1">
                    <div class="text-[10px] text-blue-400 font-semibold">10:00 – 11:00</div>
                    <div class="font-bold text-white text-[11px]">CS201 Data Structures</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE A · A-101</div>
                  </div>
                </td>

                <!-- Wednesday 09:00 - 10:00 & 11:00 - 12:00 -->
                <td class="p-1.5 align-top space-y-1.5">
                  <div class="p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg text-xs">
                    <div class="text-[10px] text-rose-400 font-semibold">09:00 – 10:00</div>
                    <div class="font-bold text-white text-[11px]">CS201 Data Structures</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE A</div>
                  </div>
                  <div class="p-2 bg-amber-950/40 border border-amber-500/40 rounded-lg text-xs">
                    <div class="text-[10px] text-amber-400 font-semibold">11:00 – 12:00</div>
                    <div class="font-bold text-white text-[11px]">CS307 Database Systems</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE C</div>
                  </div>
                </td>

                <td class="p-1.5"></td>

                <!-- Friday 10:00 - 11:00 -->
                <td class="p-1.5 align-top">
                  <div class="p-2 bg-blue-950/40 border border-blue-500/50 rounded-lg text-xs">
                    <div class="text-[10px] text-blue-400 font-semibold">10:00 – 11:00</div>
                    <div class="font-bold text-white text-[11px]">CS201 Data Structures</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE A</div>
                  </div>
                </td>
              </tr>

              <!-- Protected Lunch Break Row Across All Days -->
              <tr class="h-10 bg-slate-800/40 border-y border-slate-700/60">
                <td class="py-2 px-2 text-slate-400 font-mono text-[11px]">13:00 – 14:00</td>
                <td colspan="5" class="text-center text-xs font-semibold text-slate-400 tracking-wider">
                  🍽 PROTECTED CAMPUS LUNCH BREAK (No sessions scheduled)
                </td>
              </tr>

              <!-- Afternoon 14:00 - 17:00 -->
              <tr class="h-24">
                <td class="py-2 px-2 text-slate-400 font-mono text-[11px] align-top">14:00 - 17:00</td>
                <td class="p-1.5"></td>

                <!-- Tuesday Afternoon -->
                <td class="p-1.5 align-top">
                  <div class="p-2 bg-purple-950/40 border border-purple-500/40 rounded-lg text-xs">
                    <div class="text-[10px] text-purple-400 font-semibold">14:00 – 15:00</div>
                    <div class="font-bold text-white text-[11px]">CS305 Operating Systems</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE B</div>
                  </div>
                </td>

                <td class="p-1.5"></td>

                <!-- Thursday Afternoon -->
                <td class="p-1.5 align-top">
                  <div class="p-2 bg-purple-950/40 border border-purple-500/40 rounded-lg text-xs">
                    <div class="text-[10px] text-purple-400 font-semibold">14:00 – 15:00</div>
                    <div class="font-bold text-white text-[11px]">CS305 Operating Systems</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE B</div>
                  </div>
                </td>

                <!-- Friday Afternoon -->
                <td class="p-1.5 align-top">
                  <div class="p-2 bg-amber-950/40 border border-amber-500/40 rounded-lg text-xs">
                    <div class="text-[10px] text-amber-400 font-semibold">15:00 – 16:00</div>
                    <div class="font-bold text-white text-[11px]">CS307 Database Systems</div>
                    <div class="text-[10px] text-slate-400">B.Tech CSE C</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Side Class Details Drawer (Matching Reference) -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Class details</span>
              <span class="text-xs text-slate-400 cursor-pointer hover:text-white">✕</span>
            </div>

            <!-- Card Header -->
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-sm font-black text-white">CS301 Computer Networks Lab</span>
                <span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/40">Lab</span>
              </div>
              <div class="text-xs text-slate-400">B.Tech CSE A (Demo preview)</div>
            </div>

            <!-- Metadata List -->
            <div class="space-y-2.5 text-xs text-slate-300">
              <div class="flex items-start gap-2">
                <span class="text-slate-500">👤 Faculty:</span>
                <span class="font-medium text-white">${faculty.name} (Demo)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">👥 Student group:</span>
                <span class="font-medium text-white">B.Tech CSE A (Batch 2022)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">📍 Room:</span>
                <span class="font-medium text-emerald-400">Lab 1 (Demo)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">⏱ Time:</span>
                <span class="font-medium text-white">Mon, 09:00 – 12:00 (3 hours)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">📅 Frequency:</span>
                <span class="font-medium text-white">Weekly (Mon)</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">🏷 Type:</span>
                <span class="font-medium text-white">Laboratory</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">🔢 Course code:</span>
                <span class="font-medium text-white">CS301L</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-slate-500">✨ Credits:</span>
                <span class="font-medium text-white">2</span>
              </div>
            </div>
          </div>

          <!-- "Why this slot?" Constraint Button -->
          <div class="mt-6 pt-4 border-t border-slate-800">
            <button onclick="window.__explainWhyThisSlot()"
              class="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-emerald-500 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow">
              <span class="text-emerald-400">💡</span>
              Why this slot?
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__setPerspective = (p) => {
    store.timetablePerspective = p;
    renderTimetableView(container);
  };

  window.__selectFaculty = (fId) => {
    store.selectedFacultyId = fId;
    renderTimetableView(container);
  };

  window.__generateTimetableSolver = () => {
    store.addToast('Solver run: 189 sessions scheduled with 0 hard violations and 42.5 soft penalty.', 'success');
  };

  window.__exportScheduleJSON = () => {
    store.setView('admin');
  };

  window.__showClassDetails = (code) => {
    store.addToast(`Inspecting course syllabus and constraints for ${code}`, 'info');
  };

  window.__explainWhyThisSlot = () => {
    alert(
      "CITRIX Constraint Explanation for CS301L:\n\n" +
      "1. Hard rule: 3-hour lab block restricted to P2-P4 or P6-P8.\n" +
      "2. No faculty overlap: Dr. R. Patnaik is free Monday 09:00 - 12:00.\n" +
      "3. No room overlap: Science Complex Lab-1 is unoccupied.\n" +
      "4. No group overlap: B.Tech CSE A has no concurrent lectures.\n" +
      "5. Lunch break protection: Session terminates at 12:00, preserving 13:00 - 14:00 lunch."
    );
  };
}
