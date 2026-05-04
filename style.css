/* ══════════════════════════════════════════════
   ROOT & RESET
══════════════════════════════════════════════ */
:root {
  --cherry:        #7C0116;
  --cherry-bright: #a8021e;
  --hibiscus:      #E0A4B0;
  --hibiscus-dim:  rgba(224, 164, 176, 0.35);
  --hibiscus-faint:rgba(224, 164, 176, 0.12);
  --cream:         #FBF5EE;
  --dark:          #0e0305;
  --dark2:         #1a0507;
  --dark3:         #2a0d10;
  --gold:          #C9A84C;
  --font-display:  'Playfair Display', Georgia, serif;
  --font-body:     'Lora', Georgia, serif;
  --font-mono:     'Courier Prime', 'Courier New', monospace;
  --font-stamp:    'Bebas Neue', Impact, sans-serif;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--dark);
  color: var(--cream);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
}

button {
  cursor: pointer;
  font-family: var(--font-body);
  border: none;
  background: none;
}

/* ══════════════════════════════════════════════
   SECTION SYSTEM
══════════════════════════════════════════════ */
.section {
  position: fixed;
  inset: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.section.active {
  display: flex;
}

/* Scrollable section override */
.section-scroll.active {
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--cherry) transparent;
}
.section-scroll::-webkit-scrollbar { width: 3px; }
.section-scroll::-webkit-scrollbar-track { background: transparent; }
.section-scroll::-webkit-scrollbar-thumb { background: var(--cherry); border-radius: 2px; }

/* Inner scroll boxes */
.scroll-box {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--cherry) transparent;
}
.scroll-box::-webkit-scrollbar { width: 3px; }
.scroll-box::-webkit-scrollbar-thumb { background: var(--cherry); }

/* ══════════════════════════════════════════════
   UTILITY
══════════════════════════════════════════════ */
.hidden { display: none !important; }

/* ══════════════════════════════════════════════
   BUTTONS
══════════════════════════════════════════════ */
.btn {
  display: inline-block;
  padding: 13px 30px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  white-space: nowrap;
}

.btn-primary {
  background: var(--cherry);
  color: var(--cream);
  border: 1px solid transparent;
}
.btn-primary:hover {
  background: var(--cherry-bright);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(124, 1, 22, 0.55);
}

.btn-ghost {
  background: transparent;
  color: var(--hibiscus);
  border: 1px solid var(--hibiscus-dim);
}
.btn-ghost:hover {
  background: var(--hibiscus-faint);
  transform: translateY(-2px);
}

.btn-large {
  padding: 16px 44px;
  font-size: 1rem;
}

.btn-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ══════════════════════════════════════════════
   OVERLAYS / MODALS
══════════════════════════════════════════════ */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  animation: fadeIn 0.35s ease both;
  padding: 20px;
}

.modal-box {
  background: linear-gradient(145deg, var(--dark2) 0%, var(--dark3) 100%);
  border: 1px solid var(--hibiscus-dim);
  border-radius: 20px;
  padding: 48px 44px;
  max-width: 540px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 80px rgba(224, 164, 176, 0.08), 0 0 200px rgba(124, 1, 22, 0.12);
  animation: slideUp 0.45s ease both;
  position: relative;
  overflow: hidden;
}

.modal-lead {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.6rem;
  color: var(--hibiscus);
  margin-bottom: 16px;
}

.modal-body {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  line-height: 1.95;
  color: var(--cream);
  margin-bottom: 28px;
}

.modal-body strong { color: var(--hibiscus); font-style: normal; }

/* Landing modal popup bg */
.landing-modal-box {
  background-image: url('assets/special/bg3.png');
  background-size: cover;
  background-position: center;
}
.landing-modal-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(14, 3, 5, 0.72);
  border-radius: 20px;
}
.modal-content { position: relative; z-index: 2; }

/* ══════════════════════════════════════════════
   SECTION 1 — LANDING
══════════════════════════════════════════════ */
#s1 { overflow: hidden; }

.s1-bg {
  position: absolute;
  inset: 0;
  background-image: url('assets/special/bg1.png');
  background-size: cover;
  background-position: center;
}

.s1-vignette {
  position: absolute;
  inset: 0;
  background: rgba(14, 3, 5, 0.42);
  backdrop-filter: blur(1.5px) saturate(0.9);
}

/* Skip button wobble */
#skip-btn.wobble {
  animation: wobble 0.4s ease;
}
@keyframes wobble {
  0%, 100% { transform: translateX(0); }
  25%  { transform: translateX(-10px) rotate(-2deg); }
  50%  { transform: translateX(10px) rotate(2deg); }
  75%  { transform: translateX(-5px) rotate(-1deg); }
}

/* ══════════════════════════════════════════════
   SECTION 2 — MUGSHOT
══════════════════════════════════════════════ */
#s2 { overflow: hidden; background: var(--dark); }

.mug-slides {
  position: absolute;
  inset: 0;
}

.mug-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease;
}
.mug-slide.active { opacity: 1; }

.mug-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
}

.mug-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(14, 3, 5, 1) 0%,
    rgba(14, 3, 5, 0.25) 55%,
    transparent 100%
  );
}

.mug-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 30px;
  text-align: center;
  z-index: 10;
}

.mug-accused {
  font-family: var(--font-stamp);
  font-size: clamp(1.1rem, 2.8vw, 2rem);
  letter-spacing: 0.35em;
  color: var(--hibiscus);
  margin-bottom: 6px;
}

.mug-crime {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: rgba(224, 164, 176, 0.5);
  letter-spacing: 0.12em;
  margin-bottom: 26px;
  text-transform: uppercase;
}

#view-case-btn {
  opacity: 0;
  animation: fadeInUp 0.6s ease 2s forwards;
}

/* ══════════════════════════════════════════════
   FIR OVERLAY
══════════════════════════════════════════════ */
#fir-overlay.active-overlay { display: flex; }

.fir-box {
  max-width: 820px;
  width: 100%;
  max-height: 88vh;
  border-radius: 10px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.9);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--cherry) transparent;
  animation: slideUp 0.4s ease both;
}
.fir-box::-webkit-scrollbar { width: 3px; }
.fir-box::-webkit-scrollbar-thumb { background: var(--cherry); }

.fir-img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.fir-footer {
  background: var(--dark);
  padding: 22px 28px;
  border-radius: 0 0 10px 10px;
  text-align: center;
}

.fir-stamp {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--hibiscus);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* ══════════════════════════════════════════════
   SECTION 3 — PUNISHMENT
══════════════════════════════════════════════ */
#s3 { background: var(--dark); overflow: hidden; }

.pun-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 24px;
  text-align: center;
  z-index: 20;
  background: linear-gradient(to bottom, rgba(14, 3, 5, 0.95) 0%, transparent 100%);
}

.pun-title {
  font-family: var(--font-stamp);
  font-size: clamp(0.95rem, 2.2vw, 1.7rem);
  letter-spacing: 0.28em;
  color: var(--hibiscus);
}

.pun-counter {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(224, 164, 176, 0.5);
  margin-top: 5px;
  letter-spacing: 0.07em;
}

/* Jail stage */
.jail-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vika-main {
  width: min(230px, 25vw);
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(124, 1, 22, 0.4), 0 20px 60px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
  position: relative;
  z-index: 5;
  filter: drop-shadow(0 0 20px rgba(0,0,0,0.7));
}

.vika-main.shake { animation: shake 0.45s ease; }

/* Punishment buttons */
.pun-btn {
  position: absolute;
  z-index: 10;
  background: rgba(14, 3, 5, 0.87);
  border: 1px solid rgba(224, 164, 176, 0.3);
  border-radius: 14px;
  padding: 10px 12px;
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 0.72rem;
  text-align: center;
  line-height: 1.45;
  width: 118px;
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
}
.pun-btn:hover {
  border-color: var(--hibiscus);
  background: rgba(124, 1, 22, 0.55);
  transform: scale(1.06);
}
.pun-emo {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 4px;
}

/* Button positions — left */
.pun-tl  { left: 3%;  top: 18%; }
.pun-ml  { left: 3%;  top: 40%; }
.pun-bl  { left: 3%;  top: 62%; }
.pun-ltop { left: 19%; top: 8%; }
.pun-lbot { left: 19%; top: 76%; }

/* Button positions — right */
.pun-tr  { right: 3%;  top: 18%; }
.pun-mr  { right: 3%;  top: 40%; }
.pun-br  { right: 3%;  top: 62%; }
.pun-rtop { right: 19%; top: 8%; }
.pun-rbot { right: 19%; top: 76%; }

/* Reaction bar */
.reaction-bar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(14, 3, 5, 0.93);
  border: 1px solid var(--hibiscus-dim);
  border-radius: 14px;
  padding: 13px 24px;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.88rem;
  color: var(--cream);
  max-width: 520px;
  width: 90%;
  text-align: center;
  z-index: 30;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.reaction-bar.show { opacity: 1; }

/* Verdict unlock button */
.verdict-unlock {
  position: absolute;
  bottom: 88px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

/* Write own textarea */
.write-box { max-width: 500px; }

.pun-textarea {
  width: 100%;
  height: 110px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--hibiscus-dim);
  border-radius: 10px;
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 0.9rem;
  padding: 14px;
  resize: none;
  outline: none;
  margin-top: 8px;
  transition: border-color 0.2s;
}
.pun-textarea:focus { border-color: var(--hibiscus); }

/* ══════════════════════════════════════════════
   ERROR 404
══════════════════════════════════════════════ */
.error-bg-img {
  position: absolute;
  inset: 0;
}
.error-bg-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  filter: blur(6px) grayscale(0.5);
}

.error-box {
  position: relative;
  z-index: 5;
  background: rgba(14, 3, 5, 0.96);
  border: 2px solid var(--cherry);
  border-radius: 6px;
  padding: 48px 40px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 100px rgba(124, 1, 22, 0.35);
  animation: slideUp 0.45s ease both;
}

.error-code {
  font-family: var(--font-stamp);
  font-size: clamp(3.5rem, 9vw, 6.5rem);
  color: var(--cherry);
  letter-spacing: 0.05em;
  line-height: 1;
  animation: glitch 3.5s infinite;
}

.error-sub {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(224, 164, 176, 0.5);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 10px 0 26px;
}

.error-question {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.98rem;
  line-height: 1.85;
  color: var(--cream);
  margin-bottom: 30px;
}

.verdict-choice {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.choice-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(224, 164, 176, 0.28);
  border-radius: 14px;
  padding: 16px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 120px;
}
.choice-card:hover {
  border-color: var(--hibiscus);
  background: rgba(124, 1, 22, 0.35);
  transform: translateY(-2px);
}
.choice-card-vika:hover { background: rgba(224, 164, 176, 0.12); }

.choice-name {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  color: var(--hibiscus);
  display: block;
}

.choice-sub {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(224, 164, 176, 0.5);
  margin-top: 5px;
  letter-spacing: 0.07em;
}

/* ══════════════════════════════════════════════
   SECTION 4 — VERDICT / COURTROOM
══════════════════════════════════════════════ */
#s4 { overflow: hidden; }

.court-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  filter: blur(2px);
}

.court-tint {
  position: absolute;
  inset: 0;
  background: rgba(14, 3, 5, 0.65);
}

.verdict-panel {
  position: relative;
  z-index: 5;
  max-width: 640px;
  width: 92%;
  max-height: 78vh;
  background: rgba(14, 3, 5, 0.92);
  border: 1px solid rgba(224, 164, 176, 0.18);
  border-radius: 6px;
  padding: 50px 44px;
  animation: slideUp 0.5s ease both;
}

.verdict-hdr {
  font-family: var(--font-stamp);
  font-size: 1.05rem;
  letter-spacing: 0.38em;
  color: var(--hibiscus);
  text-align: center;
  margin-bottom: 6px;
}

.verdict-case {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(224, 164, 176, 0.4);
  letter-spacing: 0.09em;
  text-align: center;
  margin-bottom: 32px;
}

.verdict-body {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.93rem;
  line-height: 2.05;
  color: var(--cream);
}
.verdict-body p { margin-bottom: 18px; }

.verdict-rule {
  border: none;
  border-top: 1px solid rgba(224, 164, 176, 0.15);
  margin: 24px 0;
}

.verdict-label {
  font-family: var(--font-stamp) !important;
  font-style: normal !important;
  font-size: 1rem !important;
  letter-spacing: 0.3em;
  color: var(--hibiscus) !important;
  text-align: center;
}

.verdict-final {
  text-align: center;
  font-size: 1.05rem !important;
  color: var(--hibiscus) !important;
}

.verdict-footer {
  text-align: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(224, 164, 176, 0.1);
}

/* ══════════════════════════════════════════════
   SECTION 5 — MEMORIES
══════════════════════════════════════════════ */
#s5 { background: var(--dark); padding-bottom: 80px; }

/* Heart HUD */
.heart-hud {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 50;
  text-align: center;
}

.heart-icon { font-size: 2rem; line-height: 1; }

.heart-track {
  width: 54px;
  height: 5px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 6px;
}

.heart-prog {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--cherry), var(--hibiscus));
  border-radius: 3px;
  transition: width 0.6s ease;
}

.heart-pct {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--hibiscus);
  margin-top: 3px;
}

/* Memory section header */
.mem-header {
  text-align: center;
  padding: 80px 20px 32px;
}

.mem-title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--hibiscus);
}

.mem-subtitle {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.88rem;
  color: rgba(224, 164, 176, 0.55);
  margin-top: 10px;
}

/* Memory grid */
.mem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 18px;
  padding: 0 22px;
  max-width: 1100px;
  margin: 0 auto;
}

/* Memory card */
.mem-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.mem-card:hover { transform: translateY(-4px); box-shadow: 0 14px 44px rgba(0,0,0,0.55); }

.mem-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.7s ease;
}

/* Broken states — more taps = more restored */
.mem-card[data-state="0"] img { filter: grayscale(1)   blur(5px) brightness(0.22) contrast(0.7); }
.mem-card[data-state="1"] img { filter: grayscale(0.8) blur(3.5px) brightness(0.38); }
.mem-card[data-state="2"] img { filter: grayscale(0.55) blur(2px) brightness(0.55); }
.mem-card[data-state="3"] img { filter: grayscale(0.25) blur(0.8px) brightness(0.78); }
.mem-card[data-state="4"] img { filter: none; }

/* Crack SVG */
.crack-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.7s ease;
}
.mem-card[data-state="4"] .crack-svg { opacity: 0; }

/* Memory label */
.mem-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 36px 16px 16px;
  background: linear-gradient(transparent, rgba(14, 3, 5, 0.97));
}

.mem-place {
  font-family: var(--font-stamp);
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  color: var(--hibiscus);
}

.mem-liner {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.76rem;
  color: rgba(251, 245, 238, 0.82);
  line-height: 1.6;
  margin-top: 5px;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.6s ease 0.1s, max-height 0.6s ease;
}
.mem-card[data-state="4"] .mem-liner {
  opacity: 1;
  max-height: 120px;
}

/* Tap button */
.mem-tap-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background: rgba(124, 1, 22, 0.9);
  color: var(--cream);
  border: 1px solid var(--hibiscus-dim);
  border-radius: 50px;
  padding: 10px 22px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
}
.mem-tap-btn:hover { background: var(--cherry-bright); transform: translate(-50%, -50%) scale(1.05); }
.mem-card[data-state="4"] .mem-tap-btn { display: none; }

/* To letter CTA */
.to-letter-wrap {
  text-align: center;
  padding: 48px 20px 20px;
}

/* ══════════════════════════════════════════════
   SECTION 6 — LETTER
══════════════════════════════════════════════ */
#s6 { overflow: hidden; }

.letter-bg {
  position: absolute;
  inset: 0;
  background-image: url('assets/special/bg4.jpeg');
  background-size: cover;
  background-position: center;
  filter: blur(3.4px) brightness(0.28) saturate(0.55);
}

.letter-tint {
  position: absolute;
  inset: 0;
  background: rgba(14, 3, 5, 0.5);
}

.letter-wrap {
  position: relative;
  z-index: 5;
  max-width: 680px;
  width: 92%;
  max-height: 82vh;
  background: rgba(14, 3, 5, 0.92);
  border: 1px solid rgba(224, 164, 176, 0.16);
  border-radius: 4px;
  padding: 54px 50px;
  animation: slideUp 0.5s ease both;
}

.letter-date {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(224, 164, 176, 0.38);
  letter-spacing: 0.1em;
  margin-bottom: 24px;
}

.letter-dear {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.75rem;
  color: var(--hibiscus);
  margin-bottom: 24px;
}

.letter-body {
  font-family: var(--font-body);
  font-size: 0.94rem;
  line-height: 2.1;
  color: var(--cream);
}
.letter-body p { margin-bottom: 18px; }

.hindi { font-style: italic; color: var(--hibiscus); }

.letter-closing-line {
  color: var(--hibiscus) !important;
  font-style: italic;
}

.letter-sign {
  margin-top: 36px;
  text-align: right;
  font-family: var(--font-display);
  font-style: italic;
  color: var(--hibiscus);
  line-height: 1.9;
  font-size: 1.05rem;
  border-top: 1px solid rgba(224, 164, 176, 0.12);
  padding-top: 20px;
}

.letter-footer-btn {
  text-align: center;
  margin-top: 40px;
}

/* ══════════════════════════════════════════════
   FINAL POPUP
══════════════════════════════════════════════ */
.final-bg-img {
  position: absolute;
  inset: 0;
  background-image: url('assets/special/bg4.jpeg');
  background-size: cover;
  background-position: center;
  filter: blur(4px) brightness(0.22);
}

.final-box {
  position: relative;
  z-index: 5;
  max-width: 520px;
  background: linear-gradient(145deg, rgba(26,5,7,0.97), rgba(42,13,16,0.97));
}

.final-msg {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 0.98rem;
  line-height: 1.95;
  color: var(--cream);
  margin-bottom: 28px;
}
.final-msg strong { color: var(--hibiscus); font-style: normal; }

/* ══════════════════════════════════════════════
   END SCREEN
══════════════════════════════════════════════ */
#end-screen {
  position: fixed;
  inset: 0;
  z-index: 400;
  background: var(--dark);
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#end-screen.hidden { display: none !important; }

.end-content { animation: fadeInDown 0.9s ease both; }

.end-big {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2rem, 6vw, 4.5rem);
  color: var(--hibiscus);
  margin-bottom: 16px;
}

.end-small {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  color: rgba(224, 164, 176, 0.5);
}

/* ══════════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════════ */
.confetti-piece {
  position: fixed;
  border-radius: 2px;
  z-index: 1000;
  pointer-events: none;
  animation: confettiFall linear forwards;
}

@keyframes confettiFall {
  0%   { top: -40px; transform: rotate(0deg); opacity: 1; }
  100% { top: 110vh; transform: rotate(900deg); opacity: 0; }
}

/* ══════════════════════════════════════════════
   KEYFRAMES
══════════════════════════════════════════════ */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes shake {
  0%,100% { transform: translateX(0); }
  20%     { transform: translateX(-14px); }
  40%     { transform: translateX(14px); }
  60%     { transform: translateX(-7px); }
  80%     { transform: translateX(7px); }
}

@keyframes glitch {
  0%,  80%, 100% { text-shadow: none; }
  82% { text-shadow: -3px 0 #ff1744, 3px 0 #00e5ff; }
  84% { text-shadow:  3px 0 #ff1744, -3px 0 #00e5ff; }
  86% { text-shadow: -3px 0 #ff1744, 3px 0 #00e5ff; }
}

/* ══════════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════════ */
@media (max-width: 700px) {
  .modal-box { padding: 36px 24px; }
  .verdict-panel { padding: 36px 24px; }
  .letter-wrap { padding: 36px 22px; }

  /* Punishment buttons tighten on mobile */
  .pun-btn { width: 88px; font-size: 0.64rem; padding: 8px 8px; }
  .pun-emo { font-size: 1.2rem; }
  .pun-tl  { left: 1%;  top: 14%; }
  .pun-ml  { left: 1%;  top: 35%; }
  .pun-bl  { left: 1%;  top: 58%; }
  .pun-ltop { left: 13%; top: 6%; }
  .pun-lbot { left: 13%; top: 78%; }
  .pun-tr  { right: 1%;  top: 14%; }
  .pun-mr  { right: 1%;  top: 35%; }
  .pun-br  { right: 1%;  top: 58%; }
  .pun-rtop { right: 13%; top: 6%; }
  .pun-rbot { right: 13%; top: 78%; }

  .vika-main { width: min(150px, 32vw); }

  .mem-grid { grid-template-columns: 1fr 1fr; gap: 10px; padding: 0 12px; }
  .mem-header { padding: 70px 16px 22px; }
}

@media (max-width: 420px) {
  .mem-grid { grid-template-columns: 1fr; }
}
