# CITRIX API Contract (v1)

This document specifies the official API contract between the CITRIX Frontend and Backend services for Chilika Institute of Technology (CIT).

## Base URL
`/api/v1`

---

## 1. Authentication & Identity

### `POST /api/v1/auth/login`
Authenticates a user account. Permissions are derived strictly from the backend account record, not from the requested UI context.

**Request Body:**
```json
{
  "username": "string",
  "password": "string",
  "role_context": "dean" | "admin" | "coordinator" | "faculty" | "club"
}
```

**Response (200 OK):**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "dean" | "admin" | "coordinator" | "faculty" | "club",
    "department": "string",
    "permissions": ["string"]
  }
}
```

### `GET /api/v1/auth/me`
Returns current session identity, assigned role, and permissions.

**Headers:**
`Authorization: Bearer <token>`

**Response (200 OK):**
```json
{
  "id": "string",
  "name": "string",
  "role": "dean" | "admin" | "coordinator" | "faculty" | "club",
  "department": "string",
  "permissions": ["string"]
}
```

---

## 2. Institutional & Role Dashboards

### `GET /api/v1/dashboard/dean`
Returns the institution-wide command center metrics, occupancy breakdown, active conflicts, pending approvals, and AI insights.

**Query Parameters:**
- `date`: `YYYY-MM-DD` (e.g., `2024-08-12`)
- `view_mode`: `day` | `week`

**Response (200 OK):**
```json
{
  "summary": {
    "total_rooms": 27,
    "total_sessions": 189,
    "total_faculty": 40,
    "pending_approvals": 5
  },
  "building_occupancy": [
    {
      "building_id": "academic_a",
      "name": "Academic Block A",
      "sessions_count": 12,
      "status": "normal",
      "hourly_occupancy": [0.2, 0.5, 0.8, 0.9, 0.4, 0.0, 0.7, 0.8, 0.6, 0.3]
    }
  ],
  "departmental_availability": [
    {
      "department": "CSE",
      "rooms_available": 3,
      "total_rooms": 6,
      "upcoming_sessions": 12
    }
  ],
  "critical_conflicts": [
    {
      "id": "conf_01",
      "room_id": "A-101",
      "time": "10:00 - 11:00",
      "date": "2024-08-12",
      "severity": "high",
      "description": "Room conflict detected between CS201 and Math workshop"
    }
  ],
  "pending_approvals": [
    {
      "id": "appr_01",
      "type": "room_booking",
      "requester": "Aarav Mehta",
      "role": "club",
      "details": "Robotics workshop, A-104, 14 Aug 10:00-13:00",
      "status": "pending",
      "can_approve": true
    }
  ],
  "ai_insights": [
    "CSE has the highest room demand next week.",
    "2 room conflicts require Dean/Admin intervention.",
    "Library and Science Complex have available slots during peak hours (10:00 - 12:00)."
  ]
}
```

### `GET /api/v1/dashboard/faculty`
Returns faculty-specific daily schedule, current building class locations, quick actions, and personal timetable.

**Response (200 OK):**
```json
{
  "faculty_id": "string",
  "faculty_name": "string",
  "department": "CSE",
  "date": "2024-08-12",
  "today_classes": [
    {
      "session_id": "sess_01",
      "course_code": "CS301",
      "course_title": "Data Structures",
      "time": "09:00 - 10:00",
      "room": "LT-1",
      "building": "Academic Block A",
      "floor": 1,
      "student_group": "B.Tech CSE Sem 3",
      "status": "completed" | "current" | "upcoming"
    }
  ]
}
```

---

## 3. Campus & Rooms

### `GET /api/v1/rooms`
List of all 27 rooms with canonical capacities, types, accessibility, and features.

**Query Parameters:**
- `date`: `YYYY-MM-DD`
- `start_period`: `P1` - `P13`
- `end_period`: `P1` - `P13`
- `building`: `string` (optional filter)
- `type`: `classroom` | `lab` | `seminar_hall` | `auditorium` (optional filter)
- `accessible_only`: `boolean` (optional)

**Response (200 OK):**
```json
[
  {
    "id": "A-101",
    "name": "Lecture Hall A-101",
    "building_id": "academic_a",
    "floor": 1,
    "capacity": 60,
    "effective_exam_capacity": 30,
    "type": "classroom",
    "step_free_access": true,
    "features": ["Projector", "AC", "Whiteboard", "Mic"],
    "current_status": "available" | "occupied" | "pending" | "maintenance" | "unknown",
    "next_activity": {
      "course_code": "CS301",
      "time": "14:00 - 15:00",
      "faculty": "Prof. K. Sharma"
    }
  }
]
```

---

## 4. Timetable Management

### `GET /api/v1/timetable`
Retrieves weekly or daily timetable filtered by faculty, student group, or room perspective.

**Query Parameters:**
- `perspective`: `faculty` | `group` | `room`
- `id`: `string` (faculty_id, group_id, or room_id)
- `week`: `string` (e.g., `2024-W33`)

**Response (200 OK):**
```json
{
  "week": "2024-W33",
  "perspective": "faculty",
  "target_id": "prof_patnaik",
  "sessions": [
    {
      "id": "sess_101",
      "course_code": "CS301",
      "course_name": "Computer Networks Lab",
      "faculty_id": "prof_patnaik",
      "faculty_name": "Dr. R. Patnaik",
      "student_groups": ["B.Tech CSE A"],
      "room_id": "Lab-1",
      "room_name": "Computer Lab 1",
      "day": "Monday",
      "start_time": "09:00",
      "end_time": "12:00",
      "periods": ["P2", "P3", "P4"],
      "duration_hours": 3,
      "type": "lab",
      "is_fixed_slot": false
    }
  ]
}
```

### `POST /api/v1/timetable/generate`
Triggers timetable solver execution for the active semester.

**Response (200 OK):**
```json
{
  "job_id": "gen_8921",
  "status": "completed" | "in_progress" | "failed",
  "scheduled_sessions": 189,
  "unscheduled_sessions": 0,
  "hard_violations": 0,
  "soft_penalty": 42.5,
  "solver_time_ms": 1420
}
```

---

## 5. Spectra & Booking Requests

### `GET /api/v1/bookings`
List of booking requests with category priority, validation conflicts, and status.

**Response (200 OK):**
```json
[
  {
    "id": "req_01",
    "title": "Robotics workshop",
    "description": "Hands-on session for robotics club",
    "category": "club",
    "priority_level": 6,
    "requester": {
      "id": "usr_aarav",
      "name": "Aarav Mehta",
      "organization": "Robotics Club"
    },
    "date": "2024-08-14",
    "time_slot": "10:00 - 13:00",
    "periods": ["P3", "P4", "P5"],
    "room_id": "A-104",
    "status": "pending" | "approved" | "rejected" | "alternative_proposed" | "cancelled",
    "expected_participants": 60,
    "accessibility_required": true,
    "conflicts": [
      {
        "conflict_type": "class_overlap",
        "description": "ME301 Thermodynamics is scheduled in this room from 10:00 - 11:00 on 14 Aug 2024."
      }
    ],
    "alternative_rooms": [
      {
        "room_id": "B-201",
        "name": "Academic Block B, Seminar Hall 2",
        "capacity": 80,
        "features": ["Projector", "Power outlets", "Whiteboard"]
      }
    ]
  }
]
```

### `POST /api/v1/bookings`
Submits a structured booking request.

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "category": "club" | "department" | "guest" | "institute" | "exam",
  "date": "YYYY-MM-DD",
  "start_time": "HH:MM",
  "end_time": "HH:MM",
  "room_id": "string",
  "expected_participants": 60,
  "accessibility_required": true,
  "features_required": ["Projector", "AC"]
}
```

### `POST /api/v1/bookings/:id/decision`
Approve, reject, or propose alternative for a pending booking. Self-approval is strictly forbidden.

**Request Body:**
```json
{
  "decision": "approve" | "reject" | "propose_alternative",
  "reason": "string",
  "alternative_room_id": "string"
}
```

---

## 6. Midsem Exams

### `GET /api/v1/exams`
Returns the 41 scheduled midsem exams with course codes, allocated halls, exam capacities, and dates.

### `POST /api/v1/exams/generate`
Generates optimal exam hall allocations respecting the 50% capacity rule and no student exam overlap.

---

## 7. AI Assistant

### `POST /api/v1/assistant/chat`
Conversational interface supporting English and Hinglish inquiries, slot recommendations, and request formulation.

**Request Body:**
```json
{
  "message": "string",
  "history": [
    { "role": "user" | "assistant", "content": "string" }
  ],
  "context": {
    "user_id": "string",
    "role": "faculty",
    "current_date": "2024-08-12"
  }
}
```

**Response (200 OK):**
```json
{
  "response": "string",
  "intent": "move_class" | "find_room" | "check_conflict" | "explain_schedule",
  "structured_proposal": { ... },
  "clarification_needed": false
}
```

---

## 8. Resource Analytics

### `GET /api/v1/analytics/resources`
Occupancy statistics, department-wise classroom utilization, and underutilized resources.
