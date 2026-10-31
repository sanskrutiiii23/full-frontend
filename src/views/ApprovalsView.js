/**
 * CITRIX Approvals & Audit Workspace
 * Central decision queue with strict enforcement of self-approval restrictions:
 * "Nobody may approve their own request, including Admin and Dean."
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.04 PM.jpeg (Bottom Screen).
 */

import { store } from '../state/store.js';

export function renderApprovalsView(container) {
  const bookings = store.bookings;
  const user = store.currentUser;
  let selectedBooking = bookings[0];

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- Title Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Approvals & audit</h1>
          <div class="text-xs text-slate-400 font-medium">Review requests, manage approvals and track audit log · Chilika Institute of Technology</div>
        </div>

        <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
          <span class="text-slate-400">Week:</span>
          <span class="text-white font-medium">12 Aug – 18 Aug 2024</span>
        </div>
      </div>

      <!-- Queue vs Audit Log Tabs & Filter Row -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <!-- Tabs -->
        <div class="flex items-center gap-3 text-xs font-semibold">
          <button class="pb-2 border-b-2 border-emerald-500 text-emerald-400 font-bold">
            Approval queue
          </button>
          <button class="pb-2 text-slate-400 hover:text-white">
            Audit log
          </button>
        </div>

        <!-- Filter Pills -->
        <div class="flex items-center gap-2 text-xs">
          <button class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shadow">
            Pending for me (${store.bookings.filter(b => b.status === 'pending').length})
          </button>
          <button class="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700">
            All requests (${store.bookings.length})
          </button>
        </div>
      </div>

      <!-- Self-Approval Rule Warning Callout -->
      <div class="p-3 bg-amber-950/30 border border-amber-500/40 rounded-xl flex items-center justify-between text-xs text-amber-200">
        <div class="flex items-center gap-2.5">
          <span class="text-amber-400 text-base">🛡️</span>
          <span><strong>Institutional Integrity Rule:</strong> Nobody may approve their own request, including Admin and Dean. Self-submitted requests are marked "Your request" and decision buttons are disabled.</span>
        </div>
        <span class="text-[10px] text-amber-400/80 font-mono">ENFORCED</span>
      </div>

      <!-- Main Layout: Table (2/3) + Detail Drawer (1/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Approvals Table -->
        <div class="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead>
              <tr class="text-[10px] text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                <th class="py-2.5 px-3 font-semibold">Event / Activity</th>
                <th class="py-2.5 px-3 font-semibold">Requester</th>
                <th class="py-2.5 px-3 font-semibold">Date & Time</th>
                <th class="py-2.5 px-3 font-semibold">Type</th>
                <th class="py-2.5 px-3 text-right font-semibold">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-medium">
              ${bookings.slice(0, 6).map(b => {
                const isSelfRequest = (b.requester.name === user.name);
                return `
                  <tr onclick="window.__selectApprovalItem('${b.id}')"
                    class="hover:bg-slate-800/40 transition-colors cursor-pointer ${b.id === selectedBooking.id ? 'bg-slate-800/70' : ''}">
                    <td class="py-3 px-3">
                      <div class="font-bold text-white">${b.title}</div>
                      <div class="text-[10px] text-slate-400">${b.description.slice(0, 32)}...</div>
                    </td>
                    <td class="py-3 px-3">
                      <div class="font-medium text-slate-200">${b.requester.name}</div>
                      <div class="text-[10px] ${isSelfRequest ? 'text-amber-400 font-bold' : 'text-slate-400'}">
                        ${isSelfRequest ? '⚠️ Your request (Restricted)' : b.requester.org}
                      </div>
                    </td>
                    <td class="py-3 px-3 text-slate-300">
                      <div>${b.date}</div>
                      <div class="text-[10px] text-slate-400">${b.timeSlot}</div>
                    </td>
                    <td class="py-3 px-3">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 capitalize">
                        ${b.category}
                      </span>
                    </td>
                    <td class="py-3 px-3 text-right">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold capitalize ${b.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}">
                        ${b.status}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Right Side Decision Drawer -->
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <span class="text-sm font-black text-white">${selectedBooking.title}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                ${selectedBooking.status}
              </span>
            </div>

            <!-- Subtitle -->
            <div class="text-xs text-slate-400">Request for space booking (Demo preview)</div>

            <!-- Tabs -->
            <div class="flex items-center gap-4 text-xs font-semibold border-b border-slate-800 pb-2">
              <span class="text-emerald-400 border-b-2 border-emerald-500 pb-2">Details</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Timeline</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Message</span>
              <span class="text-slate-400 cursor-pointer hover:text-white">Related sessions</span>
            </div>

            <!-- Metadata List -->
            <div class="space-y-2 text-xs text-slate-300">
              <div><span class="text-slate-500">Requester:</span> <strong class="text-white">${selectedBooking.requester.name} (${selectedBooking.requester.org})</strong></div>
              <div><span class="text-slate-500">Date & time:</span> <strong class="text-white">${selectedBooking.date}, ${selectedBooking.timeSlot}</strong></div>
              <div><span class="text-slate-500">Requested room:</span> <strong class="text-white">${selectedBooking.requestedRoomId}</strong></div>
              <div><span class="text-slate-500">Expected participants:</span> <strong class="text-white">${selectedBooking.expectedParticipants}</strong></div>
              <div><span class="text-slate-500">Access requirements:</span> <span class="text-slate-300">Projector, Power outlets, Whiteboard</span></div>
              <div><span class="text-slate-500">Reason:</span> <span class="text-slate-300">Need larger space for hands-on workshop with robotics kits.</span></div>
            </div>
          </div>

          <!-- Action Buttons with Self-Approval Guard -->
          <div class="mt-6 pt-4 border-t border-slate-800 space-y-2">
            ${selectedBooking.requester.name === user.name ? `
              <div class="p-2.5 bg-rose-950/40 border border-rose-500/60 rounded-xl text-center text-xs text-rose-300 font-semibold">
                🚫 Self-Approval Restricted (You cannot approve your own submission)
              </div>
            ` : `
              <div class="flex items-center gap-3">
                <button onclick="window.__approveBooking('${selectedBooking.id}')"
                  class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5">
                  <span>✓</span> Approve
                </button>
                <button onclick="window.__rejectBooking('${selectedBooking.id}')"
                  class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5">
                  <span>✕</span> Reject
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__selectApprovalItem = (id) => {
    store.addToast(`Viewing request details for ${id}`, 'info');
  };

  window.__approveBooking = (id) => {
    store.approveBooking(id);
    renderApprovalsView(container);
  };

  window.__rejectBooking = (id) => {
    store.rejectBooking(id);
    renderApprovalsView(container);
  };
}
