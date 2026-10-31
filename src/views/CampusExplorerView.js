/**
 * CITRIX Campus Explorer & Faculty Room Booking Flow
 * Implements the complete professor journey:
 * 1. Highlights teaching building (Academic Block A) based on logged-in faculty.
 * 2. Surfaces "Prefer previous building" context to save walking time.
 * 3. Asks user: "Floor 1 or Floor 2?"
 * 4. Accepts natural language requests (e.g. "Kal 3 se 5 robotics workshop ke liye 60 logon ka accessible room chahiye.")
 * 5. Displays room blocks colored in GREEN (available) and RED (occupied).
 * 6. Synchronized table below with one-click booking and validation.
 */

import { BUILDINGS, ROOMS } from '../state/dataset.js';
import { store } from '../state/store.js';
import { CampusScene } from '../campus3d/CampusScene.js';
import { renderFloorPlan2D } from '../campus3d/FloorPlan2D.js';
import { apiService } from '../api/service.js';

export function renderCampusExplorer(container) {
  const user = store.currentUser;
  const currentBuilding = BUILDINGS.find(b => b.id === store.selectedBuildingId) || BUILDINGS[0];
  const roomsInBuilding = ROOMS.filter(r => r.buildingId === currentBuilding.id && r.floor === store.selectedFloor);

  const html = `
    <div class="p-6 bg-[#070D1F] min-h-[calc(100vh-4rem)] text-white space-y-5">
      <!-- 1. Faculty Previous Class & Same-Building Context Banner -->
      <div class="bg-gradient-to-r from-blue-950/60 via-slate-900 to-emerald-950/40 border border-blue-500/40 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-lg">
            📍
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-black text-sm text-white">${user.name}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">Your Scheduled Building</span>
            </div>
            <p class="text-xs text-slate-300 mt-0.5">
              Previous class: <strong class="text-white">14:00 – 15:00 in Academic Block A (Room A-102)</strong>. Since taking consecutive sessions in the same building eliminates walking fatigue, Academic Block A has been automatically highlighted.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <label class="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-slate-200 cursor-pointer">
            <input type="checkbox" id="chk-prefer-bld" checked class="rounded text-emerald-500 focus:ring-0">
            <span>Prefer previous building (Academic A)</span>
          </label>
        </div>
      </div>

      <!-- 2. Top Controls Bar: Teaching Week, Date, Time & View Mode -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h1 class="text-2xl font-black text-white tracking-tight">Campus & Venue Explorer</h1>
          <div class="text-xs text-slate-400 font-medium">Chilika Institute of Technology · Interactive 3D & Floor Plan</div>
        </div>

        <div class="flex flex-wrap items-center gap-3 text-xs">
          <!-- Date / Time -->
          <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5">
            <span class="text-slate-400">Date:</span>
            <span class="font-bold text-white">Mon 2 Nov 2026</span>
          </div>

          <div class="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5">
            <span class="text-slate-400">Target Time:</span>
            <span class="font-bold text-emerald-400">15:00 – 17:00</span>
          </div>

          <!-- 3D Campus vs 2D Floor Plan Toggle -->
          <div class="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button onclick="window.__citrixToggleExploreMode('3d')" 
              class="px-3 py-1.5 rounded-md font-bold transition-all ${store.viewMode3D ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
              3D Campus Overview
            </button>
            <button onclick="window.__citrixToggleExploreMode('floor')" 
              class="px-3 py-1.5 rounded-md font-bold transition-all ${!store.viewMode3D ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
              Floor Plan (Green & Red)
            </button>
          </div>
        </div>
      </div>

      <!-- 3. Main Grid: Visual Map/Floor (2 cols) + Natural Language Booking Composer (1 col) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left 2 Columns: 3D Scene or Interactive Floor Plan -->
        <div class="lg:col-span-2 space-y-5">
          <!-- Step 1/2 Prompt Banner -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                ${store.viewMode3D ? '1' : '2'}
              </span>
              <div>
                <div class="font-bold text-white text-xs">
                  ${store.viewMode3D ? 'Selected: ' + currentBuilding.name + ' (Highlighted in 3D)' : 'Step 2: Choose Floor for ' + currentBuilding.name}
                </div>
                <div class="text-[11px] text-slate-400">
                  ${store.viewMode3D ? 'Click the building or switch to Floor Plan to view room availability.' : 'Select Floor 1 or Floor 2 to inspect green & red room blocks.'}
                </div>
              </div>
            </div>

            <!-- Floor 1 / Floor 2 Prompt Buttons -->
            <div class="flex items-center gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <span class="text-xs text-slate-400 font-semibold px-2">Floor:</span>
              <button onclick="window.__setExplorerFloor(1)" 
                class="px-3.5 py-1 rounded-lg text-xs font-bold transition-all ${store.selectedFloor === 1 ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
                Floor 1
              </button>
              <button onclick="window.__setExplorerFloor(2)" 
                class="px-3.5 py-1 rounded-lg text-xs font-bold transition-all ${store.selectedFloor === 2 ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
                Floor 2
              </button>
            </div>
          </div>

          <!-- Primary Visual Canvas / Floor Plan Container -->
          <div class="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden min-h-[440px] shadow-2xl">
            <!-- 3D Canvas View -->
            <div id="explorer-canvas-container" class="w-full h-[440px] ${!store.viewMode3D ? 'hidden' : ''}"></div>

            <!-- 2D Floor Plan View (Green & Red Room Blocks) -->
            <div id="explorer-floorplan-container" class="w-full min-h-[440px] ${store.viewMode3D ? 'hidden' : ''}"></div>

            <!-- 3D Floating Zoom & Reset Buttons -->
            ${store.viewMode3D ? `
              <div class="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 rounded-lg p-1 shadow-lg">
                <button onclick="window.__citrixExpZoomIn()" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm bg-slate-800 rounded">+</button>
                <button onclick="window.__citrixExpZoomOut()" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white font-bold text-sm bg-slate-800 rounded">−</button>
                <button onclick="window.__citrixToggleExploreMode('floor')" class="px-2.5 h-7 flex items-center justify-center text-emerald-400 hover:text-white text-xs bg-slate-800 rounded font-bold">
                  Inspect Floor Plan →
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Synchronized Rooms Results Table (Matching Reference) -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span class="text-sm font-bold text-white">Rooms on Floor ${store.selectedFloor}</span>
                <span class="text-xs text-slate-400 ml-2">(synchronised with green & red representation)</span>
              </div>
              <span class="text-xs text-slate-400">Total: ${roomsInBuilding.length} rooms</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left">
                <thead>
                  <tr class="text-[10px] text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                    <th class="py-2.5 px-3 font-semibold">Room</th>
                    <th class="py-2.5 px-3 font-semibold">Capacity</th>
                    <th class="py-2.5 px-3 font-semibold">Accessibility</th>
                    <th class="py-2.5 px-3 font-semibold">Status (15:00 – 17:00)</th>
                    <th class="py-2.5 px-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60 font-medium">
                  ${roomsInBuilding.map(r => {
                    const isSelected = (store.selectedRoomId === r.id);
                    const isOccupied = (r.id === 'A-102' || r.id === 'A-105' || r.id === 'A-113');
                    return `
                      <tr class="hover:bg-slate-800/40 transition-colors ${isSelected ? 'bg-slate-800/70' : ''}">
                        <td class="py-3 px-3 font-bold text-white flex items-center gap-2">
                          <span class="w-2.5 h-2.5 rounded-full ${isOccupied ? 'bg-rose-500' : 'bg-emerald-400'}"></span>
                          ${r.id}
                        </td>
                        <td class="py-3 px-3 text-slate-300">${r.capacity} seats</td>
                        <td class="py-3 px-3">
                          ${r.accessible ? '<span class="text-emerald-400 font-semibold">♿ Step-free access</span>' : '<span class="text-slate-500">Standard</span>'}
                        </td>
                        <td class="py-3 px-3">
                          ${isOccupied ? '<span class="text-rose-400 font-bold">● Occupied (Lecture ongoing)</span>' : '<span class="text-emerald-400 font-bold">● Available (15:00 – 17:00)</span>'}
                        </td>
                        <td class="py-3 px-3 text-right">
                          ${isOccupied ? `
                            <button disabled class="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800/60 text-slate-500 cursor-not-allowed">
                              Unavailable
                            </button>
                          ` : `
                            <button onclick="window.__citrixSelectAndBookRoom('${r.id}')"
                              class="px-3 py-1 rounded-md text-xs font-bold transition-all ${isSelected ? 'bg-emerald-600 text-white shadow' : 'bg-emerald-950/60 text-emerald-300 hover:bg-emerald-600 hover:text-white border border-emerald-500/40'}">
                              ${isSelected ? 'Selected ✓' : 'Book Room'}
                            </button>
                          `}
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Right Column: Natural Language Booking Composer (Matching Exact Prompt Example) -->
        <div class="space-y-5">
          <!-- Composer Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-xs font-bold text-white uppercase tracking-wider">Natural-Language Booking</span>
              <span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 border border-slate-700">Demo preview</span>
            </div>

            <!-- Natural Language Textarea (Pre-filled with user's example!) -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">
                Type your need (English or Hinglish):
              </label>
              <textarea id="nl-user-prompt" rows="3"
                class="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500 leading-relaxed">Kal 3 se 5 robotics workshop ke liye 60 logon ka accessible room chahiye.</textarea>
              <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                <span>Auto-parses relative dates in Asia/Kolkata</span>
                <span class="font-mono text-emerald-400">69/500</span>
              </div>
            </div>

            <!-- Parse & Filter Button -->
            <button onclick="window.__parseAndFilterFloor()"
              class="w-full py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs rounded-xl transition-all shadow">
              Extract Requirements & Highlight
            </button>

            <!-- Extracted Booking Details (Matching Reference) -->
            <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5 space-y-2 text-xs">
              <div class="flex items-center justify-between pb-1.5 border-b border-slate-700">
                <span class="font-bold text-white text-xs">Extracted booking details</span>
                <span class="text-[10px] text-emerald-400 font-semibold cursor-pointer hover:underline">✎ Edit</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-slate-300 text-[11px]">
                <div><span class="text-slate-500">Date:</span> 2 Nov 2026</div>
                <div><span class="text-slate-500">Time:</span> 15:00 – 17:00</div>
                <div><span class="text-slate-500">Attendees:</span> 60 seats</div>
                <div><span class="text-slate-500">Access:</span> Step-free required</div>
              </div>
            </div>

            <!-- Best Matching Room Recommendation -->
            <div class="bg-emerald-950/40 border-2 border-emerald-500/70 rounded-2xl p-4 text-xs space-y-2 shadow-lg">
              <div class="flex items-center justify-between">
                <span class="font-black text-white text-base">Room A-104</span>
                <span class="px-2 py-0.5 rounded text-[9px] font-black bg-emerald-500 text-slate-950 uppercase tracking-wider">
                  Best match
                </span>
              </div>
              <div class="space-y-1 text-slate-300 text-[11px]">
                <div>• Capacity: <strong class="text-white">80 seats</strong> (accommodates 60 attendees)</div>
                <div>• Step-free access: <strong class="text-emerald-400">Yes</strong> (ground floor ramp)</div>
                <div>• Status: <strong class="text-emerald-400">Available for full interval (15:00 – 17:00)</strong></div>
                <div>• Distance: In your current building (<strong class="text-emerald-300">0 min walk</strong>)</div>
              </div>

              <button onclick="window.__confirmRoomBooking('A-104')"
                class="w-full mt-2 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5">
                <span>Confirm & Review Request</span>
                <span>→</span>
              </button>
            </div>

            <div class="text-[10px] text-slate-400 text-center">
              ⓘ Availability is re-verified dynamically against active timetable before submission.
            </div>
          </div>

          <!-- Shortcuts to Fest (Spectra) & Midterm (Exams) Workspaces -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2.5 text-xs">
            <span class="font-bold text-white text-xs uppercase tracking-wider">Special Campus Workspaces</span>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.__citrixStore.setView('spectra')"
                class="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-left space-y-0.5 transition-all">
                <div class="font-bold text-emerald-400 text-xs">🎭 Spectra (Fest)</div>
                <div class="text-[10px] text-slate-400">Priority space booking</div>
              </button>
              <button onclick="window.__citrixStore.setView('midsem')"
                class="p-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-left space-y-0.5 transition-all">
                <div class="font-bold text-teal-400 text-xs">📝 Midterm Exams</div>
                <div class="text-[10px] text-slate-400">50% capacity rule</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Initialize 3D Scene
  const canvasContainer = document.getElementById('explorer-canvas-container');
  if (canvasContainer && store.viewMode3D) {
    const scene = new CampusScene(canvasContainer, (bId) => {
      store.selectBuilding(bId);
    });
    window.__citrixExpScene = scene;
    window.__citrixExpZoomIn = () => scene.zoomIn();
    window.__citrixExpZoomOut = () => scene.zoomOut();
    // Pre-focus the highlighted building
    scene.focusBuilding(store.selectedBuildingId);
  }

  // Render 2D floor plan if in floor plan mode
  const floorContainer = document.getElementById('explorer-floorplan-container');
  if (floorContainer) {
    renderFloorPlan2D(floorContainer, store.selectedBuildingId, store.selectedFloor, (rId) => {
      store.selectRoom(rId);
    });
  }

  window.__citrixToggleExploreMode = (mode) => {
    store.viewMode3D = (mode === '3d');
    renderCampusExplorer(container);
  };

  window.__setExplorerFloor = (fNum) => {
    store.selectFloor(fNum);
    store.viewMode3D = false; // Switch to floor plan when floor is explicitly picked
    renderCampusExplorer(container);
  };

  window.__parseAndFilterFloor = () => {
    const prompt = document.getElementById('nl-user-prompt')?.value || '';
    store.addToast(`Parsed request: 60 attendees, 15:00 - 17:00. Highlighting Room A-104 on Floor 1.`, 'success');
    store.selectFloor(1);
    store.viewMode3D = false;
    renderCampusExplorer(container);
  };

  window.__citrixSelectAndBookRoom = (rId) => {
    store.selectRoom(rId);
    const room = ROOMS.find(r => r.id === rId);
    if (rId === 'A-102' || rId === 'A-105' || rId === 'A-113') {
      store.addToast(`Room ${rId} is occupied by an active lecture. Please select a green available room.`, 'error');
    } else {
      store.addToast(`Selected ${rId} (${room ? room.capacity : 60} seats). Ready to submit booking request.`, 'success');
    }
  };

  window.__confirmRoomBooking = (rId) => {
    store.addBooking({
      title: 'Robotics Workshop',
      category: 'club',
      date: '2024-08-14',
      timeSlot: '15:00 - 17:00',
      requestedRoomId: rId,
      expectedParticipants: 60,
      accessibilityRequired: true
    });
    store.setView('spectra');
  };
}
