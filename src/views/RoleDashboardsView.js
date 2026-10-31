/**
 * CITRIX Role Dashboards
 * Dedicated views for:
 * 1. Faculty Dashboard (Today's classes, Mark unavailability, Request session, Find room)
 * 2. Department Coordinator (CSE timetable, lab requests, approval queue)
 * 3. Club Workspace (Submit venue request, My Bookings, Upcoming Spectra event)
 * Directly reproduces WhatsApp Image 2026-10-31 at 5.28.04 PM (1).jpeg.
 */

import { store } from '../state/store.js';

export function renderRoleDashboards(container) {
  const user = store.currentUser;
  let activeTab = (user.id === 'club') ? 'club' : (user.id === 'coordinator') ? 'coordinator' : 'faculty';

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-6">
      <!-- Title & Tab Navigator -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Role Workspaces</h1>
          <div class="text-xs text-slate-400 font-medium">Personalized operational dashboards · Chilika Institute of Technology</div>
        </div>

        <!-- Role Sub-tabs -->
        <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
          <button onclick="window.__setRoleTab('faculty')" id="tab-btn-faculty" 
            class="px-3.5 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'faculty' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            Faculty Dashboard
          </button>
          <button onclick="window.__setRoleTab('coordinator')" id="tab-btn-coord" 
            class="px-3.5 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'coordinator' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            Department Coordinator
          </button>
          <button onclick="window.__setRoleTab('club')" id="tab-btn-club" 
            class="px-3.5 py-1.5 rounded-lg font-bold transition-all ${activeTab === 'club' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
            Club Workspace
          </button>
        </div>
      </div>

      <!-- 1. Faculty Dashboard -->
      <div id="section-faculty" class="${activeTab === 'faculty' ? '' : 'hidden'} space-y-6">
        <!-- Hero Welcome Banner -->
        <div class="bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div class="space-y-1">
            <h2 class="text-2xl font-black text-white">Good morning, Prof. Ananya Das</h2>
            <p class="text-slate-400 text-xs">Here's your schedule and teaching commitments for today.</p>
          </div>
          <div class="flex items-center gap-4 bg-slate-800/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs">
            <span class="text-emerald-400 font-bold">📍 CIT Campus</span>
            <span class="text-slate-400">Mon, 12 Aug 2024</span>
            <span class="text-amber-400 font-semibold">☀️ 32°C</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Today's Classes List (2 cols) -->
          <div class="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div class="flex items-center gap-2">
                <span class="text-sm font-bold text-white">Today's Classes</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
              </div>
              <button onclick="window.__citrixStore.setView('timetable')" class="text-xs text-emerald-400 hover:underline font-semibold">
                View full timetable →
              </button>
            </div>

            <div class="space-y-3">
              <!-- Class 1 -->
              <div class="p-3.5 bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-between text-xs">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-slate-400">09:00 – 10:00</span>
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <div>
                    <div class="font-bold text-white">CS301 · Data Structures</div>
                    <div class="text-[11px] text-slate-400">B.Tech CSE Sem 3</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-emerald-400">LT-1</div>
                  <div class="text-[10px] text-slate-400">Academic Block A</div>
                </div>
              </div>

              <!-- Class 2 -->
              <div class="p-3.5 bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-between text-xs">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-slate-400">11:00 – 12:00</span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <div>
                    <div class="font-bold text-white">CS405 · Operating Systems</div>
                    <div class="text-[11px] text-slate-400">B.Tech CSE Sem 5</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-emerald-400">LT-2</div>
                  <div class="text-[10px] text-slate-400">Academic Block B</div>
                </div>
              </div>

              <!-- Class 3 -->
              <div class="p-3.5 bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-between text-xs">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-slate-400">14:00 – 15:00</span>
                  <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                  <div>
                    <div class="font-bold text-white">CS321 · Database Systems</div>
                    <div class="text-[11px] text-slate-400">B.Tech CSE Sem 4</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="font-bold text-emerald-400">LT-3</div>
                  <div class="text-[10px] text-slate-400">Academic Block A</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions on Right (1 col) -->
          <div class="space-y-4">
            <!-- Mark Unavailability -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-2 text-xs">
              <div class="font-bold text-white text-sm flex items-center gap-2">
                <span>📅</span> Mark Unavailability
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                Block your time for leaves, conferences, or academic committee commitments.
              </p>
              <button onclick="window.__citrixStore.setView('changes')"
                class="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all">
                Mark Unavailability
              </button>
            </div>

            <!-- Request Extra Session -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-2 text-xs">
              <div class="font-bold text-white text-sm flex items-center gap-2">
                <span>➕</span> Request Extra Session
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                Request an additional class, remedial tutorial, or doubt clearing session.
              </p>
              <button onclick="window.__citrixStore.setView('bookings')"
                class="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xl transition-all">
                Request Session
              </button>
            </div>

            <!-- Find a Room -->
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-2 text-xs">
              <div class="font-bold text-white text-sm flex items-center gap-2">
                <span>📍</span> Find a Room
              </div>
              <p class="text-slate-400 text-[11px] leading-relaxed">
                Check available classrooms, auditoriums, and labs across the 3D campus.
              </p>
              <button onclick="window.__citrixStore.setView('campus')"
                class="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xl transition-all">
                Find Room
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Department Coordinator Dashboard -->
      <div id="section-coordinator" class="${activeTab === 'coordinator' ? '' : 'hidden'} space-y-6">
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-400">Department:</span>
            <select class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-bold outline-none">
              <option>CSE · Computer Science and Engineering</option>
              <option>ECE · Electronics & Communication</option>
            </select>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <span class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Department Timetable</span>
            <span class="px-3 py-1 rounded-lg bg-slate-800 text-slate-400">Lab Requests</span>
            <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-bold border border-amber-500/40">Approval Queue (4)</span>
          </div>
        </div>

        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl">
          <div class="text-xs text-slate-400 mb-3 font-semibold">CSE Department Schedule (All Semesters)</div>
          <div class="grid grid-cols-5 gap-3 text-xs text-center">
            <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 font-medium">Monday<br><span class="text-emerald-400 font-bold">8 Sessions</span></div>
            <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 font-medium">Tuesday<br><span class="text-emerald-400 font-bold">9 Sessions</span></div>
            <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 font-medium">Wednesday<br><span class="text-emerald-400 font-bold">8 Sessions</span></div>
            <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 font-medium">Thursday<br><span class="text-emerald-400 font-bold">7 Sessions</span></div>
            <div class="p-3 bg-slate-800/60 rounded-xl border border-slate-700 font-medium">Friday<br><span class="text-emerald-400 font-bold">8 Sessions</span></div>
          </div>
        </div>
      </div>

      <!-- 3. Club Workspace -->
      <div id="section-club" class="${activeTab === 'club' ? '' : 'hidden'} space-y-6">
        <!-- Hero Banner -->
        <div class="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-black text-white">Student Clubs & Cultural Societies</h2>
            <p class="text-slate-400 text-xs">Request venues, organize events, bring the campus together for Spectra 2024.</p>
          </div>
          <span class="px-3 py-1 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 text-xs font-bold">
            Robotics Club
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Submit Venue Request -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-sm font-bold text-white">Submit Venue Request</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <div class="space-y-3 text-xs">
              <div>
                <label class="block text-slate-400 mb-1">Event Title</label>
                <input type="text" id="club-title" placeholder="e.g. Music Practice Session" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-slate-400 mb-1">Preferred Date</label>
                  <input type="text" id="club-date" value="2024-08-14" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
                </div>
                <div>
                  <label class="block text-slate-400 mb-1">Preferred Time</label>
                  <input type="text" id="club-time" value="10:00 - 13:00" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
                </div>
              </div>
              <div>
                <label class="block text-slate-400 mb-1">Venue Preference</label>
                <select id="club-venue" class="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white">
                  <option value="A-104">Academic Block A, Seminar Hall 1 (80 seats)</option>
                  <option value="AUD-Main">Central Grand Auditorium (350 seats)</option>
                  <option value="OAT-Main">Open Air Amphitheatre (500 seats)</option>
                  <option value="Plaza-Green">Central Campus Plaza (Outdoor)</option>
                </select>
              </div>

              <button onclick="window.__submitClubBooking()"
                class="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-md">
                Submit Request
              </button>
            </div>
          </div>

          <!-- My Bookings List with Cancel Actions -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-sm font-bold text-white">My Bookings</span>
              <span class="text-xs text-emerald-400 font-semibold cursor-pointer hover:underline">View all →</span>
            </div>

            <div class="space-y-2.5 text-xs">
              <div class="p-3 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-between">
                <div>
                  <div class="font-bold text-white">Band Practice</div>
                  <div class="text-[10px] text-slate-400">14 Aug 2024 · Auditorium</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Approved</span>
                  <button class="px-2 py-0.5 bg-slate-800 text-rose-400 border border-rose-500/30 rounded text-[10px]">Cancel</button>
                </div>
              </div>

              <div class="p-3 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-between">
                <div>
                  <div class="font-bold text-white">Dance Rehearsal</div>
                  <div class="text-[10px] text-slate-400">18 Aug 2024 · Activity Hall</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400">Pending</span>
                  <button class="px-2 py-0.5 bg-slate-800 text-rose-400 border border-rose-500/30 rounded text-[10px]">Cancel</button>
                </div>
              </div>

              <div class="p-3 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-between">
                <div>
                  <div class="font-bold text-white">Tech Talk</div>
                  <div class="text-[10px] text-slate-400">25 Aug 2024 · LT-3</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">Approved</span>
                  <button class="px-2 py-0.5 bg-slate-800 text-rose-400 border border-rose-500/30 rounded text-[10px]">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  window.__setRoleTab = (tab) => {
    activeTab = tab;
    renderRoleDashboards(container);
  };

  window.__submitClubBooking = () => {
    const title = document.getElementById('club-title')?.value || 'Club Session';
    const date = document.getElementById('club-date')?.value || '2024-08-14';
    const time = document.getElementById('club-time')?.value || '10:00 - 13:00';
    const venue = document.getElementById('club-venue')?.value || 'A-104';

    store.addBooking({
      title,
      category: 'club',
      date,
      timeSlot: time,
      requestedRoomId: venue,
      expectedParticipants: 50,
      accessibilityRequired: true
    });
  };
}
