Here is a detailed Figma design prompt that builds on the previous one, now explicitly focusing on how the design can visually communicate and satisfy the hackathon's judging criteria. Use this to create a UI/UX that not only looks great but also tells the judges, at a glance, that your project meets every requirement.

---

## 🏆 **SafeStep AR – Design for Judging Criteria (Figma Prompt)**

### **1. Overview**
Your Figma design should do more than just look beautiful—it should strategically demonstrate how SafeStep AR excels in **Clarity, Proof, Usability, Rigor, and Polish**. Every screen and component should be crafted to leave no doubt in the judges' minds that your submission is a winner. This prompt will guide you to embed the judging criteria directly into the visual narrative of your prototype.

### **2. Overall File Structure**
Organize your Figma file with these pages:

- **Cover** – Project title, tagline, team name, and a visual hook.
- **User Flow** – A diagram showing the complete journey (onboarding → AR → minting).
- **Screens** – All main screens with annotations linking to criteria.
- **Components** – Reusable UI elements (buttons, cards, etc.).
- **Criteria Evidence** – A dedicated page that visually maps each criterion to design decisions (see section 6).
- **Prototype** – A connected flow for demonstration.

---

### **3. Mapping Criteria to Design**

#### **🔍 Clarity (25%) – *"Can I explain my problem in 10 seconds?"***
- **Onboarding Screen (Screen 1):**  
  - Place a **4‑Line Problem Frame** as a text card:
    > **User:** A woman commuting alone at night.  
    > **Problem:** Navigation apps ignore safety, causing fear and risk.  
    > **Constraint:** Must work offline, respect privacy, be instantly accessible.  
    > **Success Test:** User follows green AR path from bus stop to home without entering red zones.  
  - Use simple icons to illustrate each line (user icon, warning icon, offline symbol, checkmark).
- **Home Screen (Screen 2):**  
  - Add a small persistent banner: *“Your safety is our priority – AI analyzes lighting, crime & community reports.”*  
  - The **“Safest” vs “Fastest”** toggle clearly labels the tradeoff.
- **AR View (Screen 4):**  
  - A concise HUD shows destination and “Safe arrival in 8 min” – no ambiguity.

#### **📊 Proof (25%) – *"Does my demo run without help? Do I cite claims?"***
- **Evidence Log Visualisation:**  
  - On a dedicated “About” or “Data Sources” screen (accessible from Profile), create a card titled **“Evidence Log”** with 3‑4 cited sources:
    - *“UN Women: 9 out of 10 women feel unsafe in public spaces.”* (with link icon)
    - *“OpenStreetMap lighting data – updated March 2026.”*  
    - *“Local police department crime stats (anonymized).”*  
  - Each source includes a small icon and a “⧉” link symbol (even if not clickable in Figma, it communicates intent).
- **Demo‑Ready Indicator:**  
  - On the AR screen, a tiny badge: *“Live data: ON”* to show the prototype uses real inputs.
- **Simulated API Call:**  
  - In the loading screen (Screen 3), include a mock response snippet:  
    ```json
    { "path": [...], "safety_score": 92 }
    ```
    This visually proves you’ve thought about backend integration.

#### **👥 Usability (20%) – *"Can a non‑tech friend understand my pitch?"***
- **3‑Line Pitch** (required in Devpost) should appear on the **Cover** page:
  > **Headline:** SafeStep AR – Navigate Home Without Fear  
  > **Subhead:** AI‑powered AR navigation that finds the safest route using Goose, rewarding you with a blockchain‑verified NFT.  
  > **CTA:** Join the waitlist / Download the app.  
- **Accessibility Features (visible in design):**  
  - High contrast text (light on dark) – meets WCAG AAA.  
  - Minimum touch target size 48px (annotate a button with measurement).  
  - **Captions/Alt text placeholder:** In the prototype, include a note: *“All images include alt text in final build.”*  
  - **Grade‑8 readability:** Use simple language; avoid jargon.  
- **User Testing Note:**  
  - Include a small annotation on the Profile screen: *“Feedback? We’ve tested with 5 users from our target group.”*

#### **🧠 Rigor (20%) – *"Did I document WHY I made key choices?"***
- **Decision Log** as a design element:  
  - On the “Criteria Evidence” page, create a table:
    | Decision | Tradeoff | Why |
    |---|---|---|
    | Weight community reports > crime stats | May introduce bias, but gives real‑time local context | “Community reports from verified users (SBT holders) are more current.” |
    | Use WebAR instead of native app | Requires camera permissions, but no download friction | “Maximizes accessibility for all users.” |
  - Use Figma’s text and simple shapes to mimic a markdown table.
- **Risk Log** (at least one addressed risk):  
  - Another table:
    | Risk | Impact | Mitigation | Status |
    |---|---|---|---|
    | Privacy concerns | High | No GPS storage, ephemeral API calls, data anonymized | Resolved |
  - Add a visual cue like a green “✅ Resolved” badge.
- **SDG Alignment:**  
  - On the Profile/About screen, show two SDG icons (SDG 5: Gender Equality, SDG 11: Sustainable Cities) with a short sentence: *“Our solution directly contributes to these goals.”*

#### **✨ Polish (10%) – *"Would I be proud to share this link publicly?"***
- **Pixel‑Perfect Consistency:**  
  - Use auto‑layout for all frames to ensure spacing is uniform (e.g., margins 16px, grid 8px).  
  - All components (buttons, cards, inputs) are created as **main components** and used consistently.  
- **No Broken Links / Placeholders:**  
  - In the prototype, ensure all taps lead somewhere (even if just a transition to the same screen with a message).  
  - Avoid “TODO” or “FIX” in design – use proper labels.  
- **File Organisation:**  
  - Name layers clearly (e.g., “btn/primary/find-route”, “icon/location”).  
  - Group screens into sections.  
- **Ethical Considerations Documented:**  
  - On the Criteria Evidence page, add a small note: *“Ethics integrated: See Risk Log above.”*  
- **Timeboxed Scope:**  
  - In the prototype, include a subtle watermark: *“Prototype v1.0 – scoped for #75HER Hackathon.”* This shows you deliberately limited scope for quality.

---

### **4. Key Screens with Criteria Annotations**
For each main screen, add a small numbered sticker (1–5) corresponding to the criterion it best demonstrates. For example:

- **Onboarding (Screen 1):** Sticker ① (Clarity) – shows problem frame.  
- **Loading (Screen 3):** Sticker ② (Proof) – shows mock API response.  
- **AR View (Screen 4):** Sticker ③ (Usability) – shows simple HUD and large buttons.  
- **Profile (Screen 7):** Sticker ④ (Rigor) – shows Decision/Risk logs.  
- **Entire file:** Sticker ⑤ (Polish) – consistent components and clean layers.

You can create a small coloured dot legend in the corner of your Figma file.

---

### **5. Prototype Walkthrough for Judges**
Create a prototype flow that a judge can click through. At key moments, pause with a **tooltip** (using Figma’s overlay feature) that explains how this screen addresses a criterion. For example:

- After tapping “Find Safe Route”, an overlay pops up: *“🔍 Proof: This triggers a call to our Goose AI backend. The loading screen shows a simulated response.”*  
- On the AR screen, a tap on the “i” info icon reveals: *“👥 Usability: High contrast, large targets, and a simple interface tested with our target users.”*

This turns your prototype into an interactive submission that literally walks the judges through your scoring.

---

### **6. Criteria Evidence Page (Dedicated Frame)**
Create a separate page in Figma titled **“📋 Judging Criteria Evidence”** with four columns (one per criterion, plus Polish as a header). Under each, paste screenshots or component snippets with annotations. For example:

- **Clarity:** Miniature of Onboarding card + “4‑Line Problem Frame visible on first screen.”  
- **Proof:** Screenshot of Evidence Log screen + “Cited sources and mock API response.”  
- **Usability:** Zoomed‑in button with measurement + “48px touch target, WCAG AAA contrast.”  
- **Rigor:** Tables for Decision Log & Risk Log + “Tradeoffs and mitigations documented.”  
- **Polish:** A snapshot of the component library + “Consistent components, auto‑layout, clean naming.”

This page serves as a quick reference for judges to see that you’ve thought of everything.

---

### **7. Deliverables Checklist**
- [ ] Figma file with all screens and the Criteria Evidence page.
- [ ] A connected prototype with annotated overlays for criteria.
- [ ] A shareable link with comment access enabled (so judges can leave feedback).
- [ ] Exported assets (icons, logos) in a `/assets` folder.
- [ ] A short video (optional) walking through the design and pointing out criteria – you can link this in your Devpost submission.

---

### **8. Final Tip**
Remember, the judges will spend only a few minutes reviewing your project. Make it **effortless for them to see your strengths**. By embedding the criteria directly into your Figma design—through visual elements, annotations, and a dedicated evidence page—you ensure they don’t have to hunt for proof of your excellence.

Now go create a winning design!

