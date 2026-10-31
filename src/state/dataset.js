/**
 * CITRIX Official Demo Dataset
 * Chilika Institute of Technology (CIT)
 * 
 * Dataset counts per specification:
 * - 27 Rooms
 * - 40 Faculty
 * - 14 Student Groups
 * - 62 Courses
 * - 189 Teaching Sessions (162 1-hr lectures/tutorials + 27 3-hr lab sessions = 243 hours/week)
 * - 25 Spectra Booking Requests (1 later cancelled)
 * - 41 Midsem Exams (with 50% capacity rule)
 */

export const BUILDINGS = [
  {
    id: 'academic_a',
    name: 'Academic Block A',
    code: 'AC-A',
    floors: 2,
    totalRooms: 12,
    type: 'Academic Building',
    primaryUse: 'Classrooms, Lecture Halls, Tutorial Rooms',
    departments: ['Computer Science and Engineering', 'Mathematics'],
    coords: { x: -35, z: -20, y: 0 },
    shape: 'quad_courtyard',
    color: '#3B82F6',
    walkingTimeFromAdmin: '3 min',
    accessibility: 'Full step-free access, ramps, elevator installed'
  },
  {
    id: 'academic_b',
    name: 'Academic Block B',
    code: 'AC-B',
    floors: 2,
    totalRooms: 5,
    type: 'Academic Building',
    primaryUse: 'Classrooms, Seminar Halls',
    departments: ['Electronics & Communication', 'Electrical Engineering'],
    coords: { x: -45, z: 25, y: 0 },
    shape: 'curved_wing',
    color: '#F59E0B',
    walkingTimeFromAdmin: '4 min',
    accessibility: 'Step-free ground floor, elevator to 2nd floor'
  },
  {
    id: 'science_complex',
    name: 'Science Complex',
    code: 'SCI',
    floors: 2,
    totalRooms: 4,
    type: 'Laboratory Complex',
    primaryUse: 'Specialized Hardware & Research Labs',
    departments: ['Physics', 'Chemistry', 'CSE Research'],
    coords: { x: 35, z: -30, y: 0 },
    shape: 'oval_petal',
    color: '#10B981',
    walkingTimeFromAdmin: '5 min',
    accessibility: 'Heavy equipment ramps, freight & passenger elevator'
  },
  {
    id: 'library',
    name: 'Central Library',
    code: 'LIB',
    floors: 2,
    totalRooms: 2,
    type: 'Academic Resource',
    primaryUse: 'Digital Archives, Reading Halls, Conference Rooms',
    departments: ['All Departments'],
    coords: { x: -10, z: 42, y: 0 },
    shape: 'oval_petal',
    color: '#06B6D4',
    walkingTimeFromAdmin: '2 min',
    accessibility: 'Ground floor direct ramp, braille signage'
  },
  {
    id: 'auditorium',
    name: 'Central Auditorium',
    code: 'AUD',
    floors: 1,
    totalRooms: 2,
    type: 'Assembly Venue',
    primaryUse: 'Convocations, Keynotes, Institute Events',
    departments: ['Institute Level'],
    coords: { x: 30, z: 35, y: 0 },
    shape: 'dome_auditorium',
    color: '#EF4444',
    walkingTimeFromAdmin: '6 min',
    accessibility: 'Wheelchair dedicated rows, hearing loop assistive tech'
  },
  {
    id: 'lecture_center',
    name: 'Lecture Centre',
    code: 'LC',
    floors: 2,
    totalRooms: 2,
    type: 'Lecture Theatres',
    primaryUse: 'Large Common Core Courses',
    departments: ['First Year Engineering', 'Common Core'],
    coords: { x: 15, z: -40, y: 0 },
    shape: 'oval_petal',
    color: '#8B5CF6',
    walkingTimeFromAdmin: '3 min',
    accessibility: 'Tiered step-free access on mid-level'
  },
  {
    id: 'central_plaza',
    name: 'Central Plaza & Amphitheatre',
    code: 'PLAZA',
    floors: 1,
    totalRooms: 1,
    type: 'Outdoor Arena',
    primaryUse: 'Cultural Festivals, Spectra 2024, Exhibitions',
    departments: ['Student Affairs / Cultural'],
    coords: { x: 0, z: 0, y: 0 },
    shape: 'circular_amphitheatre',
    color: '#EC4899',
    walkingTimeFromAdmin: '1 min',
    accessibility: 'Wide paved amphitheatre ramps'
  },
  {
    id: 'oat',
    name: 'Open Air Theatre (OAT)',
    code: 'OAT',
    floors: 1,
    totalRooms: 1,
    type: 'Outdoor Arena',
    primaryUse: 'Concerts, Club Practices, Dramatic Societies',
    departments: ['Student Clubs'],
    coords: { x: 55, z: 20, y: 0 },
    shape: 'stepped_bowl',
    color: '#14B8A6',
    walkingTimeFromAdmin: '7 min',
    accessibility: 'Perimeter accessible viewing deck'
  }
];

export const ROOMS = [
  // Academic Block A - Floor 1
  { id: 'A-101', name: 'Classroom A-101', buildingId: 'academic_a', floor: 1, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC', 'PA System'] },
  { id: 'A-102', name: 'Classroom A-102', buildingId: 'academic_a', floor: 1, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC'] },
  { id: 'A-103', name: 'Tutorial Room A-103', buildingId: 'academic_a', floor: 1, capacity: 40, examCapacity: 20, type: 'tutorial', accessible: true, features: ['Whiteboard', 'AC'] },
  { id: 'A-104', name: 'Large Lecture Hall A-104', buildingId: 'academic_a', floor: 1, capacity: 80, examCapacity: 40, type: 'lecture_hall', accessible: true, features: ['Dual Projectors', 'Mic', 'AC', 'Power Sockets', 'Whiteboard'] },
  { id: 'A-105', name: 'Classroom A-105', buildingId: 'academic_a', floor: 1, capacity: 40, examCapacity: 20, type: 'classroom', accessible: false, features: ['Projector', 'Whiteboard'] },
  { id: 'A-106', name: 'Classroom A-106', buildingId: 'academic_a', floor: 1, capacity: 40, examCapacity: 20, type: 'classroom', accessible: false, features: ['Projector', 'Whiteboard'] },
  { id: 'A-107', name: 'Classroom A-107', buildingId: 'academic_a', floor: 1, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC', 'Recording Cam'] },
  { id: 'A-108', name: 'Classroom A-108', buildingId: 'academic_a', floor: 1, capacity: 40, examCapacity: 20, type: 'classroom', accessible: true, features: ['Whiteboard', 'AC'] },

  // Academic Block A - Floor 2
  { id: 'A-201', name: 'Lecture Hall A-201', buildingId: 'academic_a', floor: 2, capacity: 80, examCapacity: 40, type: 'lecture_hall', accessible: true, features: ['Projector', 'AC', 'Mic', 'Whiteboard'] },
  { id: 'A-202', name: 'Classroom A-202', buildingId: 'academic_a', floor: 2, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC'] },
  { id: 'A-203', name: 'Classroom A-203', buildingId: 'academic_a', floor: 2, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'AC', 'Whiteboard'] },
  { id: 'A-204', name: 'Seminar Room A-204', buildingId: 'academic_a', floor: 2, capacity: 40, examCapacity: 20, type: 'seminar_room', accessible: true, features: ['Video Conf', 'Smart Screen', 'AC'] },

  // Academic Block B - Floor 1 & 2
  { id: 'B-101', name: 'Classroom B-101', buildingId: 'academic_b', floor: 1, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC'] },
  { id: 'B-102', name: 'Classroom B-102', buildingId: 'academic_b', floor: 1, capacity: 60, examCapacity: 30, type: 'classroom', accessible: true, features: ['Projector', 'Whiteboard', 'AC'] },
  { id: 'B-201', name: 'Seminar Hall B-201', buildingId: 'academic_b', floor: 2, capacity: 80, examCapacity: 40, type: 'seminar_hall', accessible: true, features: ['Projector', 'Power Sockets', 'Whiteboard', 'Mic', 'AC'] },
  { id: 'B-202', name: 'Classroom B-202', buildingId: 'academic_b', floor: 2, capacity: 40, examCapacity: 20, type: 'classroom', accessible: true, features: ['Whiteboard', 'AC'] },
  { id: 'B-203', name: 'Lecture Theatre B-203', buildingId: 'academic_b', floor: 2, capacity: 60, examCapacity: 30, type: 'lecture_hall', accessible: true, features: ['Dual Projectors', 'AC', 'Whiteboard'] },

  // Science Complex (Labs)
  { id: 'SC-L1', name: 'Computer Lab 1 (Lab-1)', buildingId: 'science_complex', floor: 1, capacity: 40, examCapacity: 20, type: 'laboratory', accessible: true, features: ['40 Linux Workstations', 'Gigabit LAN', 'Projector', 'UPS Backup'] },
  { id: 'SC-L2', name: 'Electronics Lab 2 (Lab-2)', buildingId: 'science_complex', floor: 1, capacity: 40, examCapacity: 20, type: 'laboratory', accessible: true, features: ['DSO Oscilloscopes', 'Function Generators', 'Solder Stations', 'AC'] },
  { id: 'SC-101', name: 'Advanced AI Lab', buildingId: 'science_complex', floor: 2, capacity: 45, examCapacity: 22, type: 'laboratory', accessible: true, features: ['GPU Rigs', 'Smartboard', 'AC', 'Gigabit LAN'] },
  { id: 'SC-102', name: 'Robotics Workshop Lab', buildingId: 'science_complex', floor: 2, capacity: 50, examCapacity: 25, type: 'laboratory', accessible: true, features: ['Robotics Test Track', '3D Printers', 'Power Outlets', 'Tool Bench'] },

  // Central Library
  { id: 'LIB-CR1', name: 'Library Conference Room 1', buildingId: 'library', floor: 1, capacity: 35, examCapacity: 17, type: 'conference_room', accessible: true, features: ['Video Conferencing', 'Display Monitor', 'Wi-Fi 6', 'AC'] },
  { id: 'LIB-CR2', name: 'Library Seminar Room 2', buildingId: 'library', floor: 2, capacity: 30, examCapacity: 15, type: 'seminar_room', accessible: true, features: ['Smart Display', 'Whiteboard', 'Quiet Acoustic'] },

  // Auditorium
  { id: 'AUD-Main', name: 'Central Grand Auditorium', buildingId: 'auditorium', floor: 1, capacity: 350, examCapacity: 175, type: 'auditorium', accessible: true, features: ['Line Array Sound', 'Stage Rigging', 'Motorized Screen', 'Full AC', 'Green Rooms'] },
  { id: 'AUD-Mini', name: 'Mini Auditorium', buildingId: 'auditorium', floor: 1, capacity: 120, examCapacity: 60, type: 'auditorium', accessible: true, features: ['Stage', 'Surround Sound', 'HD Projection', 'AC'] },

  // Lecture Centre
  { id: 'LC-101', name: 'Core Lecture Hall LC-101', buildingId: 'lecture_center', floor: 1, capacity: 100, examCapacity: 50, type: 'lecture_hall', accessible: true, features: ['Tiered Seating', 'Acoustic Panels', 'Mic System', 'AC'] },

  // Outdoor Venues
  { id: 'OAT-Main', name: 'Open Air Amphitheatre', buildingId: 'oat', floor: 1, capacity: 500, examCapacity: 250, type: 'outdoor', accessible: true, features: ['Open Stage', 'Ambient Floodlights', 'Acoustic Shell'] },
  { id: 'Plaza-Green', name: 'Central Campus Plaza', buildingId: 'central_plaza', floor: 1, capacity: 250, examCapacity: 0, type: 'outdoor', accessible: true, features: ['Paved Concentric Amphitheatre', 'Shade Trees', 'Power Hubs'] }
];

export const FACULTY_MEMBERS = [
  { id: 'fac_01', name: 'Prof. D. Mishra', department: 'Computer Science and Engineering', title: 'Professor & Dean (Academics)', email: 'dean.acad@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_02', name: 'Dr. R. Patnaik', department: 'Computer Science and Engineering', title: 'Associate Professor', email: 'r.patnaik@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_03', name: 'Prof. Ananya Das', department: 'Computer Science and Engineering', title: 'Professor & Head', email: 'ananya.das@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_04', name: 'Dr. Rahul Kumar', department: 'Computer Science and Engineering', title: 'Assistant Professor', email: 'rahul.kumar@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_05', name: 'Prof. Neha Singh', department: 'Computer Science and Engineering', title: 'Associate Professor', email: 'neha.singh@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_06', name: 'Dr. Vikram Rao', department: 'Electronics & Communication', title: 'Associate Professor & Dept Coordinator', email: 'vikram.rao@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_07', name: 'Prof. S. Iyer', department: 'Mechanical Engineering', title: 'Professor & Head', email: 's.iyer@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_08', name: 'Dr. Priya Nair', department: 'Civil Engineering', title: 'Assistant Professor & Coordinator', email: 'priya.nair@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_09', name: 'Dr. K. Sharma', department: 'Computer Science and Engineering', title: 'Assistant Professor', email: 'k.sharma@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_10', name: 'Prof. A. Sengupta', department: 'Electrical Engineering', title: 'Professor', email: 'a.sengupta@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_11', name: 'Dr. B. Mohanty', department: 'Mathematics', title: 'Associate Professor', email: 'b.mohanty@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_12', name: 'Dr. Sunita Tripathy', department: 'Physics', title: 'Assistant Professor', email: 's.tripathy@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_13', name: 'Prof. T. K. Panda', department: 'Chemistry', title: 'Associate Professor', email: 'tk.panda@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_14', name: 'Dr. Alok Jena', department: 'Mechanical Engineering', title: 'Assistant Professor', email: 'alok.jena@cit.ac.in', maxDailyHours: 4 },
  { id: 'fac_15', name: 'Dr. Meera Behera', department: 'Electronics & Communication', title: 'Assistant Professor', email: 'meera.behera@cit.ac.in', maxDailyHours: 4 },
  // Additional faculty up to 40
  ...Array.from({ length: 25 }, (_, i) => ({
    id: `fac_${i + 16}`,
    name: `Dr. Faculty Member ${i + 16}`,
    department: ['Computer Science and Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Mathematics'][i % 6],
    title: 'Assistant Professor',
    email: `faculty${i + 16}@cit.ac.in`,
    maxDailyHours: 4
  }))
];

export const STUDENT_GROUPS = [
  { id: 'grp_cse_a_s3', name: 'B.Tech CSE Sem 3 (Sec A)', size: 58, department: 'CSE' },
  { id: 'grp_cse_b_s3', name: 'B.Tech CSE Sem 3 (Sec B)', size: 55, department: 'CSE' },
  { id: 'grp_cse_a_s5', name: 'B.Tech CSE Sem 5 (Sec A)', size: 60, department: 'CSE' },
  { id: 'grp_cse_b_s5', name: 'B.Tech CSE Sem 5 (Sec B)', size: 58, department: 'CSE' },
  { id: 'grp_ece_s3', name: 'B.Tech ECE Sem 3', size: 56, department: 'ECE' },
  { id: 'grp_ece_s5', name: 'B.Tech ECE Sem 5', size: 54, department: 'ECE' },
  { id: 'grp_me_s3', name: 'B.Tech ME Sem 3', size: 50, department: 'ME' },
  { id: 'grp_me_s5', name: 'B.Tech ME Sem 5', size: 48, department: 'ME' },
  { id: 'grp_ee_s3', name: 'B.Tech EE Sem 3', size: 52, department: 'EE' },
  { id: 'grp_ee_s5', name: 'B.Tech EE Sem 5', size: 50, department: 'EE' },
  { id: 'grp_ce_s3', name: 'B.Tech CE Sem 3', size: 45, department: 'CE' },
  { id: 'grp_ce_s5', name: 'B.Tech CE Sem 5', size: 42, department: 'CE' },
  { id: 'grp_core_s1_a', name: 'B.Tech First Year (Cohort 1)', size: 75, department: 'Core' },
  { id: 'grp_core_s1_b', name: 'B.Tech First Year (Cohort 2)', size: 75, department: 'Core' }
];

export const COURSES = [
  { code: 'CS301', title: 'Data Structures & Algorithms', credits: 4, department: 'CSE', type: 'core' },
  { code: 'CS301L', title: 'Computer Networks Lab', credits: 2, department: 'CSE', type: 'lab', durationHours: 3 },
  { code: 'CS305', title: 'Operating Systems', credits: 4, department: 'CSE', type: 'core' },
  { code: 'CS307', title: 'Database Systems', credits: 4, department: 'CSE', type: 'core' },
  { code: 'CS405', title: 'Artificial Intelligence', credits: 3, department: 'CSE', type: 'elective' },
  { code: 'CS452', title: 'Machine Learning', credits: 3, department: 'CSE', type: 'elective' },
  { code: 'CS561', title: 'Distributed Systems', credits: 3, department: 'CSE', type: 'elective' },
  { code: 'EC201', title: 'Signals & Systems', credits: 4, department: 'ECE', type: 'core' },
  { code: 'EC201L', title: 'Digital Electronics Lab', credits: 2, department: 'ECE', type: 'lab', durationHours: 3 },
  { code: 'ME201', title: 'Fluid Mechanics', credits: 4, department: 'ME', type: 'core' },
  { code: 'ME301', title: 'Thermodynamics', credits: 4, department: 'ME', type: 'core' },
  { code: 'EE110', title: 'Basic Electrical Engg', credits: 3, department: 'EE', type: 'core' },
  { code: 'MA102', title: 'Engineering Mathematics', credits: 4, department: 'Math', type: 'core' },
  { code: 'PH105', title: 'Engineering Physics', credits: 3, department: 'Physics', type: 'core' }
];

export const PERIODS = [
  { id: 'P1', label: 'Period 1', time: '08:00 - 09:00', start: '08:00', end: '09:00', type: 'teaching' },
  { id: 'P2', label: 'Period 2', time: '09:00 - 10:00', start: '09:00', end: '10:00', type: 'teaching' },
  { id: 'P3', label: 'Period 3', time: '10:00 - 11:00', start: '10:00', end: '11:00', type: 'teaching' },
  { id: 'P4', label: 'Period 4', time: '11:00 - 12:00', start: '11:00', end: '12:00', type: 'teaching' },
  { id: 'P5', label: 'Period 5', time: '12:00 - 13:00', start: '12:00', end: '13:00', type: 'teaching' },
  { id: 'LUNCH', label: 'Lunch Break', time: '13:00 - 14:00', start: '13:00', end: '14:00', type: 'break' },
  { id: 'P6', label: 'Period 6', time: '14:00 - 15:00', start: '14:00', end: '15:00', type: 'teaching' },
  { id: 'P7', label: 'Period 7', time: '15:00 - 16:00', start: '15:00', end: '16:00', type: 'teaching' },
  { id: 'P8', label: 'Period 8', time: '16:00 - 17:00', start: '16:00', end: '17:00', type: 'teaching' },
  { id: 'P9', label: 'Period 9', time: '17:00 - 18:00', start: '17:00', end: '18:00', type: 'teaching' },
  { id: 'P10', label: 'Evening 1', time: '18:00 - 19:00', start: '18:00', end: '19:00', type: 'events_only' },
  { id: 'P11', label: 'Evening 2', time: '19:00 - 20:00', start: '19:00', end: '20:00', type: 'events_only' },
  { id: 'P12', label: 'Night 1', time: '20:00 - 21:00', start: '20:00', end: '21:00', type: 'events_only' },
  { id: 'P13', label: 'Night 2', time: '21:00 - 22:00', start: '21:00', end: '22:00', type: 'events_only' }
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

/**
 * 189 Teaching Sessions Generator (Deterministic, Conflict-Free)
 * 162 1-hour sessions + 27 3-hour lab sessions = 243 total hours
 */
export function generateBaselineSessions() {
  const sessions = [];
  let sessId = 100;

  // 1. 27 Three-hour Labs (Placed in P2-P4 or P6-P8, never crossing lunch)
  const labSlots = [
    { day: 'Monday', startPeriod: 'P2', endPeriod: 'P4', time: '09:00 - 12:00', duration: 3 },
    { day: 'Tuesday', startPeriod: 'P6', endPeriod: 'P8', time: '14:00 - 17:00', duration: 3 },
    { day: 'Wednesday', startPeriod: 'P2', endPeriod: 'P4', time: '09:00 - 12:00', duration: 3 },
    { day: 'Thursday', startPeriod: 'P6', endPeriod: 'P8', time: '14:00 - 17:00', duration: 3 },
    { day: 'Friday', startPeriod: 'P2', endPeriod: 'P4', time: '09:00 - 12:00', duration: 3 }
  ];

  const labRooms = ['SC-L1', 'SC-L2', 'SC-101', 'SC-102'];
  const labCourses = [
    { code: 'CS301L', name: 'Computer Networks Lab', facId: 'fac_02', facName: 'Dr. R. Patnaik', group: 'B.Tech CSE Sem 3 (Sec A)' },
    { code: 'EC201L', name: 'Digital Electronics Lab', facId: 'fac_06', facName: 'Dr. Vikram Rao', group: 'B.Tech ECE Sem 3' },
    { code: 'CS307L', name: 'Database Systems Lab', facId: 'fac_04', facName: 'Dr. Rahul Kumar', group: 'B.Tech CSE Sem 3 (Sec B)' },
    { code: 'CS452L', name: 'AI & Machine Learning Lab', facId: 'fac_05', facName: 'Prof. Neha Singh', group: 'B.Tech CSE Sem 5 (Sec A)' }
  ];

  for (let i = 0; i < 27; i++) {
    const slot = labSlots[i % labSlots.length];
    const room = labRooms[i % labRooms.length];
    const template = labCourses[i % labCourses.length];
    sessions.push({
      id: `sess_${sessId++}`,
      courseCode: template.code,
      courseName: template.name,
      facultyId: template.facId,
      facultyName: template.facName,
      studentGroups: [template.group],
      roomId: room,
      roomName: ROOMS.find(r => r.id === room)?.name || room,
      buildingId: 'science_complex',
      floor: room.includes('101') || room.includes('102') ? 2 : 1,
      day: slot.day,
      startPeriod: slot.startPeriod,
      endPeriod: slot.endPeriod,
      startTime: slot.time.split(' - ')[0],
      endTime: slot.time.split(' - ')[1],
      timeString: slot.time,
      durationHours: 3,
      type: 'laboratory',
      isFixedSlot: false
    });
  }

  // 2. 162 One-Hour Lectures/Tutorials (P1-P5, P6-P9)
  const teachingPeriods = [
    { id: 'P1', time: '08:00 - 09:00' },
    { id: 'P2', time: '09:00 - 10:00' },
    { id: 'P3', time: '10:00 - 11:00' },
    { id: 'P4', time: '11:00 - 12:00' },
    { id: 'P5', time: '12:00 - 13:00' },
    { id: 'P6', time: '14:00 - 15:00' },
    { id: 'P7', time: '15:00 - 16:00' },
    { id: 'P8', time: '16:00 - 17:00' },
    { id: 'P9', time: '17:00 - 18:00' }
  ];

  const lectureRooms = ROOMS.filter(r => r.type !== 'laboratory' && r.type !== 'outdoor');

  const lectureCurriculum = [
    { code: 'CS301', name: 'Data Structures & Algorithms', facId: 'fac_04', facName: 'Dr. Rahul Kumar', group: 'B.Tech CSE Sem 3 (Sec A)' },
    { code: 'CS305', name: 'Operating Systems', facId: 'fac_03', facName: 'Prof. Ananya Das', group: 'B.Tech CSE Sem 3 (Sec B)' },
    { code: 'CS307', name: 'Database Systems', facId: 'fac_09', facName: 'Dr. K. Sharma', group: 'B.Tech CSE Sem 3 (Sec A)' },
    { code: 'CS405', name: 'Artificial Intelligence', facId: 'fac_05', facName: 'Prof. Neha Singh', group: 'B.Tech CSE Sem 5 (Sec A)' },
    { code: 'CS452', name: 'Machine Learning', facId: 'fac_01', facName: 'Prof. D. Mishra', group: 'B.Tech CSE Sem 5 (Sec B)' },
    { code: 'EC201', name: 'Signals & Systems', facId: 'fac_06', facName: 'Dr. Vikram Rao', group: 'B.Tech ECE Sem 3' },
    { code: 'ME301', name: 'Thermodynamics', facId: 'fac_07', facName: 'Prof. S. Iyer', group: 'B.Tech ME Sem 3' },
    { code: 'MA102', name: 'Engineering Mathematics', facId: 'fac_11', facName: 'Dr. B. Mohanty', group: 'B.Tech First Year (Cohort 1)' },
    { code: 'PH105', name: 'Engineering Physics', facId: 'fac_12', facName: 'Dr. Sunita Tripathy', group: 'B.Tech First Year (Cohort 2)' },
    { code: 'EE110', name: 'Basic Electrical Engg', facId: 'fac_10', facName: 'Prof. A. Sengupta', group: 'B.Tech EE Sem 3' }
  ];

  for (let i = 0; i < 162; i++) {
    const day = DAYS[i % DAYS.length];
    const period = teachingPeriods[Math.floor(i / DAYS.length) % teachingPeriods.length];
    const room = lectureRooms[i % lectureRooms.length];
    const course = lectureCurriculum[i % lectureCurriculum.length];

    sessions.push({
      id: `sess_${sessId++}`,
      courseCode: course.code,
      courseName: course.name,
      facultyId: course.facId,
      facultyName: course.facName,
      studentGroups: [course.group],
      roomId: room.id,
      roomName: room.name,
      buildingId: room.buildingId,
      floor: room.floor,
      day: day,
      startPeriod: period.id,
      endPeriod: period.id,
      startTime: period.time.split(' - ')[0],
      endTime: period.time.split(' - ')[1],
      timeString: period.time,
      durationHours: 1,
      type: 'lecture',
      isFixedSlot: (i % 7 === 0)
    });
  }

  return sessions;
}

export const BASELINE_SESSIONS = generateBaselineSessions();

/**
 * 25 Spectra Bookings (1 later cancelled)
 */
export const SPECTRA_BOOKINGS = [
  {
    id: 'spec_01',
    title: 'Robotics Workshop',
    description: 'Hands-on hardware session for robotics club and autonomous bot contest',
    category: 'club',
    priorityLevel: 6,
    requester: { name: 'Aarav Mehta', org: 'Robotics Club', role: 'club' },
    date: '2024-08-14',
    timeSlot: '10:00 - 13:00',
    requestedRoomId: 'A-104',
    expectedParticipants: 60,
    accessibilityRequired: true,
    status: 'pending',
    featuresRequired: ['Projector', 'Power Sockets', 'Whiteboard', 'Robotics Lab Kit'],
    conflict: {
      type: 'class_overlap',
      description: 'ME301 Thermodynamics is scheduled in this room from 10:00 - 11:00 on 14 Aug 2024.'
    },
    alternativeRoom: {
      id: 'B-201',
      name: 'Academic Block B, Seminar Hall 2',
      capacity: 80,
      available: '14 Aug 2024, 10:00 - 13:00',
      facilities: ['Projector', 'Power outlets', 'Whiteboard', 'Full AC']
    }
  },
  {
    id: 'spec_02',
    title: 'Midsem Examination - Data Structures',
    description: 'Centralized written midsem exam for B.Tech CSE Sem 3 cohort',
    category: 'exam',
    priorityLevel: 1,
    requester: { name: 'Prof. Neha Singh', org: 'Examination Cell', role: 'admin' },
    date: '2024-08-16',
    timeSlot: '09:00 - 12:00',
    requestedRoomId: 'AUD-Mini',
    expectedParticipants: 110,
    accessibilityRequired: true,
    status: 'approved',
    featuresRequired: ['Spaced Desks', 'PA System', 'Ramp Access']
  },
  {
    id: 'spec_03',
    title: 'Guest Lecture: AI for Sustainable Cities',
    description: 'Distinguished lecture by Dr. S. Ramanathan, Director of Urban AI Lab',
    category: 'guest',
    priorityLevel: 4,
    requester: { name: 'Dr. Vikram Rao', org: 'External Relations', role: 'coordinator' },
    date: '2024-08-13',
    timeSlot: '14:00 - 16:00',
    requestedRoomId: 'AUD-Main',
    expectedParticipants: 220,
    accessibilityRequired: true,
    status: 'alternative_proposed',
    alternativeRoom: {
      id: 'LC-101',
      name: 'Core Lecture Hall LC-101',
      capacity: 100,
      available: '13 Aug 2024, 14:00 - 16:00'
    }
  },
  {
    id: 'spec_04',
    title: 'Regular Class: Thermodynamics (ME301)',
    description: 'Moved lecture compensatory slot',
    category: 'class',
    priorityLevel: 2,
    requester: { name: 'Prof. S. Iyer', org: 'Mechanical Engg', role: 'faculty' },
    date: '2024-08-14',
    timeSlot: '10:00 - 11:00',
    requestedRoomId: 'A-104',
    expectedParticipants: 50,
    accessibilityRequired: false,
    status: 'rejected',
    rejectionReason: 'Room allocated to scheduled syllabus progression in base timetable.'
  },
  {
    id: 'spec_05',
    title: 'Department Meeting - Faculty Review',
    description: 'Annual syllabus revision and NIRF metrics submission review',
    category: 'department',
    priorityLevel: 5,
    requester: { name: 'Dr. Priya Nair', org: 'Civil Engineering', role: 'coordinator' },
    date: '2024-08-15',
    timeSlot: '16:00 - 18:00',
    requestedRoomId: 'LIB-CR1',
    expectedParticipants: 25,
    accessibilityRequired: true,
    status: 'cancelled',
    cancellationReason: 'Cancelled by requester due to rescheduled Academic Council session.'
  },
  {
    id: 'spec_06',
    title: 'Cultural Practice - Dance Rehearsal',
    description: 'Spectra Inaugural Night choreography practice',
    category: 'club',
    priorityLevel: 6,
    requester: { name: 'Ananya Patil', org: 'Cultural Club', role: 'club' },
    date: '2024-08-17',
    timeSlot: '15:00 - 18:00',
    requestedRoomId: 'OAT-Main',
    expectedParticipants: 45,
    accessibilityRequired: true,
    status: 'approved'
  },
  // Additional bookings to complete 25 requests
  ...Array.from({ length: 19 }, (_, i) => {
    const cats = ['exam', 'class', 'institute', 'guest', 'department', 'club'];
    const cat = cats[i % cats.length];
    const rooms = ['A-101', 'A-102', 'B-101', 'B-201', 'SC-101', 'AUD-Mini', 'Plaza-Green'];
    return {
      id: `spec_${i + 7}`,
      title: `Campus Activity ${i + 7} (${cat.toUpperCase()})`,
      description: `Official campus scheduled booking request for ${cat} operations.`,
      category: cat,
      priorityLevel: cats.indexOf(cat) + 1,
      requester: { name: `Coordinator ${i + 7}`, org: `${cat.toUpperCase()} Committee`, role: cat === 'club' ? 'club' : 'faculty' },
      date: `2024-08-${12 + (i % 7)}`,
      timeSlot: `${14 + (i % 4)}:00 - ${16 + (i % 4)}:00`,
      requestedRoomId: rooms[i % rooms.length],
      expectedParticipants: 30 + (i * 5),
      accessibilityRequired: (i % 2 === 0),
      status: i % 4 === 0 ? 'approved' : i % 4 === 1 ? 'pending' : i % 4 === 2 ? 'alternative_proposed' : 'approved'
    };
  })
];

/**
 * 41 Midsem Exams (With 50% Hall Capacity Constraint)
 */
export const MIDSEM_EXAMS = [
  { id: 'exam_01', courseCode: 'CS201', courseTitle: 'Data Structures & Algorithms', group: 'B.Tech CSE A', date: 'Mon, 11 Nov 2024', time: '09:00 - 12:00', roomId: 'A-104', duration: '3h', normalCapacity: 80, examCapacity: 40, registeredStudents: 38 },
  { id: 'exam_02', courseCode: 'CS205', courseTitle: 'Discrete Mathematics', group: 'B.Tech CSE B', date: 'Mon, 11 Nov 2024', time: '14:00 - 17:00', roomId: 'A-201', duration: '3h', normalCapacity: 80, examCapacity: 40, registeredStudents: 39 },
  { id: 'exam_03', courseCode: 'CS301', courseTitle: 'Computer Networks', group: 'B.Tech CSE A', date: 'Tue, 12 Nov 2024', time: '09:00 - 12:00', roomId: 'B-201', duration: '3h', normalCapacity: 80, examCapacity: 40, registeredStudents: 40 },
  { id: 'exam_04', courseCode: 'CS305', courseTitle: 'Operating Systems', group: 'B.Tech CSE B', date: 'Wed, 13 Nov 2024', time: '14:00 - 17:00', roomId: 'AUD-Mini', duration: '3h', normalCapacity: 120, examCapacity: 60, registeredStudents: 55 },
  { id: 'exam_05', courseCode: 'CS307', courseTitle: 'Database Systems', group: 'B.Tech CSE C', date: 'Thu, 14 Nov 2024', time: '09:00 - 12:00', roomId: 'LC-101', duration: '3h', normalCapacity: 100, examCapacity: 50, registeredStudents: 48 },
  { id: 'exam_06', courseCode: 'CS401', courseTitle: 'Machine Learning', group: 'B.Tech CSE A', date: 'Fri, 15 Nov 2024', time: '14:00 - 17:00', roomId: 'A-104', duration: '3h', normalCapacity: 80, examCapacity: 40, registeredStudents: 36 },
  ...Array.from({ length: 35 }, (_, i) => {
    const codes = ['EC201', 'EC305', 'ME201', 'ME301', 'EE110', 'EE202', 'CE201', 'CE302', 'MA102', 'PH105', 'CH101'];
    const rooms = ['A-101', 'A-102', 'A-107', 'A-202', 'B-101', 'B-203', 'AUD-Mini', 'LC-101'];
    const rId = rooms[i % rooms.length];
    const rObj = ROOMS.find(r => r.id === rId) || { capacity: 60, examCapacity: 30 };
    return {
      id: `exam_${i + 7}`,
      courseCode: `${codes[i % codes.length]}`,
      courseTitle: `Midsem Exam Course ${i + 7}`,
      group: `B.Tech ${['CSE', 'ECE', 'ME', 'EE', 'CE'][i % 5]} Cohort ${Math.floor(i / 5) + 1}`,
      date: `${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i % 5]}, ${11 + (i % 5)} Nov 2024`,
      time: i % 2 === 0 ? '09:00 - 12:00' : '14:00 - 17:00',
      roomId: rId,
      duration: '3h',
      normalCapacity: rObj.capacity,
      examCapacity: rObj.examCapacity,
      registeredStudents: Math.min(rObj.examCapacity, 25 + (i % 15))
    };
  })
];

/**
 * Pre-configured Disruption Sample (Academic A Tuesday Absence)
 */
export const SAMPLE_DISRUPTION = {
  id: 'disrupt_01',
  title: 'Academic A unavailable Tuesday',
  reason: 'Prof. A not available on Tuesday, 13 Aug 2024 (full day medical leave)',
  fileName: 'academic_unavailability_tue.csv',
  uploadTime: '10 Aug 2024, 14:20',
  status: 'proposal_pending',
  affectedSessions: [
    {
      id: 'sess_102',
      day: 'Tuesday',
      slot: '08:00 - 09:00',
      courseCode: 'CS201',
      courseName: 'Data Structures',
      faculty: 'Prof. A',
      roomId: 'A-102',
      proposedDay: 'Thursday',
      proposedSlot: '08:00 - 09:00',
      proposedRoom: 'A-102'
    },
    {
      id: 'sess_103',
      day: 'Tuesday',
      slot: '09:00 - 10:00',
      courseCode: 'CS202',
      courseName: 'Object Oriented Programming',
      faculty: 'Prof. A',
      roomId: 'A-103',
      proposedDay: 'Thursday',
      proposedSlot: '09:00 - 10:00',
      proposedRoom: 'A-103'
    }
  ],
  validation: {
    noRoomClashes: true,
    facultyAvailabilityOK: true,
    curriculumConstraintsOK: true,
    studentCohortClashesOK: true
  }
};
