/**
 * CITRIX AI Assistant Workspace
 * Conversational schedule & venue assistant supporting English and Hinglish.
 * Implements interactive radio slot selection, proposed change cards,
 * clear confirmation safeguards, and manual request fallbacks.
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.03 PM.jpeg (Bottom Half).
 */

import { store } from '../state/store.js';

export function renderAssistantView(container) {
  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- Title Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Faculty assistant</h1>
          <div class="text-xs text-slate-400 font-medium">Conversational timetable & space helper · English & Hinglish supported</div>
        </div>

        <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
          <span class="text-slate-400">Week:</span>
          <span class="text-white font-medium">Mon, 12 Aug – Sun, 18 Aug 2024</span>
        </div>
      </div>

      <!-- Main Layout: Chat Stream (2/3) + My Timetable & Quick Actions (1/3) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Chat Area (2 cols) -->
        <div class="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col justify-between min-h-[580px]">
          <!-- Messages Stream -->
          <div class="space-y-4 overflow-y-auto max-h-[460px] pr-2">
            <!-- User Message 1 -->
            <div class="flex items-start gap-3 justify-end">
              <div class="max-w-lg bg-emerald-700/80 text-white rounded-2xl rounded-tr-none p-3.5 text-xs shadow-md">
                Move my Wednesday morning class to Thursday
              </div>
              <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                PK
              </div>
            </div>

            <!-- Assistant Clarification Message -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                C
              </div>
              <div class="max-w-xl space-y-3">
                <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-200 shadow-md">
                  I found the following classes on Wednesday morning. Which one would you like to move?
                </div>

                <!-- Interactive Class Selection Options (Radio Buttons) -->
                <div class="space-y-2 text-xs">
                  <label class="p-3 bg-slate-800/60 border border-emerald-500/70 rounded-xl flex items-start gap-3 cursor-pointer hover:bg-slate-800 transition-all shadow">
                    <input type="radio" name="opt_move_class" checked class="mt-0.5 text-emerald-600 focus:ring-0">
                    <div>
                      <div class="font-bold text-white">CS301 · Data Structures (B.Tech CSE Sem 3)</div>
                      <div class="text-[11px] text-slate-400 mt-0.5">Wed, 14 Aug · 8:00–9:00 · Room R2 · 62 students</div>
                    </div>
                  </label>

                  <label class="p-3 bg-slate-800/40 border border-slate-700 rounded-xl flex items-start gap-3 cursor-pointer hover:bg-slate-800 transition-all">
                    <input type="radio" name="opt_move_class" class="mt-0.5 text-emerald-600 focus:ring-0">
                    <div>
                      <div class="font-semibold text-slate-200">MA102 · Engineering Mathematics (B.Tech Sem 1)</div>
                      <div class="text-[11px] text-slate-400 mt-0.5">Wed, 14 Aug · 10:00–11:00 · Room R3 · 58 students</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Assistant Proposal Message & Card -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                C
              </div>
              <div class="max-w-xl space-y-3">
                <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-200 shadow-md">
                  Here is a validated proposal to move CS301 to Thursday morning with 0 hard constraint violations.
                </div>

                <!-- Proposed Change Card (Matching Reference) -->
                <div class="bg-slate-800/90 border border-emerald-500/50 rounded-2xl p-4 shadow-xl space-y-3">
                  <div class="flex items-center justify-between pb-2 border-b border-slate-700/60">
                    <span class="text-xs font-bold text-white uppercase tracking-wider">Proposed change</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
                  </div>

                  <div class="space-y-1.5 text-xs text-slate-300">
                    <div><span class="text-slate-400">Course:</span> <strong class="text-white">CS301 · Data Structures (B.Tech CSE Sem 3)</strong></div>
                    <div><span class="text-slate-400">From:</span> <span class="line-through text-rose-400">Wed, 14 Aug · 8:00–9:00 · Room R2</span></div>
                    <div><span class="text-slate-400">To:</span> <strong class="text-emerald-400">Thu, 15 Aug · 8:00–9:00 · Room R2</strong></div>
                    <div><span class="text-slate-400">Reason:</span> <span class="text-slate-300">Requested via AI assistant (demo)</span></div>
                  </div>

                  <div class="flex items-center gap-3 pt-2">
                    <button onclick="window.__citrixStore.setView('changes')"
                      class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md transition-all">
                      Review proposal
                    </button>
                    <button onclick="window.__showAlternativeAssistantSlots()"
                      class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl font-semibold text-xs transition-all">
                      Show alternative slots
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Chat Input Area -->
          <div class="mt-4 pt-3 border-t border-slate-800 space-y-2">
            <div class="relative flex items-center">
              <input type="text" id="assistant-user-input"
                class="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-4 pr-24 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                placeholder="Ask about your timetable... (English or Hinglish, e.g. Kal 3 se 5 room chahiye)">
              <div class="absolute right-2 flex items-center gap-1.5">
                <button class="p-1.5 text-slate-400 hover:text-white" title="Attach context">📎</button>
                <button onclick="window.__sendAssistantMessage()" 
                  class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-all">
                  Send
                </button>
              </div>
            </div>
            <div class="text-[10px] text-slate-400 text-center">
              ⓘ No changes are applied until you review and confirm. Proposals pass deterministic backend validation.
            </div>
          </div>
        </div>

        <!-- Right Side: Mini Timetable & Manual Request Fallback -->
        <div class="space-y-5">
          <!-- Mini Timetable Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <div class="flex items-center gap-3 text-xs font-semibold">
                <span class="text-emerald-400 font-bold border-b-2 border-emerald-500 pb-1">My timetable</span>
                <span class="text-slate-400 cursor-pointer hover:text-white">Quick actions</span>
              </div>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="text-xs font-bold text-white">This week</div>
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="text-[10px] text-slate-500 border-b border-slate-800">
                  <th class="py-1">Time</th>
                  <th class="p-1 text-center">Mon</th>
                  <th class="p-1 text-center">Tue</th>
                  <th class="p-1 text-center">Wed</th>
                  <th class="p-1 text-center">Thu</th>
                  <th class="p-1 text-center">Fri</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 text-[10px]">
                <tr>
                  <td class="py-1 text-slate-500">8-9</td>
                  <td class="p-1 text-center text-slate-300">MA101</td>
                  <td class="p-1 text-center text-slate-600">–</td>
                  <td class="p-1 text-center text-amber-400 font-bold">CS301</td>
                  <td class="p-1 text-center text-slate-600">–</td>
                  <td class="p-1 text-center text-slate-300">EE110</td>
                </tr>
                <tr>
                  <td class="py-1 text-slate-500">9-10</td>
                  <td class="p-1 text-center text-slate-600">–</td>
                  <td class="p-1 text-center text-slate-300">HS101</td>
                  <td class="p-1 text-center text-slate-600">–</td>
                  <td class="p-1 text-center text-slate-300">MA102</td>
                  <td class="p-1 text-center text-slate-600">–</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Fallback Cards: Manual Request & AI Unavailable -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
              Need something else?
            </div>

            <!-- Manual Request Option -->
            <div class="p-3.5 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 font-bold">✏️</span>
                <span class="font-bold text-white">Manual request</span>
              </div>
              <div class="text-[11px] text-slate-400">
                Can't find the right option? Raise a manual timetable or venue request.
              </div>
              <button onclick="window.__citrixStore.setView('bookings')"
                class="w-full py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-white font-semibold text-xs transition-all">
                Create request
              </button>
            </div>

            <!-- AI Unavailable Option -->
            <div class="p-3.5 bg-slate-800/60 border border-slate-700 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="text-amber-400 font-bold">⚡</span>
                <span class="font-bold text-white">AI unavailable?</span>
              </div>
              <div class="text-[11px] text-slate-400">
                If the assistant is unavailable or times out, you can still raise a manual request directly.
              </div>
              <button onclick="window.__citrixStore.setView('bookings')"
                class="w-full py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-white font-semibold text-xs transition-all">
                Create request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__sendAssistantMessage = () => {
    const input = document.getElementById('assistant-user-input');
    if (!input || !input.value.trim()) return;

    store.addToast(`Assistant parsed query: "${input.value}"`, 'info');
    input.value = '';
  };

  window.__showAlternativeAssistantSlots = () => {
    alert("Alternative Slots Available for CS301 (0 Conflicts):\n1. Thursday P1 (08:00 - 09:00) in Room R2\n2. Friday P7 (15:00 - 16:00) in Room A-104\n3. Monday P8 (16:00 - 17:00) in Room B-201");
  };
}
