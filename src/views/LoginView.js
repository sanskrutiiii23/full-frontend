/**
 * CITRIX Dual-Pane Login & 3D Campus Overview
 * Top half: Live 3D isometric overview of the campus (matching user reference image).
 * Bottom half: One-click Professor & Staff profile picker.
 * Immediately redirects into the personalized Campus Explorer with highlighted teaching buildings.
 */

import { store, ROLES } from '../state/store.js';
import { CampusScene } from '../campus3d/CampusScene.js';
import { BUILDINGS } from '../state/dataset.js';

export function renderLoginView(container) {
  const facultyProfiles = [
    {
      roleKey: 'FACULTY',
      id: 'fac_03',
      name: 'Prof. Ananya Das',
      dept: 'Computer Science and Engineering',
      title: 'Professor & Head',
      classes: 'Academic Block A (LT-1, LT-3) & Block B (LT-2)',
      highlightBuilding: 'academic_a',
      avatar: 'AD'
    },
    {
      roleKey: 'FACULTY',
      id: 'fac_02',
      name: 'Dr. R. Patnaik',
      dept: 'Computer Science and Engineering',
      title: 'Associate Professor',
      classes: 'Science Complex (Lab 1) & Academic Block A',
      highlightBuilding: 'science_complex',
      avatar: 'RP'
    },
    {
      roleKey: 'DEAN',
      id: 'fac_01',
      name: 'Prof. D. Mishra',
      dept: 'Dean (Academics) & CSE',
      title: 'Professor & Dean',
      classes: 'Institutional Master View & Academic Block A',
      highlightBuilding: 'academic_a',
      avatar: 'PD'
    },
    {
      roleKey: 'COORDINATOR',
      id: 'fac_06',
      name: 'Dr. Vikram Rao',
      dept: 'Electronics & Communication',
      title: 'Associate Professor & Dept Coordinator',
      classes: 'Academic Block B & Science Complex',
      highlightBuilding: 'academic_b',
      avatar: 'VR'
    },
    {
      roleKey: 'CLUB',
      id: 'club_01',
      name: 'Aarav Mehta',
      dept: 'Robotics Club Lead',
      title: 'Club Representative',
      classes: 'Central Plaza & Open Air Theatre (Spectra)',
      highlightBuilding: 'central_plaza',
      avatar: 'AM'
    },
    {
      roleKey: 'ADMIN',
      id: 'admin_01',
      name: 'Admin User',
      dept: 'Dean\'s Office / Timetable Operations',
      title: 'Administrative Officer',
      classes: 'All 27 Rooms & Disruption Resolver',
      highlightBuilding: 'academic_a',
      avatar: 'AD'
    }
  ];

  const html = `
    <div class="min-h-[calc(100vh-4rem)] bg-[#070D1F] flex flex-col text-white">
      <!-- TOP SECTION: Live 3D Campus Overview (Matching Reference Image) -->
      <div class="relative w-full h-[360px] md:h-[420px] bg-slate-900 border-b border-slate-800 overflow-hidden shadow-2xl flex flex-col">
        <!-- 3D Canvas Mount Point -->
        <div id="login-campus-canvas" class="w-full h-full absolute inset-0 z-0"></div>

        <!-- Top Header Overlay -->
        <div class="relative z-10 p-5 flex items-center justify-between pointer-events-none">
          <div class="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-4 py-2.5 shadow-2xl pointer-events-auto flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-black text-white text-base">
              C
            </div>
            <div>
              <div class="font-extrabold text-sm text-white">CITRIX · Campus Overview</div>
              <div class="text-[10px] text-slate-400">Chilika Institute of Technology (CIT) · 3D Spatial Twin</div>
            </div>
          </div>

          <div class="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-2xl pointer-events-auto text-xs text-slate-300 hidden sm:flex items-center gap-3">
            <span class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Interactive 3D Active
            </span>
            <span class="text-slate-600">|</span>
            <span class="text-slate-400">Drag to orbit · Scroll to zoom</span>
          </div>
        </div>

        <!-- Floating Quick Building HUD Tags on the 3D Overview -->
        <div class="absolute bottom-4 left-6 z-10 flex flex-wrap gap-2 pointer-events-auto">
          ${BUILDINGS.slice(0, 5).map(b => `
            <button onclick="window.__loginFocusBuilding('${b.id}')"
              class="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur border border-slate-700/80 hover:border-emerald-500 text-[11px] text-slate-200 font-medium transition-all shadow">
              📍 ${b.name}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- BOTTOM SECTION: Profile Selector Gateway -->
      <div class="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-800">
          <div>
            <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Select Your Profile to Sign In</span>
              <span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase font-bold">Point 4 Roles</span>
            </h2>
            <p class="text-xs text-slate-400">
              Sign in as a professor, coordinator, dean, or club rep. Your assigned teaching buildings will highlight immediately in 3D.
            </p>
          </div>
          <div class="text-[11px] text-amber-300/90 bg-amber-950/30 border border-amber-500/40 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <span>🛡️</span>
            <span>Self-approval restricted: Nobody may approve their own request.</span>
          </div>
        </div>

        <!-- Profiles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${facultyProfiles.map(p => `
            <div onclick="window.__loginWithProfile('${p.roleKey}', '${p.highlightBuilding}', '${p.name}')"
              class="p-4 bg-slate-900/90 border border-slate-800 hover:border-emerald-500 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 shadow-xl group space-y-3">
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600 text-emerald-400 group-hover:from-emerald-600 group-hover:to-teal-500 group-hover:text-white font-black text-sm flex items-center justify-center transition-all shadow">
                    ${p.avatar}
                  </div>
                  <div>
                    <div class="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">${p.name}</div>
                    <div class="text-[11px] text-slate-400 font-medium">${p.title}</div>
                  </div>
                </div>
                <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-800 text-slate-400 border border-slate-700 uppercase">
                  ${p.roleKey}
                </span>
              </div>

              <div class="p-2.5 bg-slate-800/60 rounded-xl border border-slate-700/60 text-[11px] space-y-1">
                <div class="text-slate-400">Department: <strong class="text-slate-200">${p.dept}</strong></div>
                <div class="text-emerald-400 flex items-center gap-1">
                  <span>🏢</span>
                  <span class="truncate">Scheduled in: <strong>${p.classes}</strong></span>
                </div>
              </div>

              <button class="w-full py-2 bg-slate-800 group-hover:bg-emerald-600 text-slate-200 group-hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow">
                <span>Sign in as ${p.name.split(' ')[0]}</span>
                <span>→</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Initialize Top Live 3D Scene
  const canvasMount = document.getElementById('login-campus-canvas');
  if (canvasMount) {
    const scene = new CampusScene(canvasMount, (bId) => {
      store.selectBuilding(bId);
    });
    window.__loginCampusScene = scene;
    window.__loginFocusBuilding = (id) => scene.focusBuilding(id);
  }

  // Profile Login Handler
  window.__loginWithProfile = (roleKey, highlightBuilding, profName) => {
    store.setUser(roleKey);
    store.selectBuilding(highlightBuilding);
    store.addToast(`Signed in as ${profName}. Highlighting your teaching building on campus.`, 'success');
    
    // Seamlessly navigate to Campus Explorer with building focused
    store.setView('campus');
  };
}
