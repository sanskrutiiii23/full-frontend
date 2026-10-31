# AI Assistance Log (AI_USAGE.md)

This log documents the usage of artificial intelligence assistance during the development of CITRIX for CrunchWeek at Chilika Institute of Technology.

## 1. Architectural Planning & Phase 0 Analysis
- **Model:** Gemini 3.8 Flash (High) via Antigravity Agent.
- **Scope:** Analyzed 11 architectural reference images, the master prompt requirements, data schemas, and API contracts. Formulated the 6-phase engineering plan and documented contract gaps in `docs/contract-gaps.md`.

## 2. 3D Procedural Campus Engineering
- **Assistance Provided:** Generated procedural Three.js geometries for Academic Block A (courtyard + atrium), Academic Block B, Science Complex, Library, Auditorium, and the Central Amphitheatre with concentric stone tiers matching the aerial reference composition.
- **Verification:** Verified lighting ratios, shadow map settings (1024 PCFSoftShadowMap), and damped camera transition helpers (600–900ms).

## 3. UI Component Construction & Design Fidelity
- **Assistance Provided:** Translated visual specifications from screenshots into high-density enterprise command-center components (Dean's Command Center, Campus Explorer, Timetable with 3h lab blocks, Spectra priority queue, Midsem 50% capacity viewer, Disruption before/after diff, and conversational AI schedule helper).
- **Rule Verification:** Enforced the institutional self-approval integrity rule ("Nobody may approve their own request") across all approval queues.
