# CITRIX: Master Production Prompt for AI Coding Agents
**Target Engines:** Google Antigravity, Cursor, Windsurf, Claude Code  
**System:** CITRIX · Intelligent Campus Scheduling & Interactive 3D Spatial Twin  
**Institution:** Chilika Institute of Technology (CIT)  

---

```markdown
You are an expert principal frontend engineer building CITRIX, an enterprise-grade intelligent campus scheduling and venue-management platform for Chilika Institute of Technology (CIT). 

DO NOT generate a generic landing page, a static dashboard template, or a simplistic chatbot. Build a production-grade, highly responsive web application featuring an interactive 3D spatial twin of the campus as its signature experience.

### 1. Architectural & Engineering Rules
1. **Stack:** Vanilla JavaScript / React + Vite, Tailwind CSS, Three.js with OrbitControls (or React Three Fiber + @react-three/drei), Lucide SVG icons. JavaScript only, no TypeScript.
2. **Design Language:** Enterprise command-center aesthetic. Deep navy foundation (`#0B132B`, `#070D1F`), architectural stone neutrals, restrained emerald (`#10B981`) and teal (`#007A64`) accents. Avoid excessive neon, glassmorphism, decorative gradient text, or generic AI-dashboard aesthetics.
3. **Data Integrity:** Honest data models matching the official dataset. Never display fabricated live metrics or fake percentages. No dummy buttons without real state handlers. All totals are derived dynamically from loaded state.
4. **Self-Approval Integrity Rule:** Strictly enforce institutional access control: "Nobody may approve their own request, including Admin and Dean." If a user views their own submission in an approval queue, label it "Your request" and disable approve/reject actions.

---

### 2. Signature 3D Campus Odyssey (WebGL Canvas)
Build real interactive 3D geometry using Three.js matching the official aerial isometric composition:
- **Spatial Campus Layout:**
  - 6 petal-like oval academic buildings (Academic Block A, Academic Block B, Science Complex, Library, Auditorium, Lecture Centre) arranged in an elevated arc.
  - Central circular amphitheatre with concentric stone tiers, radiating paved walkways, landscaped courtyards, trees, and reflection pools.
- **Lighting & Shadows:** Restrained directional sunlight casting soft isometric shadows (`1024 PCFSoftShadowMap`) and soft sky hemispheric ambient fill.
- **Navigation & Damping:**
  - Damped camera transitions (600–900ms) with raycast hover lift and floating HUD tags over buildings (e.g. `Academic Block A · 12 sessions`).
  - Keyboard cycling (← / → arrow keys cycle buildings smoothly; Enter opens building focus).
  - OrbitControls with pan, pitch, and zoom constraints.
- **Exploded Floor View:** When a building is selected, separate Floor 1, Floor 2, and the roof vertically along the Y-axis.
- **2D Fallback:** Instant accessible fallback toggle to a 2D campus map and list view for low-power devices.

---

### 3. Step-by-Step User Journey & Screen Flows

#### Screen 1: Dual-Pane Login & 3D Campus Overview
- **Top Half:** Live interactive 3D campus canvas showing the complete university layout.
- **Bottom Half:** Profile selector cards representing official Point 4 roles:
  1. `Prof. Ananya Das` (Faculty · CSE) — Scheduled in Academic Block A (LT-1, LT-3) & Block B (LT-2).
  2. `Dr. R. Patnaik` (Faculty · CSE) — Scheduled in Science Complex (Lab 1) & Academic Block A.
  3. `Prof. D. Mishra` (Dean · Academics) — Institution-wide Command Center.
  4. `Dr. Vikram Rao` (Department Coordinator · ECE) — Academic Block B.
  5. `Aarav Mehta` (Club Representative · Robotics Club) — Central Plaza & OAT.
  6. `Admin User` (Academic Administration / Dean's Office).

#### Screen 2: Personalized Faculty Campus Explorer & Venue Booking
When a professor logs in:
1. **Highlight Scheduled Building:** The 3D campus immediately highlights the building where they have teaching commitments (e.g., Academic Block A highlighted in blue/cyan).
2. **Same-Building Optimization Banner:** Display: *"Previous class: 14:00 – 15:00 in Academic Block A (Room A-102). Since taking consecutive sessions in the same building eliminates walking fatigue, Academic Block A has been automatically focused."* with a checked `[x] Prefer previous building` option.
3. **Top View & Floor Selection Prompt:** When Building A is selected, transition to top view and explicitly ask: **"Choose Floor: Floor 1 (Ground) or Floor 2 (Upper)?"**
4. **Natural Language Request Composer:** Provide a prompt box pre-filled with or allowing:
   *"Kal 3 se 5 robotics workshop ke liye 60 logon ka accessible room chahiye."*
   Extract: Date (2 Nov 2026), Time (15:00 - 17:00), Attendees (60), Accessibility (Step-free required), and Best Matching Room (`Room A-104`).
5. **Green & Red Visual Room Block Diagram:**
   Once the floor is selected, render the architectural layout with color-coded room blocks:
   - **GREEN Blocks:** Room available at 15:00 - 17:00 (e.g. A-101, A-103, A-104 [Best Match], A-107, A-108).
   - **RED Blocks:** Room occupied / unavailable (e.g. A-102, A-105).
6. **Synchronized Results Table:** Render table below floor plan: `Room | Capacity | Accessibility (♿ Step-free) | Status (15:00 – 17:00) | Action ("Book Room")`. Clicking an available room submits the booking request.

#### Screen 3: Dean's Command Center (Flagship Institutional View)
- **Top 4 Metrics:** 27 Rooms, 189 Sessions, 40 Faculty, 5 Pending Approvals.
- **Embedded 3D Canvas:** Live HUD pins on buildings with active session counts.
- **Needs Attention Widget:** Conflict detected (`AC-A101 10:00-11:00`), maintenance (`Lab-2 Full day`), high demand (`CSE 3 pending bookings`).
- **Room Occupancy Heatmap Grid:** Buildings (Academic A/B, Science Cmplx, Library, Auditorium, Labs) × Time slots (8:00 to 18:00) with occupancy heat shades.
- **Departmental Availability Table:** CSE (3/6 available, 12 sessions), ECE (4/6), Mechanical (5/5), Civil (4/5), Electrical (4/5), Mathematics (6/6).
- **What-If Analysis Engine:** Select scenario (`Close Academic A tomorrow`), preview simulated displaced sessions (14 displaced, 12 reassigned, 2 clashes) without mutating the baseline timetable.

#### Screen 4: Weekly Timetable Workspace
- **Perspectives:** Faculty view | Student group view | Room view.
- **3-Hour Lab Block Scheduling:** Protected continuous 09:00 - 12:00 block in Science Complex Lab-1 for `CS301 Computer Networks Lab`.
- **Protected Campus Lunch Break:** Shaded `13:00 - 14:00` row across Monday–Friday where no teaching sessions are permitted.
- **Class Details Slide-Over:** Shows course name, faculty, room, credits, and interactive *"Why this slot?"* button explaining constraint solver reasoning.

#### Screen 5: Spectra (Cultural Fest) Priority Workspace
- **Campus Priority Hierarchy:** 1 Exams > 2 Classes > 3 Institute Events > 4 Guest Lectures > 5 Department Events > 6 Club Events.
- **Category Filter Pills:** Exams (4), Classes (8), Institute (5), Guest (3), Department (6), Club (2).
- **Clash Warning:** Callout when requested room overlaps an existing class: *"ME301 Thermodynamics is scheduled in this room from 10:00 - 11:00 on 14 Aug 2024."*
- **Alternative Venue Proposal:** Recommending Academic Block B, Seminar Hall 2 (80 seats).

#### Screen 6: Midsem Examinations Workspace
- **41 Official Exams:** Spanning CSE, ECE, ME, EE, CE cohorts.
- **50% Capacity Spacing Rule:** Clearly show normal room capacity vs. effective exam capacity (halved for alternating desk separation, e.g. 80 normal -> 40 exam capacity).
- **Actions:** Generate Exams & Export.

#### Screen 7: Rescheduling & Disruption Comparison ("Review Timetable Repair")
- **Disruption Details:** e.g. "Prof. A not available on Tuesday, 13 Aug 2024 (full day)".
- **Side-by-Side Comparison:** Before (Current) vs. Proposed timetable with moved sessions highlighted in soft amber.
- **Changes Summary Table:** # | Day | Time | Room | Before → After.
- **Validation Checklist:** Checkmarks for No room clashes, Faculty availability OK, Curriculum constraints OK.
- **Independent Admin Approval:** Require admin approval to apply repair to the active timetable.

#### Screen 8: Conversational AI Assistant
- Chat interface accepting natural English and Hinglish (e.g. *"Move my Wednesday morning class to Thursday"*).
- Interactive radio button selection when queries are ambiguous (e.g. *"Which Wednesday morning class? CS301 or MA102?"*).
- Formulates a structured proposal card with "Review proposal" and "Show alternative slots" buttons.
- Fallback cards for manual request creation if AI is offline.

#### Screen 9: Admin Data, Validation & Exports
- Drag-and-drop file upload for `cit_public.json` and `sample_disruption.json`.
- Dataset summary counts (12 departments, 428 courses, 186 faculty, 96 rooms, 124 student sections, 312 constraints).
- One-click downloads for official JSON export artifacts: `exports/schedule.json` and `exports/schedule_after.json`.
- Reset Demo Data modal with confirmation.

---

### 4. Canonical Dataset Specifications
- **27 Schedulable Rooms:** Academic Block A (A-101 to A-108, A-201 to A-204), Academic Block B (B-101 to B-102, B-201 to B-203), Science Complex (Lab-1, Lab-2, AI Lab, Robotics Lab), Central Library (CR1, CR2), Auditorium (AUD-Main 350, AUD-Mini 120), Lecture Centre (LC-101), Outdoor Venues (OAT 500, Central Plaza 250).
- **40 Faculty Members:** Max daily teaching limit of 4 hours.
- **189 Teaching Sessions:** Exactly 162 1-hour sessions + 27 3-hour lab sessions = 243 hours/week.
- **Periods:** Monday–Friday, P1 (08:00) to P9 (17:00), P10–P13 (18:00–22:00 events only).
```
