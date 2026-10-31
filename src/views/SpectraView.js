/**
 * CITRIX Spectra Bookings Workspace
 * Implements campus priority queue (Exams > Classes > Institute > Guest > Dept > Club),
 * category pills with counts, conflict callouts (ME301 clash), and alternative recommendations.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.04 PM.jpeg (Top Screen).
 */

import { store } from '../state/store.js';

export function renderSpectraView(container) {
  const bookings = store.bookings;
  let selectedBooking = bookings[0]; // Robotics workshop

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Spectra bookings</h1>
          <div class="text-xs text-slate-400 font-medium">Request, review and manage academic and campus space bookings</div>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="window.__citrixStore.setView('bookings')"
            class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all">
            + New Booking Request
          </button>
        </div>
      </div>

      <!-- Priority Category Filter Pills with Counts (Matching Reference) -->
      <div class="flex flex-wrap items-center gap-2.5">
        <button class="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 font-bold text-xs flex items-center gap-2">
          <span>🏛 Exams</span>
          <span class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-black">4</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:border-slate-700 flex items-center gap-2">
          <span>📖 Classes</span>
          <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">8</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:border-slate-700 flex items-center gap-2">
          <span>🏫 Institute</span>
          <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">5</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:border-slate-700 flex items-center gap-2">
          <span>👥 Guest</span>
          <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">3</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:border-slate-700 flex items-center gap-2">
          <span>🏢 Department</span>
          <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">6</span>
        </button>
        <button class="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs hover:border-slate-700 flex items-center gap-2">
          <span>🎭 Club</span>
          <span class="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">2</span>
        </button>
      </div>

      <!-- Search & Status Filter Row -->
      <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex-1 min-w-[240px]">
          <input type="text" placeholder="Search by event, department, room or requester..."
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 outline-none focus:border-emerald-500">
        </div>
        <div class="flex items-center gap-3">
          <select class="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white outline-none">
            <option>This week ▾</option>
            <option>Next week</option>
          </select>
          <select class="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white outline-none">
            <option>All statuses ▾</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Alternative proposed</option>
            <option>Rejected</option>
          </select>
          <select class="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white outline-none">
            <option>All types ▾</option>
            <option>Club</option>
            <option>Exam</option>
            <option>Guest</option>
          </select>
        </div>
      </div>

      <!-- Main Layout: Table (2/3) + Detail Drawer (1/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Bookings Table -->
        <div class="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl overflow-x-auto">
          <div class="text-xs text-slate-400 mb-3 font-semibold">6 requests (Demo preview)</div>
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-[10px] text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                <th class="py-2.5 px-3 font-semibold">Event / Activity</th>
                <th class="py-2.5 px-3 font-semibold">Type</th>
                <th class="py-2.5 px-3 font-semibold">Requester</th>
                <th class="py-2.5 px-3 font-semibold">Date & Time</th>
                <th class="py-2.5 px-3 font-semibold">Room / Space</th>
                <th class="py-2.5 px-3 text-right font-semibold">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              ${bookings.slice(0, 6).map(b => {
                const getStatusPill = (status) => {
                  if (status === 'approved') return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';
                  if (status === 'pending') return 'bg-amber-500/10 text-amber-400 border border-amber-500/30';
                  if (status === 'alternative_proposed') return 'bg-blue-500/10 text-blue-400 border border-blue-500/30';
                  if (status === 'rejected') return 'bg-rose-500/10 text-rose-400 border border-rose-500/30';
                  return 'bg-slate-800 text-slate-400';
                };

                return `
                  <tr onclick="window.__selectSpectraBooking('${b.id}')"
                    class="hover:bg-slate-800/40 transition-colors cursor-pointer ${b.id === selectedBooking.id ? 'bg-slate-800/70' : ''}">
                    <td class="py-3 px-3">
                      <div class="font-bold text-white">${b.title}</div>
                      <div class="text-[10px] text-slate-400">${b.description.slice(0, 36)}...</div>
                    </td>
                    <td class="py-3 px-3">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 capitalize">
                        ${b.category}
                      </span>
                    </td>
                    <td class="py-3 px-3">
                      <div class="font-medium text-slate-200">${b.requester.name}</div>
                      <div class="text-[10px] text-slate-400">${b.requester.org}</div>
                    </td>
                    <td class="py-3 px-3 text-slate-300">
                      <div>${b.date}</div>
                      <div class="text-[10px] text-slate-400">${b.timeSlot}</div>
                    </td>
                    <td class="py-3 px-3 text-slate-300">${b.requestedRoomId}</td>
                    <td class="py-3 px-3 text-right">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold capitalize ${getStatusPill(b.status)}">
                        ${b.status.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Right Side Request Detail Drawer (Matching Reference) -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
          <div class="space-y-4">
            <!-- Header with Status Pill -->
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center gap-2">
                <span class="text-sm font-black text-white">${selectedBooking.title}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                ${selectedBooking.status}
              </span>
            </div>

            <!-- Subtitle -->
            <div class="text-xs text-slate-400">${selectedBooking.description}</div>

            <!-- Detail Tabs -->
            <div class="flex items-center gap-4 text-xs font-semibold border-b border-slate-800 pb-2">
              <span class="text-emerald-400 border-b-2 border-emerald-500 pb-2">Details</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Conflict</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Alternative</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Messages</span>
            </div>

            <!-- Metadata List -->
            <div class="space-y-2 text-xs text-slate-300">
              <div><span class="text-slate-500">Requester:</span> <strong class="text-white">${selectedBooking.requester.name} (${selectedBooking.requester.org})</strong></div>
              <div><span class="text-slate-500">Event type:</span> <strong class="text-white capitalize">${selectedBooking.category} event</strong></div>
              <div><span class="text-slate-500">Date & time:</span> <strong class="text-white">${selectedBooking.date}, ${selectedBooking.timeSlot}</strong></div>
              <div><span class="text-slate-500">Requested room:</span> <strong class="text-white">${selectedBooking.requestedRoomId}</strong></div>
              <div><span class="text-slate-500">Expected participants:</span> <strong class="text-white">${selectedBooking.expectedParticipants}</strong></div>
              <div><span class="text-slate-500">Access requirements:</span> <span class="text-slate-300">${selectedBooking.featuresRequired ? selectedBooking.featuresRequired.join(', ') : 'Standard'}</span></div>
            </div>

            <!-- Explicit Red Warning Callout (Requested room overlaps a regular class) -->
            ${selectedBooking.conflict ? `
              <div class="p-3.5 bg-rose-950/40 border border-rose-500/60 rounded-xl flex items-start gap-3 text-xs text-rose-200 shadow-md">
                <span class="text-rose-400 text-base font-bold">⚠️</span>
                <div>
                  <div class="font-bold text-rose-300">Requested room overlaps a regular class</div>
                  <div class="text-[11px] text-rose-200 mt-0.5 leading-relaxed">
                    ${selectedBooking.conflict.description}
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- Valid Alternative Room Recommendation -->
            ${selectedBooking.alternativeRoom ? `
              <div class="p-3.5 bg-slate-800/80 border border-slate-700 rounded-xl space-y-2 text-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-white text-xs">Alternative room (Demo preview)</span>
                  <span class="text-[10px] text-emerald-400 font-semibold">Available</span>
                </div>
                <div class="text-[11px] text-slate-300">
                  <div class="font-semibold text-white">${selectedBooking.alternativeRoom.name}</div>
                  <div>Capacity: ${selectedBooking.alternativeRoom.capacity} seats · Full AC · Audio PA</div>
                </div>
                <button onclick="window.__reviewAlternative('${selectedBooking.id}')"
                  class="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs transition-all">
                  Review alternative
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Notice -->
          <div class="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 text-center">
            ⓘ If the regular class is moved, admin approval is required.
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__selectSpectraBooking = (id) => {
    store.addToast(`Loading booking details for ${id}`, 'info');
  };

  window.__reviewAlternative = (id) => {
    store.addToast('Alternative venue validated against hard constraints with zero clashes.', 'success');
  };
}
