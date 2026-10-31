# CITRIX Contract Gaps & Mock Adapter Log

This document records requirements where the official API contract (`docs/api-contract.md`) lacks endpoints needed by the frontend application for CrunchWeek. Per project rules, these endpoints are documented here for the backend engineering team and implemented via a consistent client-side Mock Adapter with shared state and labeled "Demo data" in the UI.

---

## 1. Disruption & Timetable Repair

### Gap 1.1: Upload Disruption File & Identify Affected Sessions
- **Endpoint needed:** `POST /api/v1/disruptions/upload`
- **Frontend Need:** Admin/Faculty uploads `sample_disruption.json` or reports teacher absence / room maintenance (e.g., "Prof. A not available on Tuesday, 13 Aug 2024"). The system must return affected sessions.
- **Mock Adapter Behavior:** Parses uploaded JSON or form parameters, finds conflicting sessions in active timetable, and flags them with before/after state.

### Gap 1.2: Generate Minimal-Change Repair Proposal
- **Endpoint needed:** `POST /api/v1/disruptions/repair`
- **Frontend Need:** Generates a minimal-perturbation schedule repair proposal with revalidation checks, moved session count, and hard constraint validation.
- **Mock Adapter Behavior:** Generates side-by-side Before/Proposed timetable diff with independent Admin approval requirement.

### Gap 1.3: Apply Timetable Repair
- **Endpoint needed:** `POST /api/v1/disruptions/:id/apply`
- **Frontend Need:** Applies the approved repair proposal to the active schedule. Requires independent Admin approval (no self-approval).

---

## 2. What-If Simulation for Dean's Command Center

### Gap 2.1: What-If Impact Analysis
- **Endpoint needed:** `POST /api/v1/simulation/what-if`
- **Frontend Need:** Dean selects a scenario (e.g. "Close Academic Block A tomorrow" or "Shift Department sessions to afternoon") and requests backend impact analysis.
- **Mock Adapter Behavior:** Evaluates room reassignments, returns displaced sessions, suggested alternatives, and capacity impact. Explicitly labeled "Demo preview / simulation".

---

## 3. Department Coordinator & Club Operations

### Gap 3.1: Coordinator Overview
- **Endpoint needed:** `GET /api/v1/dashboard/coordinator`
- **Frontend Need:** Department Timetable, Lab Requests, Coordinator Approval Queue (badge 4), Faculty Load for CSE/ECE/etc.

### Gap 3.2: Club Workspace Overview
- **Endpoint needed:** `GET /api/v1/dashboard/club`
- **Frontend Need:** Club-specific venue requests, approval status, alternative proposals, and cancellation handling.

---

## 4. Admin Management & Dataset Controls

### Gap 4.1: Dataset Upload & Inspection
- **Endpoint needed:** `POST /api/v1/admin/dataset/upload`
- **Frontend Need:** Upload `cit_public.json`, parse validation issues, display summary counts (12 departments, 428 courses, 186 faculty, 96 rooms, 124 student sections, etc.).

### Gap 4.2: Official Schedule Exports
- **Endpoint needed:** `GET /api/v1/admin/export/schedule` and `GET /api/v1/admin/export/schedule-after`
- **Frontend Need:** Exports official JSON schedules conforming to `exports/schedule.json` and `exports/schedule_after.json`.

### Gap 4.3: Reset Demo State
- **Endpoint needed:** `POST /api/v1/admin/reset`
- **Frontend Need:** Restores default mock/demo dataset state with confirmation modal.
