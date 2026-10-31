/**
 * CITRIX Central API Service Layer
 * Follows endpoints documented in docs/api-contract.md.
 * In CrunchWeek offline/standalone mode, connects to Mock Adapter with consistent shared state.
 */

import { store } from '../state/store.js';
import { ROOMS, BUILDINGS } from '../state/dataset.js';

export const apiService = {
  // 1. Auth & Me
  async login(username, password, roleContext) {
    store.setUser(roleContext.toUpperCase());
    return {
      token: 'demo-jwt-token-citrix-2024',
      user: store.currentUser
    };
  },

  async getMe() {
    return store.currentUser;
  },

  // 2. Dashboards
  async getDeanDashboard(date = '2024-08-12') {
    const totalRooms = ROOMS.length;
    const totalSessions = store.sessions.length;
    const pendingApprovals = store.bookings.filter(b => b.status === 'pending').length;

    return {
      summary: {
        totalRooms,
        totalSessions,
        totalFaculty: 40,
        pendingApprovals
      },
      occupancy: {
        'Academic A': [20, 45, 80, 95, 40, 0, 75, 85, 60, 30],
        'Academic B': [15, 30, 60, 70, 35, 0, 60, 70, 50, 20],
        'Science Cmplx': [40, 85, 90, 85, 40, 0, 80, 85, 80, 40],
        'Library': [10, 20, 35, 40, 20, 0, 30, 40, 30, 10],
        'Auditorium': [0, 10, 20, 30, 10, 0, 40, 60, 50, 0],
        'Labs': [50, 90, 95, 90, 40, 0, 90, 95, 85, 50]
      },
      departmentalAvailability: [
        { department: 'CSE', roomsAvailable: 3, totalRooms: 6, upcomingSessions: 12 },
        { department: 'ECE', roomsAvailable: 4, totalRooms: 6, upcomingSessions: 10 },
        { department: 'Mechanical', roomsAvailable: 5, totalRooms: 5, upcomingSessions: 8 },
        { department: 'Civil', roomsAvailable: 4, totalRooms: 5, upcomingSessions: 6 },
        { department: 'Electrical', roomsAvailable: 4, totalRooms: 5, upcomingSessions: 7 },
        { department: 'Mathematics', roomsAvailable: 6, totalRooms: 6, upcomingSessions: 9 }
      ],
      aiInsights: [
        'CSE has the highest room demand next week across all teaching blocks.',
        '2 room conflicts require Dean/Admin review before Wednesday timetable lock.',
        'Library and Science Complex have underutilized slots in P1 (08:00 - 09:00).',
        'Consider shifting one non-core elective from Academic Block A to Block B.'
      ]
    };
  },

  // 3. Rooms & Availability
  async getRooms(filters = {}) {
    let result = [...ROOMS];
    if (filters.buildingId) {
      result = result.filter(r => r.buildingId === filters.buildingId);
    }
    if (filters.accessibleOnly) {
      result = result.filter(r => r.accessible);
    }
    return result;
  },

  // 4. Timetable
  async getTimetable(perspective, id) {
    if (perspective === 'faculty') {
      return store.sessions.filter(s => s.facultyId === id);
    } else if (perspective === 'group') {
      return store.sessions.filter(s => s.studentGroups.some(g => g.includes(id)));
    } else {
      return store.sessions.filter(s => s.roomId === id);
    }
  },

  // 5. Bookings
  async getBookings() {
    return store.bookings;
  },

  async submitBooking(bookingData) {
    store.addBooking(bookingData);
    return { success: true, bookingId: `spec_${Date.now()}` };
  },

  // 6. Natural Language Request Extraction
  async parseNaturalLanguageBooking(rawPrompt) {
    // Intelligent local parsing of English and Hinglish phrases
    const promptLower = rawPrompt.toLowerCase();

    let attendees = 60;
    const numMatch = rawPrompt.match(/(\d+)\s*(logon|log|people|students|attendees|seats)/i);
    if (numMatch) attendees = parseInt(numMatch[1], 10);

    let accessible = promptLower.includes('accessible') || promptLower.includes('step-free') || promptLower.includes('wheelchair');
    let title = promptLower.includes('robotics') ? 'Robotics Workshop' :
                promptLower.includes('dance') ? 'Dance Rehearsal' :
                promptLower.includes('seminar') ? 'Technical Seminar' : 'Campus Event';

    let timeSlot = '15:00 - 17:00';
    if (promptLower.includes('3 se 5') || promptLower.includes('3 to 5') || promptLower.includes('3pm')) {
      timeSlot = '15:00 - 17:00';
    } else if (promptLower.includes('10 se 1') || promptLower.includes('10 to 1')) {
      timeSlot = '10:00 - 13:00';
    }

    let date = '2 Nov 2026';
    if (promptLower.includes('kal') || promptLower.includes('tomorrow')) {
      date = '3 Nov 2026';
    } else if (promptLower.includes('parso')) {
      date = '4 Nov 2026';
    }

    // Match best room
    const matchingRoom = ROOMS.find(r => r.capacity >= attendees && (!accessible || r.accessible)) || ROOMS[3]; // A-104

    return {
      title,
      date,
      time: timeSlot,
      attendees,
      accessibility: accessible ? 'Accessible required' : 'Standard',
      bestMatch: matchingRoom,
      availableForInterval: true
    };
  }
};
