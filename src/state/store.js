/**
 * CITRIX Central Reactive Store
 * Manages user authentication, navigation route, deep-link state,
 * timetable sessions, room availability, booking requests, and notifications.
 */

import {
  BUILDINGS,
  ROOMS,
  FACULTY_MEMBERS,
  STUDENT_GROUPS,
  COURSES,
  PERIODS,
  DAYS,
  BASELINE_SESSIONS,
  SPECTRA_BOOKINGS,
  MIDSEM_EXAMS,
  SAMPLE_DISRUPTION
} from './dataset.js';

export const ROLES = {
  DEAN: {
    id: 'dean',
    label: 'Dean (Academics)',
    name: 'Prof. D. Mishra',
    initials: 'PD',
    department: 'Dean Office',
    canApproveAll: true,
    canRunWhatIf: true,
    canGenerateTimetable: false
  },
  ADMIN: {
    id: 'admin',
    label: 'Dean\'s Office / Admin',
    name: 'Admin User',
    initials: 'AD',
    department: 'Academic Administration',
    canApproveAll: true,
    canRunWhatIf: true,
    canGenerateTimetable: true
  },
  COORDINATOR: {
    id: 'coordinator',
    label: 'Department Coordinator',
    name: 'Dr. Vikram Rao',
    initials: 'VR',
    department: 'Electronics & Communication',
    canApproveAll: false,
    canRunWhatIf: false,
    canGenerateTimetable: false
  },
  FACULTY: {
    id: 'faculty',
    label: 'Faculty',
    name: 'Prof. Ananya Das',
    initials: 'AD',
    department: 'Computer Science and Engineering',
    canApproveAll: false,
    canRunWhatIf: false,
    canGenerateTimetable: false
  },
  CLUB: {
    id: 'club',
    label: 'Club Representative',
    name: 'Aarav Mehta',
    initials: 'AM',
    department: 'Robotics Club',
    canApproveAll: false,
    canRunWhatIf: false,
    canGenerateTimetable: false
  }
};

class Store {
  constructor() {
    this.subscribers = new Set();
    this.currentUser = ROLES.DEAN;
    this.currentView = 'landing'; // landing, login, dean_cc, campus, timetable, bookings, spectra, midsem, changes, assistant, approvals, analytics, settings, admin
    this.viewMode3D = true; // 3D or 2D list fallback

    // 3D Spatial Navigation State
    this.selectedBuildingId = 'academic_a';
    this.selectedFloor = 1;
    this.selectedRoomId = 'A-104';
    this.isExplodedView = false;
    this.selectedDate = '2024-08-12';
    this.selectedTimeSlot = '15:00 - 17:00';
    this.teachingWeek = 'Week 12 (2 Nov - 8 Nov)';

    // Timetable Filters
    this.timetablePerspective = 'faculty'; // faculty, group, room
    this.selectedFacultyId = 'fac_02'; // Dr. R. Patnaik
    this.selectedGroupId = 'grp_cse_a_s3';
    this.selectedTimetableRoomId = 'A-104';

    // Data Collections
    this.sessions = [...BASELINE_SESSIONS];
    this.bookings = [...SPECTRA_BOOKINGS];
    this.exams = [...MIDSEM_EXAMS];
    this.disruptions = [{ ...SAMPLE_DISRUPTION }];
    this.isDemoData = true;

    // What-If Simulation State
    this.whatIfScenario = 'close_academic_a';
    this.whatIfResult = null;

    // Toast Notifications
    this.toasts = [];

    // System Notifications
    this.notifications = [
      { id: 'notif_1', title: 'Room conflict detected', message: 'AC-A101 · Mon, 12 Aug · 10:00-11:00', type: 'error', time: '10m ago' },
      { id: 'notif_2', title: 'Room under maintenance', message: 'Lab-2 · Tue, 13 Aug · Full day', type: 'warning', time: '1h ago' },
      { id: 'notif_3', title: 'High room demand', message: 'CSE · Tue, 13 Aug · 3 pending bookings', type: 'info', time: '2h ago' }
    ];
  }

  subscribe(listener) {
    this.subscribers.add(listener);
    return () => this.subscribers.delete(listener);
  }

  notify() {
    this.subscribers.forEach(fn => fn(this));
  }

  setUser(roleKey) {
    if (ROLES[roleKey]) {
      this.currentUser = ROLES[roleKey];
      this.addToast(`Switched role to ${this.currentUser.label}`, 'info');
      this.notify();
    }
  }

  setView(viewName) {
    this.currentView = viewName;
    window.location.hash = viewName;
    this.notify();
  }

  selectBuilding(buildingId) {
    this.selectedBuildingId = buildingId;
    this.selectedFloor = 1;
    const firstRoom = ROOMS.find(r => r.buildingId === buildingId);
    this.selectedRoomId = firstRoom ? firstRoom.id : null;
    this.notify();
  }

  selectFloor(floorNum) {
    this.selectedFloor = floorNum;
    const roomOnFloor = ROOMS.find(r => r.buildingId === this.selectedBuildingId && r.floor === floorNum);
    if (roomOnFloor) {
      this.selectedRoomId = roomOnFloor.id;
    }
    this.notify();
  }

  selectRoom(roomId) {
    this.selectedRoomId = roomId;
    const room = ROOMS.find(r => r.id === roomId);
    if (room) {
      this.selectedBuildingId = room.buildingId;
      this.selectedFloor = room.floor;
    }
    this.notify();
  }

  toggleViewMode() {
    this.viewMode3D = !this.viewMode3D;
    this.notify();
  }

  toggleExplodedView(val) {
    this.isExplodedView = (val !== undefined) ? val : !this.isExplodedView;
    this.notify();
  }

  addBooking(booking) {
    this.bookings.unshift({
      ...booking,
      id: `spec_${Date.now()}`,
      status: 'pending',
      requester: {
        name: this.currentUser.name,
        org: this.currentUser.department,
        role: this.currentUser.id
      }
    });
    this.addToast('Booking request submitted for review', 'success');
    this.notify();
  }

  approveBooking(bookingId) {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    // Self-approval restriction rule
    if (booking.requester.name === this.currentUser.name) {
      this.addToast('Self-approval restricted: You cannot approve your own booking request.', 'error');
      return;
    }

    booking.status = 'approved';
    this.addToast(`Booking "${booking.title}" approved successfully`, 'success');
    this.notify();
  }

  rejectBooking(bookingId, reason = 'Administrative slot constraint') {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    // Self-approval restriction rule
    if (booking.requester.name === this.currentUser.name) {
      this.addToast('Self-action restricted: You cannot action your own booking request.', 'error');
      return;
    }

    booking.status = 'rejected';
    booking.rejectionReason = reason;
    this.addToast(`Booking "${booking.title}" rejected`, 'info');
    this.notify();
  }

  runWhatIf(scenarioId) {
    this.whatIfScenario = scenarioId;
    if (scenarioId === 'close_academic_a') {
      this.whatIfResult = {
        title: 'Close Academic Block A tomorrow (Full Day Maintenance)',
        displacedSessions: 14,
        reassignedSuccessfully: 12,
        unresolvableClashes: 2,
        suggestedAlternatives: [
          'Shift CS301 (60 students) from A-104 to B-201 at 10:00',
          'Shift MA102 (58 students) from A-102 to LC-101 at 11:00',
          'Reschedule 2 non-core tutorial sessions to Wednesday afternoon'
        ],
        capacityImpact: 'Academic Block B utilization increases from 45% to 88%.'
      };
    } else {
      this.whatIfResult = {
        title: 'Shift ECE Sessions to Afternoon Block',
        displacedSessions: 6,
        reassignedSuccessfully: 6,
        unresolvableClashes: 0,
        suggestedAlternatives: [
          'All 6 lectures accommodated in Academic Block B Floors 1 & 2 without clashes.'
        ],
        capacityImpact: 'Morning campus energy load reduced by 14%.'
      };
    }
    this.addToast('What-If simulation completed from loaded data', 'info');
    this.notify();
  }

  applyDisruptionRepair(disruptionId) {
    const disruption = this.disruptions.find(d => d.id === disruptionId);
    if (!disruption) return;

    // Apply proposed timetable moves
    disruption.affectedSessions.forEach(aff => {
      const sess = this.sessions.find(s => s.courseCode === aff.courseCode && s.day === aff.day);
      if (sess) {
        sess.day = aff.proposedDay;
        sess.timeString = aff.proposedSlot;
        sess.startTime = aff.proposedSlot.split(' - ')[0];
        sess.endTime = aff.proposedSlot.split(' - ')[1];
        sess.roomId = aff.proposedRoom;
      }
    });

    disruption.status = 'applied';
    this.addToast('Timetable repair successfully applied to active schedule', 'success');
    this.notify();
  }

  resetDemoData() {
    this.sessions = [...BASELINE_SESSIONS];
    this.bookings = [...SPECTRA_BOOKINGS];
    this.exams = [...MIDSEM_EXAMS];
    this.disruptions = [{ ...SAMPLE_DISRUPTION }];
    this.whatIfResult = null;
    this.addToast('Demo dataset reset to pristine starter baseline', 'info');
    this.notify();
  }

  addToast(message, type = 'info') {
    const id = Date.now();
    this.toasts.push({ id, message, type });
    this.notify();
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== id);
      this.notify();
    }, 4000);
  }
}

export const store = new Store();
