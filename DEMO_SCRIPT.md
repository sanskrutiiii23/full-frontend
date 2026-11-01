# CITRIX CampusOS — 5-Minute Video Walkthrough Script

**Project Title:** CITRIX CampusOS (Chilika Institute of Technology)  
**Target Duration:** Exactly 5:00 minutes (300 seconds)  
**Format:** Screen Recording + Voiceover Narration  
**Theme:** Dark Surface (`#080A09` / `#121614`) & Electric Lime (`#B8F36B`)  

---

## ⏱️ Timeline & Scene Breakdown

```
[0:00 - 0:35]  Scene 1: Introduction, The CIT Problem & CITRIX Architecture
[0:35 - 1:20]  Scene 2: Landing Page, 3D Spatial Twin & Multi-Role Demo Access
[1:20 - 2:10]  Scene 3: Zero-Clash Timetable Synthesis (CP-SAT Solver) & Multi-View Grids
[2:10 - 3:00]  Scene 4: Natural Language / Hinglish Booking & Conflict Blocking
[3:00 - 3:50]  Scene 5: Week 7 Spectra Decision Engine & Priority Arbitrage
[3:50 - 4:35]  Scene 6: Disruption Management, Minimal-Perturbation Solver & Diff Approval
[4:35 - 5:00]  Scene 7: Midsem Exam Scheduling, schedule.json Export & Wrap-Up
```

---

## 🎬 Detailed Script & Screen Directions

### [0:00 - 0:35] Scene 1: Introduction & The Problem
**Visual / Screen Action:**  
- Start on the high-impact dark landing page hero (`http://localhost:8000/`).
- Show the bold headline: **"CITRIX CampusOS — One Campus. One System. Zero Clashes."**
- Camera pans across the 3D campus twin and key stats: 1,000 students, 27 venues, 40 faculty, 62 courses.

**Voiceover Narration:**  
> "Welcome to **CITRIX CampusOS**, the intelligent scheduling and venue operating system built for Chilika Institute of Technology.  
> CIT has over one thousand students across five branches, with 27 rooms and 40 faculty members. Traditionally, schedules were handled in fragile spreadsheets, and room bookings occurred over WhatsApp groups and phone calls.  
> Everything falls apart during **Week 7**—when regular classes, midsem exams, and Spectra, the annual tech fest, all compete for the same auditoriums, labs, and seminar halls simultaneously.  
> CITRIX completely solves this with constraint programming, multi-role autonomy, and deterministic AI validation."

---

### [0:35 - 1:20] Scene 2: Landing Page, 3D Spatial Twin & Multi-Role Access
**Visual / Screen Action:**  
- Scroll down the Landing Page: showcase Section 01 (3D Campus Twin with interactive radar nodes), Section 02 (Institutional Impact metrics), and Section 03 (CP-SAT Decision Pipeline).
- Click **"Explore Workspace"** in the top navbar.
- The screen transitions smoothly into the dark & lime **Demo Role Selection Screen** (`/login`).
- Point out the 4 mandatory roles: **Admin (Dean)**, **Department Coordinator**, **Faculty**, and **Student Club Representative**.
- Highlight the **"Reset Demo Data"** button ensuring judges can re-test from a pristine state.
- Click **"Dr. Pramod Mishra (Dean of Academic Affairs)"** to enter the Admin Command Center.

**Voiceover Narration:**  
> "Our landing deck features a real-time spatial digital twin of CIT with interactive radar nodes monitoring building occupancies.  
> Clicking **Explore Workspace** brings us to the unified authentication gateway. CITRIX enforces strict role-based access control across all four problem statement roles: Dean's Office, Department Coordinator, Faculty, and Student Clubs.  
> Notice our **Reset Demo Data** button—allowing evaluators to restore the ground-truth state instantly.  
> Let's log in as Dean Pramod Mishra into the Admin Command Center."

---

### [1:20 - 2:10] Scene 3: Zero-Clash Timetable Synthesis (CP-SAT Solver) & Multi-View Grids
**Visual / Screen Action:**  
- Navigate to **"Timetable Generator Workspace"** (`/admin/timetable/generate`).
- Show the input dataset: 189 sessions (243 weekly teaching hours), 40 faculty, 14 student groups.
- Click **"Run CP-SAT Solver"**.
- An optimization progress animation displays constraint checks:
  - Hard: No faculty double-booking, no student double-booking, room capacities halved for exams, lunch window preserved, 3-hour lab contiguous blocks, accessibility rules, elective basket synchronization.
  - Soft: Faculty preferences, minimizing student gaps, max 6 hrs/day, 40% room utilization threshold.
- Solver completes: **0 Hard Violations, Soft Penalty minimized**.
- Switch between views: **By Student Cohort (CSE Y2)**, **By Faculty (Dr. Rajesh Kumar)**, and **By Room (LT-1 / Physics Lab)**.

**Voiceover Narration:**  
> "Under the hood, CITRIX executes Google OR-Tools CP-SAT constraint solver.  
> In one click, it synthesizes all 189 sessions while rigorously respecting every single hard constraint: no faculty or student overlaps, lab-specific venue requirements, accessibility compliance, lunch buffer protection, and elective basket alignment.  
> The generated schedule is immediately interactive: we can inspect it **by student cohort**, **by individual faculty member**, or **by room directory**, giving complete institutional transparency with zero timetable clashes."

---

### [2:10 - 3:00] Scene 4: Natural Language / Hinglish AI Booking & Conflict Blocking
**Visual / Screen Action:**  
- Switch persona to **Club Representative (Aryan Mehta)**.
- Navigate to the **Natural Language Booking Composer** (`/bookings/new`).
- Type into the prompt box:  
  `"Kal shaam 6 baje robotics club ke workshop ke liye Seminar Hall 1 book kardo for 60 members"`  
  *(Hinglish prompt)*.
- Click **"Interpret with AI"**.
- Show the extracted structured card: Date, Period (P10 18:00), Venue: Seminar Hall 1, Expected: 60. The user can review and edit fields before submitting.
- Now demonstrate **Conflict Blocking**: Try to book a room that has a regular lecture or maintenance lock.
- The system flashes a hard constraint block: **"Collision Detected: P3 Academic Session in Room 102. Request Denied by Policy."**

**Voiceover Narration:**  
> "Now let's switch to a Student Club persona to test venue booking.  
> CITRIX accepts booking prompts in plain English or **Hinglish**. Watch as we type: *'Kal shaam 6 baje robotics club ke liye Seminar Hall 1 book kardo'*.  
> Our AI extracts structured metadata into an editable booking card. Crucially, as required by the hackathon rules, **the LLM never makes the booking decision**.  
> Every request passes through our deterministic backend validation engine. When a student attempts to double-book a venue during an active lecture, the system strictly blocks the conflict before any state change occurs."

---

### [3:00 - 3:50] Scene 5: Week 7 Spectra Decision Engine & Priority Arbitrage
**Visual / Screen Action:**  
- Switch persona to **Timetable Coordinator (Dr. Priya Sharma)** or **Dean**.
- Open **"Spectra Management & Event Queue"** (`/admin/spectra`).
- Show the 25 Spectra week booking requests.
- Point out the 6-tier institutional priority hierarchy:  
  `1. Exams > 2. Regular Classes > 3. Institute Events > 4. Guest Lectures > 5. Dept Events > 6. Club Events`
- Click **"Evaluate All Spectra Requests"**.
- Show the automated decisions:
  - Approved requests with priority tags.
  - Rejected requests displaying explicit, transparent reasons (e.g., *"Preempted by higher-priority Institute Convocation rehearsal"*).
  - Smart alternatives recommended (e.g., *"Auditorium occupied; Open-Air Theatre suggested for same time slot"*).

**Voiceover Narration:**  
> "Week 7 is CIT's toughest challenge—25 high-stakes booking requests during Spectra tech fest.  
> CITRIX implements the official 6-tier priority hierarchy: Exams at the top, down to Club events.  
> When we run the Spectra Evaluator, the engine arbitrates every request deterministically.  
> Notice that every single rejection includes a human-readable explanation of which session took precedence, and automatically recommends an alternative room of appropriate capacity."

---

### [3:50 - 4:35] Scene 6: Disruption Management, Minimal-Perturbation Solver & Diff Approval
**Visual / Screen Action:**  
- Navigate to **"Disruption Management"** (`/admin/disruptions`).
- Load `sample_disruption.json` (Faculty medical leave for Dr. Rajesh Kumar & Room 101 maintenance closure).
- Click **"Propose Reschedule Fix"**.
- Show the solver calculating a **minimal perturbation** solution—moving as few sessions as humanly possible.
- Show the visual **Side-by-Side Diff Matrix**:
  - Highlights moved sessions in amber, canceled in red, preserved in green.
  - Explains the exact reasoning (e.g., *"Shifted Operating Systems Lecture from P3 to P7 in Room 104 to avoid maintenance window"*).
- Click **"Approve & Commit Changes"** as Admin.

**Voiceover Narration:**  
> "Unforeseen disruptions are inevitable. When a faculty member takes sudden leave or a lab undergoes emergency maintenance, administrators load the disruption profile.  
> CITRIX triggers a minimal-perturbation repair algorithm. Instead of scrambling the entire semester, it calculates the mathematical minimum moves needed to resolve all conflicts.  
> The Dean reviews a crystal-clear side-by-side diff highlighting exactly which slots moved and why. Once approved, the changes atomically update the master schedule."

---

### [4:35 - 5:00] Scene 7: Midsem Exam Scheduling, schedule.json Export & Wrap-Up
**Visual / Screen Action:**  
- Open **"Midsem Scheduling"** (`/admin/midsem`).
- Highlight the 41 midsem exams scheduled with **halved effective room capacity** for exam spacing.
- Navigate to **"Dataset Import/Export"** (`/admin/data`).
- Click **"Export schedule.json"** and **"Export schedule_after.json"**.
- Briefly show the terminal running `python validator.py exports/schedule.json` returning **0 hard constraint violations**.
- Return to the CITRIX hero page.

**Voiceover Narration:**  
> "Finally, CITRIX schedules all 41 midsem exams, automatically enforcing the halved room capacity rule for academic integrity.  
> With one click, administrators export `schedule.json` and `schedule_after.json`, achieving a verified zero-violation score on the official hackathon validator.  
> All AI models and open-source solvers are transparently declared in our `AI_USAGE.md` and `THIRD_PARTY.md`.  
> This is **CITRIX CampusOS**—bringing intelligent order to campus chaos. Thank you!"

---

## 💡 Top Tips for Recording the Video
1. **Resolution:** 1080p (1920x1080) at 60fps for smooth scrolling and 3D twin rendering.
2. **Audio:** Use a clear microphone with noise reduction. Speak at an energetic, confident pace (~140-150 words per minute).
3. **Cursor Highlights:** Keep mouse movements purposeful—hover over buttons and metrics before clicking.
4. **Link Setup:** Upload as an **Unlisted YouTube Video** or Google Drive with *"Anyone with the link can view"* permission as required by Section 8.
