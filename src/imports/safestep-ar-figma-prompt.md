Here’s a comprehensive Figma design prompt for the **SafeStep AR** mobile app, tailored to the #75HER Hackathon’s UI/UX requirements. Use this to create a polished, user‑centered design that clearly communicates the app’s safety mission and technological sophistication.

---

## 🎨 **SafeStep AR – Mobile App Design Prompt for Figma**

### **1. Overview**
- **App Name:** SafeStep AR  
- **Tagline:** *Navigate home without fear.*  
- **Target Audience:** Women and gender‑diverse individuals who commute alone at night, especially the “last mile” from public transit.  
- **Core Goal:** Provide a safe, AR‑guided walking route using AI‑driven risk assessment and reward users with blockchain‑verified “Safe Passage” NFTs.

### **2. Visual Identity & Style**
- **Tone:** Trustworthy, calm, empowering, but alert when necessary.  
- **Color Palette:**  
  - **Primary:** Deep blue (`#1A2B4C`) – evokes trust, stability, night sky.  
  - **Secondary:** Teal (`#2C7A7B`) – safety, growth, calm.  
  - **Accent (safe):** Lime green (`#9AE6B4`) – used for safe paths, confirmations.  
  - **Accent (warning):** Coral red (`#F56565`) – off‑route alerts, high‑risk zones.  
  - **Background:** Dark mode default (`#121212`) with light text for night‑time readability.  
- **Typography:**  
  - Headings: **Inter Bold** (clean, modern, highly legible)  
  - Body: **Inter Regular** (16pt minimum, 18pt for buttons)  
- **Iconography:** Simple, filled line icons (e.g., location pin, shield, wallet, arrow). Use SF Symbols or Material Symbols as references.  
- **AR Overlay Style:** Semi‑transparent neon green arrows and path markers with subtle glow. Warning pulses in red with opacity animation.

### **3. Key Screens & User Flow**
Design the following screens with a connected prototype (Figma’s prototyping mode). Include transitions (e.g., slide, fade) to simulate real use.

#### **Screen 1: Splash / Onboarding**  
- **Purpose:** Brief introduction and permission requests.  
- **Elements:**  
  - App logo (shield + location pin) and name.  
  - 2‑3 swipeable cards:  
    1. *“Find the safest route home – day or night.”*  
    2. *“AR arrows guide you, AI avoids risky areas.”*  
    3. *“Earn a Safe Passage NFT for every journey.”*  
  - “Get Started” button (prominent).  
  - Permission modals (camera, location) triggered after button tap.

#### **Screen 2: Home / Route Input**  
- **Purpose:** Enter destination, view suggested safe route.  
- **Elements:**  
  - Map view (static or live tile) showing current location.  
  - Two input fields (or smart picker):  
    - “Current location” (auto‑detected, but editable).  
    - “Destination” (address or landmark).  
  - Prominent **“Find Safe Route”** button.  
  - Below button, a toggle between “Fastest” (grey) and “Safest” (green, selected by default) with estimated times.  
  - Small note: *“AI analyzes lighting, crime data & community reports.”*  
  - Bottom navigation (optional): Home, History, Profile.

#### **Screen 3: AI Analysis (Loading State)**  
- **Purpose:** Show that Goose AI is working.  
- **Elements:**  
  - Animated illustration: phone scanning a path with pulsing dots.  
  - Text: *“Goose AI is checking street lights, recent incidents, and community tips…”*  
  - Progress bar or spinner.  
  - After 2‑3 seconds, auto‑transition to AR view.

#### **Screen 4: AR Navigation View**  
- **Purpose:** Live camera with AR overlays guiding the user.  
- **Elements:**  
  - Full‑screen camera feed.  
  - **AR Overlays:**  
    - Green arrows floating on the sidewalk, pointing forward.  
    - Green “safe zone” glow on recommended path.  
    - If user steps off path: red pulsing border around screen + red “X” on wrong direction.  
    - Small floating icons for checkpoints: 🏪 24h store, 🚔 police substation (tap to see name/distance).  
  - **HUD (Heads‑Up Display):**  
    - Top: destination name, estimated safe arrival time.  
    - Bottom: mini‑map (simplified path) with user’s position.  
    - Bottom button: “Report Issue” (opens quick report form).  
  - Gestures: Pinch to zoom camera, tap checkpoint for details.

#### **Screen 5: Arrival Confirmation**  
- **Purpose:** Celebrate safe arrival, prompt for NFT mint.  
- **Elements:**  
  - Large checkmark animation or confetti.  
  - Text: *“You arrived safely! 🎉”*  
  - Journey summary: time, route length, “safety score”.  
  - Prominent **“Mint Safe Passage NFT”** button.  
  - Secondary: “Report a problem on this route” link.

#### **Screen 6: NFT Minting (Simulated)**  
- **Purpose:** Show blockchain reward process.  
- **Elements:**  
  - Illustration of a medallion / NFT artwork (customizable).  
  - Text: *“Minting your unique Soulbound Token on Polygon…”*  
  - Spinner → success message with transaction ID (dummy).  
  - Button: “View in Wallet” (opens external wallet app or shows placeholder).  
  - Option to share on social media.

#### **Screen 7: Profile / History**  
- **Purpose:** Track past journeys and collected NFTs.  
- **Elements:**  
  - User avatar (optional) and wallet address (truncated).  
  - **NFT Gallery:** Thumbnails of earned Safe Passage NFTs (each with date, route name).  
  - **Journey History:** List of past trips with safety score and time.  
  - Settings: app permissions, theme (dark/light), data sources.

### **4. Component Library (to be created as reusable components)**
- **Buttons:**  
  - Primary: filled, rounded rectangle (48px height), green or blue.  
  - Secondary: outlined, same height.  
  - Icon buttons: circular, subtle background.  
- **Input Fields:**  
  - Rounded, dark background with light text, search icon.  
  - Autocomplete dropdown (mock).  
- **Cards:**  
  - For onboarding, journey summary – dark background, subtle border, corner radius 16px.  
- **Bottom Navigation:**  
  - Icons + labels (Home, History, Profile). Active state highlighted with accent color.  
- **Loading Indicators:**  
  - Custom animated spinner (pulse or rotating circle) in brand colors.  
- **AR Overlay Elements:**  
  - Arrow: 3D‑style with glow effect (use drop shadow + blur).  
  - Warning pulse: red overlay with opacity keyframes (Figma smart animate).  
- **Mint NFT Card:**  
  - Glowing border, gradient background to signify value.

### **5. Accessibility & Usability Notes**
- **Contrast:** All text meets WCAG AAA standards (light on dark).  
- **Touch Targets:** Minimum 48x48px for all interactive elements.  
- **Text Scaling:** Support dynamic type (use auto‑layout).  
- **Alt Text:** Provide space for image descriptions in design specs.  
- **Color Blindness:** Ensure information is not conveyed by color alone (use icons and labels).  
- **Reduced Motion Option:** Provide a static alternative for animations (note in prototype).

### **6. Deliverables**
1. **Figma file** containing:  
   - All screens (frames) named clearly.  
   - Reusable components (in a separate “Components” page).  
   - A connected prototype with flows:  
     - Onboarding → Home → AI Loading → AR View → Arrival → Minting → Profile.  
2. **Design system** page with colors, typography, and icon set.  
3. **Export assets** (logo, icons) as PNG/SVG for development handoff.  
4. **Annotated screens** with developer notes (optional but helpful).

### **7. Inspiration & References**
- **AR Navigation:** Google Maps Live View, Citymapper’s AR mode.  
- **Safety Apps:** bSafe, WalkSafe.  
- **Blockchain UI:** OpenSea, Rainbow wallet (simplified).  
- **Color Scheme:** Dark mode UIs from Uber or Lyft.

---

Use this prompt to create a Figma design that not only looks stunning but also clearly communicates the app’s innovative blend of AR, AI, and blockchain – impressing both users and hackathon judges.

