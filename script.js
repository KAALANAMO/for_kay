/* ══════════════════════════════════════════════
   FOR KAY — script.js
   All interactive logic for the website
══════════════════════════════════════════════ */

const App = (() => {

  /* ════════════════════════════════
     STATE
  ════════════════════════════════ */
  let skipCount = 0;
  let punishCount = 0;
  let memoriesRestored = 0;
  const TOTAL_MEM = 11;
  const PUNISH_THRESHOLD = 5;

  let mugTimer = null;
  let mugIdx = 0;
  const MUG_SLIDES = ['mug0', 'mug1', 'mug2', 'mug3'];

  let reactionTimeout = null;

  /* ════════════════════════════════
     SKIP BUTTON TEXTS
  ════════════════════════════════ */
  const SKIP_TEXTS = [
    'okay fine, your loss 🙄',
    '...are you sure though?',
    'Kay. Kay. KAY.',
    'please i\'ll literally cry 😭',
    '...okay i\'m dragging you in. sorry.',
  ];

  /* ════════════════════════════════
     PUNISHMENT DATA
  ════════════════════════════════ */
  const PUNISHMENTS = [
    {
      img: 'assets/punish/p7_ignore.jpeg',
      text: 'He is being ignored. His soul is leaving his body in real time. This is fine. This is what he deserves. 😑'
    },
    {
      img: 'assets/punish/p9_phone.jpeg',
      text: 'NO PHONE. ONE WEEK. He does not know what to do with himself. He is shaking. Good. 📵'
    },
    {
      img: 'assets/punish/p4_bomb.jpeg',
      text: 'BOOM. Cartoon explosion. He is laughing through the smoke because honestly — fair. 💣😂'
    },
    {
      img: 'assets/punish/p5_feed.jpeg',
      text: 'Peas. Possibly worse. He is disgusted. Justice has been fully served. 🫛'
    },
    {
      img: 'assets/punish/p8_ex.jpeg',
      text: 'She is talking about the ex. He has gone very quiet. He has earned every second of this. 💔'
    },
    {
      img: 'assets/punish/p6_laugh.jpeg',
      text: 'NOOO NOT THE TICKLING. He is begging. Please. Please have mercy. Please. 🪶'
    },
    {
      img: 'assets/punish/p2_sad.jpeg',
      text: 'He said no. Look at that face trying to escape NAIL DUTY. The court has spoken. 💅'
    },
    {
      img: 'assets/punish/p1_hurt.jpeg',
      text: 'BLOCKED. He is staring at the screen. Waiting. Hoping. Nothing. As he should. 🚫'
    },
    {
      img: 'assets/punish/p3_sorry.jpeg',
      text: 'Full lecture incoming. He is nodding. He knows. He is sorry. He will do better. 📖'
    },
  ];

  /* ════════════════════════════════
     SECTION NAVIGATION
  ════════════════════════════════ */
  function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('active');
      if (id === 's5') el.scrollTop = 0;
    }
  }

  /* ════════════════════════════════
     OVERLAY HELPERS
  ════════════════════════════════ */
  function showOverlay(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  }

  function hideOverlay(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  }

  /* ════════════════════════════════
     AUDIO
  ════════════════════════════════ */
  function tryPlayAudio() {
    const audio = document.getElementById('bgm');
    if (!audio) return;
    audio.volume = 0.55;
    audio.play().catch(() => {
      // Autoplay blocked — audio will start after next user interaction
      const unlock = () => {
        audio.play().catch(() => {});
        document.removeEventListener('click', unlock);
      };
      document.addEventListener('click', unlock);
    });
  }

  /* ════════════════════════════════
     SECTION 1 — LANDING
  ════════════════════════════════ */
  function handleSkip() {
    const btn = document.getElementById('skip-btn');
    if (!btn) return;

    skipCount++;

    if (skipCount >= SKIP_TEXTS.length) {
      startJourney();
      return;
    }

    btn.textContent = SKIP_TEXTS[skipCount - 1];

    // Wobble animation
    btn.classList.remove('wobble');
    void btn.offsetWidth; // force reflow
    btn.classList.add('wobble');
    setTimeout(() => btn.classList.remove('wobble'), 450);

    // Nudge position slightly
    const x = (Math.random() - 0.5) * 70;
    const y = (Math.random() - 0.5) * 30;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }

  function startJourney() {
    hideOverlay('landing-modal');
    tryPlayAudio();
    setTimeout(() => {
      showSection('s2');
      startMugshots();
    }, 250);
  }

  /* ════════════════════════════════
     SECTION 2 — MUGSHOTS
  ════════════════════════════════ */
  function startMugshots() {
    // Ensure slide structure created in HTML has IDs
    const slides = document.querySelectorAll('.mug-slide');

    // Assign IDs dynamically if not present
    slides.forEach((slide, i) => {
      if (!slide.id) slide.id = 'mug' + i;
    });

    mugTimer = setInterval(() => {
      const current = document.querySelector('.mug-slide.active');
      if (current) current.classList.remove('active');
      mugIdx = (mugIdx + 1) % slides.length;
      slides[mugIdx].classList.add('active');
    }, 2300);

    // Show the case file button after 2s
    setTimeout(() => {
      const btn = document.getElementById('view-case-btn');
      if (btn) {
        btn.style.opacity = '1';
        btn.style.animation = 'none';
      }
    }, 2000);
  }

  function showFIR() {
    clearInterval(mugTimer);
    showOverlay('fir-overlay');
  }

  /* ════════════════════════════════
     SECTION 3 — PUNISHMENT
  ════════════════════════════════ */
  function goToPunishment() {
    hideOverlay('fir-overlay');
    showSection('s3');
  }

  function punish(idx) {
    const p = PUNISHMENTS[idx];
    if (!p) return;

    // Swap character image
    const img = document.getElementById('vika-img');
    if (img) {
      img.src = p.img;
      img.classList.remove('shake');
      void img.offsetWidth;
      img.classList.add('shake');
      setTimeout(() => img.classList.remove('shake'), 500);
    }

    showReaction(p.text);
    punishCount++;
    updateCounter();
  }

  function showReaction(text) {
    const bar = document.getElementById('reaction-bar');
    if (!bar) return;
    bar.textContent = text;
    bar.classList.add('show');
    clearTimeout(reactionTimeout);
    reactionTimeout = setTimeout(() => bar.classList.remove('show'), 3800);
  }

  function updateCounter() {
    const el = document.getElementById('pun-counter');
    if (!el) return;

    const remaining = PUNISH_THRESHOLD - punishCount;

    if (remaining > 0) {
      el.textContent = `punishments administered: ${punishCount} — ${remaining} more to unlock verdict`;
    } else {
      el.innerHTML = `punishment quota reached ⚖️ — <span style="color:var(--hibiscus);cursor:pointer;text-decoration:underline;" onclick="App.showError404()">read the verdict</span>`;
      const unlockBtn = document.getElementById('verdict-unlock');
      if (unlockBtn) unlockBtn.classList.remove('hidden');
    }
  }

  function openWriteOwn() {
    showOverlay('write-modal');
  }

  function closeWriteOwn() {
    hideOverlay('write-modal');
  }

  function saveOwn() {
    const input = document.getElementById('pun-input');
    const val = input ? input.value.trim() : '';
    closeWriteOwn();

    if (val) {
      showReaction(`Future punishment registered: "${val}" — he is already dreading it. 😶`);
      punishCount++;
      updateCounter();
      const img = document.getElementById('vika-img');
      if (img) img.src = 'assets/punish/p3_sorry.jpeg';
      if (input) input.value = '';
    }
  }

  /* ════════════════════════════════
     ERROR 404
  ════════════════════════════════ */
  function showError404() {
    showOverlay('error-modal');
  }

  function chooseViraj() {
    hideOverlay('error-modal');
    showReaction('She chose Viraj. The sentence continues. He understands. He waits. 😔 Keep punishing to unlock.');
  }

  function chooseVika() {
    hideOverlay('error-modal');
    showSection('s4');
  }

  /* ════════════════════════════════
     SECTION 4 — VERDICT
  ════════════════════════════════ */
  function goToMemories() {
    showSection('s5');
  }

  /* ════════════════════════════════
     SECTION 5 — MEMORIES
  ════════════════════════════════ */
  function tapMemory(card) {
    const state = parseInt(card.dataset.state || '0', 10);
    if (state >= 4) return;

    const next = state + 1;
    card.dataset.state = next;

    if (next === 4) {
      memoriesRestored++;
      updateHeart();

      if (memoriesRestored === TOTAL_MEM) {
        setTimeout(allMemoriesDone, 700);
      }
    }
  }

  function updateHeart() {
    const pct = Math.round((memoriesRestored / TOTAL_MEM) * 100);

    const prog = document.getElementById('hrt-prog');
    const pctEl = document.getElementById('hrt-pct');
    const icon = document.getElementById('hrt-icon');

    if (prog) prog.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '%';

    if (icon) {
      if (pct >= 80)      icon.textContent = '❤️';
      else if (pct >= 45) icon.textContent = '🧡';
      else                icon.textContent = '🤍';
    }

    if (pct >= 90) launchConfetti();
  }

  function allMemoriesDone() {
    // Fill heart to 100%
    const prog = document.getElementById('hrt-prog');
    const pctEl = document.getElementById('hrt-pct');
    const icon = document.getElementById('hrt-icon');
    if (prog) prog.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';
    if (icon) icon.textContent = '❤️';

    launchConfetti();
    setTimeout(launchConfetti, 700);

    // Show verdict popup
    setTimeout(() => showOverlay('mem-verdict-modal'), 1000);

    // Show proceed button
    const wrap = document.getElementById('to-letter-wrap');
    if (wrap) wrap.classList.remove('hidden');
  }

  function closeMV() {
    hideOverlay('mem-verdict-modal');
  }

  /* ════════════════════════════════
     SECTION 6 — LETTER
  ════════════════════════════════ */
  function goToLetter() {
    showSection('s6');
  }

  function showFinalModal() {
    showOverlay('final-modal');
  }

  /* ════════════════════════════════
     END JOURNEY
  ════════════════════════════════ */
  function endJourney(accepted) {
    hideOverlay('final-modal');

    const endScreen = document.getElementById('end-screen');
    const endBig = document.getElementById('end-big');

    if (endScreen) endScreen.classList.remove('hidden');

    launchConfetti();
    setTimeout(launchConfetti, 600);
    setTimeout(launchConfetti, 1300);

    if (!accepted && endBig) {
      endBig.textContent = 'bhaad mai jaa 😭';
      setTimeout(() => {
        endBig.textContent = '...okay but I still pizza you 🌻';
        launchConfetti();
      }, 2200);
    }
  }

  /* ════════════════════════════════
     CONFETTI
  ════════════════════════════════ */
  function launchConfetti() {
    const colors = [
      '#E0A4B0', '#7C0116', '#FBF5EE',
      '#C9A84C', '#ff85a1', '#ff6b9d',
      '#ffd6e0', '#c9184a'
    ];

    for (let i = 0; i < 80; i++) {
      setTimeout(() => {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.cssText = `
          left: ${Math.random() * 100}vw;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          animation-duration: ${2.4 + Math.random() * 2.2}s;
          animation-delay: ${Math.random() * 0.5}s;
          width: ${5 + Math.random() * 7}px;
          height: ${9 + Math.random() * 12}px;
          transform: rotate(${Math.random() * 360}deg);
          top: 0;
        `;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 5500);
      }, i * 22);
    }
  }

  /* ════════════════════════════════
     INIT
  ════════════════════════════════ */
  function init() {
    showSection('s1');
    // Show the landing modal
    showOverlay('landing-modal');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ════════════════════════════════
     PUBLIC API
  ════════════════════════════════ */
  return {
    handleSkip,
    startJourney,
    showFIR,
    goToPunishment,
    punish,
    openWriteOwn,
    closeWriteOwn,
    saveOwn,
    showError404,
    chooseViraj,
    chooseVika,
    goToMemories,
    tapMemory,
    closeMV,
    goToLetter,
    showFinalModal,
    endJourney,
  };

})();
