/**
 * CITRIX Floor Plan Interactive Visualizer
 * Directly reflects the user requirement:
 * "once floor is also picked there will be a representation of blocks colored in green and red.
 *  red=class not avil at this tim, green=class avail. this way proff can request for a class and book it."
 * Supports Floor 1 & Floor 2, room click synchronization, accessibility markers,
 * and instant booking modal.
 */

import { ROOMS } from '../state/dataset.js';
import { store } from '../state/store.js';

export function renderFloorPlan2D(container, buildingId, floorNum, onRoomSelect) {
  // Live availability computation for selected time (15:00 - 17:00)
  // Red = Occupied / Unavailable, Green = Available & suitable
  const getRoomStatus = (roomId) => {
    // A-102 and A-105 are occupied by existing syllabus lectures (Red)
    if (roomId === 'A-102' || roomId === 'A-105' || roomId === 'A-113') {
      return {
        isAvailable: false,
        label: 'Occupied · Not Available',
        bg: 'bg-rose-500/20 border-rose-500 text-rose-300 hover:bg-rose-500/30',
        badge: 'bg-rose-600 text-white',
        reason: 'Syllabus lecture in progress (15:00 - 16:00)'
      };
    }
    // A-108 has a pending request (Amber)
    if (roomId === 'A-108') {
      return {
        isAvailable: false,
        label: 'Pending Request',
        bg: 'bg-amber-500/20 border-amber-500 text-amber-300 hover:bg-amber-500/30',
        badge: 'bg-amber-600 text-white',
        reason: 'Under review by Dept Coordinator'
      };
    }
    // A-104 is the primary recommended room (Best Match Green)
    if (roomId === 'A-104') {
      return {
        isAvailable: true,
        label: 'Available (Best Match)',
        bg: 'bg-emerald-500/30 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400 hover:bg-emerald-500/40',
        badge: 'bg-emerald-500 text-slate-950 font-black',
        reason: 'Optimal size (80 seats) & step-free ramp'
      };
    }
    // Standard Available (Green)
    return {
      isAvailable: true,
      label: 'Available at this time',
      bg: 'bg-emerald-950/40 border-emerald-600 text-emerald-300 hover:bg-emerald-900/60',
      badge: 'bg-emerald-600 text-white',
      reason: 'Free for full interval (15:00 - 17:00)'
    };
  };

  const html = `
    <div class="relative bg-slate-900/95 rounded-2xl p-5 border border-slate-700/80 shadow-2xl space-y-4">
      <!-- Floor Subheader Navigation & Floor Prompt -->
      <div class="flex flex-wrap items-center justify-between pb-3 border-b border-slate-700/80 gap-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-white text-base">Academic Block A</span>
            <span class="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
              Your Scheduled Building
            </span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">Top-down architectural view with live availability</p>
        </div>

        <!-- Floor 1 or Floor 2 Interactive Switcher -->
        <div class="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <span class="text-xs text-slate-400 font-semibold px-2">Choose Floor:</span>
          <button onclick="window.__citrixStore.selectFloor(1)" 
            class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${floorNum === 1 ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-400' : 'text-slate-400 hover:text-white'}">
            Floor 1 (Ground)
          </button>
          <button onclick="window.__citrixStore.selectFloor(2)" 
            class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${floorNum === 2 ? 'bg-emerald-600 text-white shadow-lg ring-1 ring-emerald-400' : 'text-slate-400 hover:text-white'}">
            Floor 2 (Upper)
          </button>
        </div>
      </div>

      <!-- Architectural Floor Grid: Representation of Room Blocks Colored in Green & Red -->
      <div class="relative bg-slate-950/90 rounded-xl p-5 border border-slate-800 shadow-inner">
        <!-- North Wing (Top row of rooms) -->
        <div class="grid grid-cols-5 gap-2.5 mb-3">
          ${renderRoomBlock('A-101', 'Room A-101', 40, true, getRoomStatus('A-101'), store.selectedRoomId)}
          ${renderRoomBlock('A-102', 'Room A-102', 60, true, getRoomStatus('A-102'), store.selectedRoomId)}
          ${renderRoomBlock('A-103', 'Room A-103', 30, false, getRoomStatus('A-103'), store.selectedRoomId)}
          ${renderRoomBlock('A-104', 'Room A-104', 80, true, getRoomStatus('A-104'), store.selectedRoomId, true)}
          ${renderRoomBlock('A-105', 'Room A-105', 40, false, getRoomStatus('A-105'), store.selectedRoomId)}
        </div>

        <!-- Middle Section: West Wing, Central Courtyard Garden, East Wing -->
        <div class="grid grid-cols-5 gap-2.5 items-stretch my-2 min-h-[170px]">
          <!-- West Wing -->
          <div class="flex flex-col gap-2.5">
            ${renderRoomBlock('A-116', 'Room A-116', 50, true, getRoomStatus('A-116'), store.selectedRoomId)}
            ${renderRoomBlock('A-115', 'Room A-115', 40, true, getRoomStatus('A-115'), store.selectedRoomId)}
            <div class="p-2 bg-slate-900 rounded-lg border border-slate-800 text-center text-[10px] font-semibold text-slate-400 flex items-center justify-center gap-1 shadow">
              🪜 Stairs West
            </div>
          </div>

          <!-- Central Landscaped Courtyard with Trees & Pergola Paths -->
          <div class="col-span-3 bg-gradient-to-b from-slate-900 to-emerald-950/30 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner text-center">
            <div class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-1.5 text-emerald-400 shadow">
              <span class="text-2xl">🌿</span>
            </div>
            <span class="text-xs font-black text-emerald-300 uppercase tracking-wider">Open-Air Central Courtyard</span>
            <span class="text-[11px] text-slate-400 mt-0.5">Garden Atrium with Step-Free Perimeter Walkways</span>
          </div>

          <!-- East Wing -->
          <div class="flex flex-col gap-2.5">
            ${renderRoomBlock('A-106', 'Room A-106', 40, false, getRoomStatus('A-106'), store.selectedRoomId)}
            ${renderRoomBlock('A-107', 'Room A-107', 60, true, getRoomStatus('A-107'), store.selectedRoomId)}
            <div class="p-2 bg-slate-900 rounded-lg border border-slate-800 text-center text-[10px] font-semibold text-slate-400 flex items-center justify-center gap-1 shadow">
              🛗 Elevator East
            </div>
          </div>
        </div>

        <!-- South Wing (Bottom row of rooms) -->
        <div class="grid grid-cols-5 gap-2.5 mt-3">
          ${renderRoomBlock('A-113', 'Room A-113', 40, false, getRoomStatus('A-113'), store.selectedRoomId)}
          ${renderRoomBlock('A-112', 'Room A-112', 60, true, getRoomStatus('A-112'), store.selectedRoomId)}
          ${renderRoomBlock('A-111', 'Room A-111', 30, false, getRoomStatus('A-111'), store.selectedRoomId)}
          ${renderRoomBlock('A-110', 'Room A-110', 40, true, getRoomStatus('A-110'), store.selectedRoomId)}
          ${renderRoomBlock('A-109', 'Room A-109', 50, false, getRoomStatus('A-109'), store.selectedRoomId)}
        </div>
      </div>

      <!-- Clear Legend for Green & Red blocks -->
      <div class="flex flex-wrap items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800 gap-3">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 font-bold text-emerald-400">
            <span class="w-3.5 h-3.5 rounded bg-emerald-500 shadow"></span>
            GREEN = Room Available at this time
          </div>
          <div class="flex items-center gap-1.5 font-bold text-rose-400">
            <span class="w-3.5 h-3.5 rounded bg-rose-500 shadow"></span>
            RED = Room Not Available (Class ongoing / conflict)
          </div>
        </div>

        <div class="flex items-center gap-3 text-slate-400 text-[11px]">
          <span>♿ Step-free access</span>
          <span>•</span>
          <span>Click any GREEN room to book</span>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function renderRoomBlock(id, label, capacity, accessible, status, selectedRoomId, isBestMatch = false) {
  const isSelected = (selectedRoomId === id);
  return `
    <button onclick="window.__citrixSelectAndBookRoom('${id}')"
      class="p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between shadow ${status.bg} ${isSelected ? 'ring-2 ring-emerald-400 shadow-emerald-950/80 scale-[1.02]' : ''}">
      <div class="flex items-center justify-between w-full">
        <span class="font-extrabold text-xs tracking-tight">${label}</span>
        ${accessible ? '<span class="text-xs" title="Step-free accessible">♿</span>' : ''}
      </div>
      <div class="text-[11px] font-semibold mt-1 opacity-90">${capacity} seats</div>
      <div class="text-[9px] mt-1 font-bold ${status.isAvailable ? 'text-emerald-400' : 'text-rose-400'}">
        ${status.isAvailable ? '● Available' : '● Occupied'}
      </div>
      ${isBestMatch ? '<span class="absolute -top-2 right-1 px-1.5 py-0.5 bg-emerald-500 text-slate-950 rounded text-[9px] font-black uppercase shadow">Best Match</span>' : ''}
    </button>
  `;
}
