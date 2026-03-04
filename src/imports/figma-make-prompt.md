# Figma **Make** prompt — designed to win the #75HER Hackathon

Below is a single, copy-paste-ready Figma *Make* prompt that will generate a full, judged-ready mobile UI/UX for **SafeStep AR** (onboarding → AR navigation → minting). It’s tuned to the hackathon rules (use of Goose when required and the judging rubric). Two quick references from your hackathon brief: Goose integration is mandatory for the AI/ML track, and the submission checklist + judging criteria are essential to hit.  

---

## How to use

1. Open Figma → Plugins → **Make** (Figma AI).
2. Paste the entire prompt below into Make’s prompt field and run.
3. After generation: review the **Components** page, check the **Criteria Evidence** page, then polish copy and export assets.

---

## The prompt (paste this into Figma Make)

> Create a complete, hackathon-ready **mobile app** design for **SafeStep AR** — a WebAR/phone AR experience that guides users along the *safest* walking route (not the fastest) and mints a “Safe Passage” soulbound token upon arrival. The design must be optimized for judges: it should embed the hackathon’s judging criteria (Clarity, Proof, Usability, Rigor, Polish) visually and interactively. Output a single Figma file with the exact pages, frames, components, copy, prototype links, and developer export assets described below.
>
> **Project meta & constraints**
>
> * Project name: **SafeStep AR**
> * Tagline: *Navigate home without fear.*
> * Target user: women and gender-diverse people doing the “last mile” from transit late at night.
> * Platform: Mobile (iPhone 14 / 390 × 844 dp and Android 360 × 800 dp frames). Dark-first design but include a light theme variant.
> * Accessibility: WCAG AA/AAA contrast, 48px touch targets, text scale support.
> * Important hackathon constraints to reflect in copy & Design Evidence: **Goose** must be shown in the architecture/“Proof” flow (Goose used as AI agent). Link this to the Evidence page and Decision Log. (Reference: hackathon rules). 
>
> **File structure (create these top-level pages)**
>
> 1. `Cover` — Title, tagline, team name, one-sentence elevator pitch.
> 2. `User Flow` — Annotated flow diagram (Onboard → Home → AI Analysis → AR View → Arrival → Minting → Profile/History).
> 3. `Screens` — full set of artboards (see list). Name frames exactly (e.g., `01_Onboarding`, `02_Home`, `03_AI_Loading`, `04_AR_View`, `05_Arrival`, `06_Mint`, `07_Profile`, `08_DataSources`).
> 4. `Components` — tokens (colors, type, spacing), buttons, inputs, cards, badges, AR overlays. Use Auto Layout and component variants.
> 5. `Criteria Evidence` — one frame per judging criterion with annotated screenshots/snippets linking design decisions to scoring rubric. (Make sure the Evidence page lists the 4-Line Problem Frame and 3-Line Pitch.) 
> 6. `Prototype` — interactive prototype with annotated overlays for judges (see interactions below).
>
> **Design system / tokens**
>
> * Colors: primary `#1A2B4C` (deep blue), secondary `#2C7A7B` (teal), safe `#9AE6B4` (lime green), warn `#F56565` (coral red), bg `#0D0D0D` (dark). Provide light theme equivalents.
> * Type: Inter Bold for headings; Inter Regular for body. Sizes: H1 28, H2 22, Body 16, Button 18. Minimum 16px body. Provide line-height tokens.
> * Spacing tokens: 8/16/24/32 grid. 12pt baseline.
> * Icon style: filled glyphs with 2px stroke; provide 24/32/44px sizes.
>
> **Screens to generate (each artboard should include annotations and developer notes)**
>
> * `01_Onboarding` (360×800): logo, 4-Line Problem Frame card (exact copy below), “Get started” CTA. Permission microcopy for Camera & Location. Include “Skip” and “Read Privacy” links.
> * `02_Home` (360×800): map preview, two prominent buttons: “Safest route” (default) and “Fastest route” (secondary), destination search field, small banner: *“AI analyses lighting, community reports & public data”* plus a tiny badge: `Goose AI: ON`.
> * `03_AI_Loading` (360×800): loading state that explicitly shows a simulated API sequence: `Goose → Lighting check → Crime summary → Crowd reports → Route generated`. Show a JSON snippet card (mock) and a “Demo-ready: Mock data” toggle.
> * `04_AR_View` (390×844): camera feed mock (use dark blurred photo as background), neon path overlay (semi-transparent glowing green path), floating 3D waypoint markers, HUD top (destination & ETA), bottom large “I’ve arrived” button (48px height). Off-route red pulse overlay example and microcopy “You’re off the safe path — rejoin to stay safe.”
> * `05_Arrival` (390×844): celebration modal “You’re home safe!” with CTA: “Mint Safe Passage NFT” and secondary: “Report an issue on your route”. Include wallet connect microflow illustration (WalletConnect icon) and simulated success toast.
> * `06_Mint` (360×800): mint confirmation screen with SBT badge (non-transferable icon), NFT thumbnail, metadata fields (route name, date, safety score), share button to add link to Devpost/GitHub. Add copy about low gas strategy (mint uses Polygon testnet) and a tiny note that mint is optional.
> * `07_Profile` (360×800): History of trips with safety scores, NFT gallery, Evidence Log access link.
> * `08_DataSources` (360×800): Evidence Log with 3–5 citations (UN women stat, OpenStreetMap lighting, local crime data). Add a short Decision Log entry explaining one tradeoff (weighting community reports higher than raw police stats) — *this is the Rigor proof.* 
>
> **Copy — paste these exact strings where indicated**
>
> * 4-Line Problem Frame (Onboarding card):
>   **User:** A woman commuting alone at night.
>   **Problem:** Navigation apps prioritize speed over safety and ignore lighting/community context.
>   **Constraint:** Must be accessible (no-install fallback), respect privacy (no stored GPS), and run with mock data if needed.
>   **Success Test:** From a clean start the user opens the link and follows the green AR path to arrive without entering red zones.
> * 3-Line Pitch (Home banner / Devpost headline):
>   **Headline:** SafeStep AR — Navigate home without fear.
>   **Subhead:** AI-assessed safe routes with AR guidance and verifiable Safe Passage badges.
>   **CTA:** Try the Safe Route.
> * Onboarding permission microcopy: “SafeStep needs camera + location to show AR directions. Your route is not stored — only a hashed proof is optionally recorded for minting.”
> * AI Loading microcopy: “Goose is analyzing lighting, recent incidents, and community reports…”
> * Off-route microcopy: “You’re off the safe path — rejoin to stay visible to trusted checkpoints.”
> * Mint microcopy: “Mint a Soulbound ‘Safe Passage’ (testnet). This badge proves you completed a verified route and unlocks trusted reporting.”
>
> **Prototype interactions (must be clickable and annotated for judges)**
>
> * From `01_Onboarding` → tap **Get started** → `02_Home`.
> * Tap **Safest route** → `03_AI_Loading` (simulate 6-step progress with small overlays describing which data Goose used). Overlay the judges-facing tooltip: *“Proof: this shows our AI decision chain and links to evidence.”*
> * From `03_AI_Loading` → auto to `04_AR_View`. In AR, tapping the “i” icon opens an overlay that calls out Usability features (contrast, big targets) and links to `Criteria Evidence`.
> * Tap **I’ve arrived** → `05_Arrival` → `06_Mint`. Mint flow should simulate wallet connect (show WalletConnect modal mock) and success.
> * On every screen include a small “criteria sticker” in the top right (tiny numbered circle 1–5) mapping to the hackathon rubric: ①Clarity, ②Proof, ③Usability, ④Rigor, ⑤Polish.
>
> **Criteria Evidence page (generate automatically)**
>
> * Create five micro-frames labeled **Clarity / Proof / Usability / Rigor / Polish**. For each, show the exact UI artifact, one short sentence showing why this satisfies the criterion, and a pointer to repo/video asset names judges should check (example: `evidence/decision_log.md`). Example text for Rigor: *“We document the tradeoff: community reports given +20% weight vs historical police data to reduce over-policing bias.”*
>
> **Developer export & handoff**
>
> * Create a `/assets` page and export: app logo (SVG), primary icons (SVG), AR arrow sprite (PNG 1024), 3 screenshots (1080×1920) for Devpost gallery, and a 16:9 1280×720 storyboard frame set (5 frames) for the demo video. Provide CSS tokens and an `assets/README` comment listing hex codes and type styles.
>
> **Deliverable checklist (visible on Cover)**
>
> * Live prototype link (Figma prototype).
> * 3-5 export screenshots.
> * Criteria Evidence page.
> * Copy snippets included and editable (4-Line Frame, 3-Line Pitch, Decision Log example).
> * Developer notes for quickstart (one-line: `yarn start` backend; `EXPO_PUBLIC_USE_MOCK=true` toggles mock data). (Place in `Cover` as developer note.)
>
> **Extra: demo video storyboard frames**
>
> * Generate 5 storyboard frames (1280×720) with captions: 1) Problem on a dark street, 2) Home screen choose “Safest”, 3) Goose analysis loading, 4) AR path following, 5) Mint success & NFT gallery. Include recommended B-roll text for narration (10–15 words per frame).
>
> **Finish by producing**
>
> * A single Figma file with the pages above, a connected prototype, and visible annotated Evidence page.
> * Add inline comments on critical components: “Judges: tap here to see how we satisfy PROOF.”
>
> **Tone & style instructions for generated visuals**
>
> * Trustworthy, calm, modern: prefer rounded corners, minimal ornament, high legibility. Use subtle motion in prototypes (Figma Smart Animate) but provide a “reduced motion” variant for judges who prefer static.
>
> **Notes for judges & submission**
>
> * Add a small “How to demo” overlay on the cover (3 steps): 1) Open prototype, 2) Tap Safest route, 3) Follow AR screen to “Mint”. Also include the Devpost checklist pointer. (This makes the judges’ job effortless, as requested in the briefing.) 

---

## Quick optional tweaks to maximize scores (one-line each)

* On each screen add a tiny evidence badge linking to `Evidence Log` (makes Proof obvious).
* Export a “Criteria Evidence PDF” (one page per criterion, screenshot + 1-sentence rationale) — judges love single-page proof.
* Make the `03_AI_Loading` JSON panel copyable (so video shows realistic API response).
* Include an accessible fallback flow (text checkpoints list) for non-AR users — call this out under Usability.

---

## Helpful notes & references

* The hackathon requires Goose integration for AI/ML eligibility — show it in the design and Decision Log. 
* The submission checklist and judging rubric items (Clarity, Proof, Usability, Rigor, Polish) should be visible in your Figma file’s **Cover** and **Criteria Evidence** pages; the hackathon specifically asks for those artifacts in the repo and Devpost. 

---

If you want, I’ll now:

* convert this prompt into 3 shorter variations (minimal, standard, pro) so you can test several visual directions in Figma Make; **or**
* generate the exact microcopy JSON + export spec you can paste into Figma tokens (colors, text styles, spacing) for instant handoff.

Which of those two would you like me to do next? (I’ll proceed immediately with the one you pick — no waiting.)
