/* =========================
   Valentine Card for Abby
   Vanilla JS
   ========================= */

const card = document.getElementById("card");
const cardStage = document.getElementById("cardStage");
const yesOverlay = document.getElementById("yesOverlay");
const yesBox = document.getElementById("yesBox");
const noBox = document.getElementById("noBox");
const noLabel = document.getElementById("noLabel");
const moreBtn = document.getElementById("moreBtn");

const galleryStage = document.getElementById("galleryStage");
const galleryBg = document.getElementById("galleryBg");
const thumbRow = document.getElementById("thumbRow");
const thumbViewport = document.getElementById("thumbViewport");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* ---------- Card state ---------- */
let isOpened = false;
let isOnBack = false;
let yesChosen = false;

/* Open card on click/tap/Enter */
function openCard() {
  if (isOpened) return;
  isOpened = true;
  card.classList.add("opened");
  card.setAttribute("aria-label", "Valentine card opened");
}

/* Card click: open only when not opened yet */
card.addEventListener("click", () => {
  if (!isOpened) openCard();
});

card.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && !isOpened) {
    e.preventDefault();
    openCard();
  }
});

/* ---------- Yes/No logic (checkboxes) ---------- */
function setOnlyYesChecked() {
  yesBox.checked = true;
  noBox.checked = false;
}

function showYesOverlay() {
  yesOverlay.classList.add("show");
  // hide after a moment
  setTimeout(() => yesOverlay.classList.remove("show"), 1400);
}

/* When YES clicked: heart animation, then flip to back */
yesBox.addEventListener("change", () => {
  if (yesChosen) return;
  if (yesBox.checked) {
    yesChosen = true;

    setOnlyYesChecked();
    showYesOverlay();

    // Flip to back after overlay moment
    setTimeout(() => {
      card.classList.remove("opened");
      card.classList.add("to-back");
      isOnBack = true;
      const fireAudio = new Audio("assets/fireworks.mp3");

      startFireworks();
      fireAudio.play(); // ensure fireworks running
    }, 900);
  }
});

/* NO runs away - do not allow selection */
noBox.addEventListener("change", (e) => {
  // If somehow toggled, immediately undo
  noBox.checked = false;
});

/* ---------- "No" runs away behavior ---------- */
function moveNoSomewhere() {
  if (yesChosen) return;

  const leftPanel = document.getElementById("insideLeft");

  // Make it absolute so it can roam freely in the left panel
  noLabel.classList.add("running");
  leftPanel.appendChild(noLabel); // ensure it's positioned within left panel

  const panelRect = leftPanel.getBoundingClientRect();

  // Padding so it doesn't clip edges
  const pad = 12;

  // Reserve space near bottom for the tiny-bottom text
  const bottomReserve = 56;

  const maxX = Math.max(pad, panelRect.width - noLabel.offsetWidth - pad);
  const maxY = Math.max(
    pad,
    panelRect.height - noLabel.offsetHeight - pad - bottomReserve,
  );

  const x = rand(pad, maxX);
  const y = rand(pad + 60, maxY); // +60 keeps it away from the top corner art a bit

  noLabel.style.left = `${x}px`;
  noLabel.style.top = `${y}px`;
}

/* Trigger the run-away on hover, touch, or pointer approach */
["mouseenter", "pointerenter", "touchstart", "pointerdown"].forEach((evt) => {
  noLabel.addEventListener(
    evt,
    (e) => {
      // Don’t do anything once yes was chosen
      if (yesChosen) return;

      // Prevent "No" from being clicked on touch/pointerdown
      if (evt === "pointerdown" || evt === "touchstart") {
        e.preventDefault();
      }

      moveNoSomewhere();
    },
    { passive: false },
  );
});

/* Also run away if user tries to focus it (keyboard) */
noLabel.addEventListener("focusin", () => {
  if (yesChosen) return;
  moveNoSomewhere();
});

/* ---------- Back "Click for more" ---------- */
moreBtn.addEventListener("click", () => {
  // Hide card stage, show gallery stage
  cardStage.classList.add("hidden");
  galleryStage.classList.remove("hidden");
  initGallery();
});

/* =========================
   Fireworks (canvas)
   Valentine-themed
   ========================= */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let fwRunning = false;
let particles = [];
let rockets = [];
let lastTime = 0;

function resizeCanvasToDisplaySize() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(1, window.devicePixelRatio || 1);

  const w = Math.floor(rect.width * dpr);
  const h = Math.floor(rect.height * dpr);

  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}
window.addEventListener("resize", resizeCanvasToDisplaySize);

/* Particle helper */
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function addRocket() {
  const w = canvas.width;
  const h = canvas.height;

  rockets.push({
    x: rand(w * 0.15, w * 0.85),
    y: h + 10,
    vx: rand(-0.25, 0.25),
    vy: rand(-6.2, -8.6),
    targetY: rand(h * 0.18, h * 0.45),
    exploded: false,
  });
}

function explode(x, y) {
  const count = Math.floor(rand(60, 90));

  for (let i = 0; i < count; i++) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(1.2, 5.2);

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: rand(50, 90),
      age: 0,
      gravity: 0.06,
      drag: 0.985,
      // Pink/red/white palette
      colorPick: Math.random(),
    });
  }

  // Add a few "heart" sparks (drawn as small heart shapes)
  for (let j = 0; j < 10; j++) {
    particles.push({
      x,
      y,
      vx: rand(-2.2, 2.2),
      vy: rand(-2.2, 2.2),
      life: rand(55, 90),
      age: 0,
      gravity: 0.04,
      drag: 0.988,
      colorPick: 0.999, // treat as special
      isHeart: true,
    });
  }
}

function pickColor(t) {
  // t in [0,1] roughly
  // return rgba string in valentine palette
  if (t > 0.85) return "rgba(255,255,255,";
  if (t > 0.55) return "rgba(255,95,162,";
  return "rgba(255,45,117,";
}

function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  // Simple heart curve
  ctx.moveTo(0, 0.35);
  ctx.bezierCurveTo(-0.5, -0.05, -0.45, -0.55, 0, -0.25);
  ctx.bezierCurveTo(0.45, -0.55, 0.5, -0.05, 0, 0.35);
  ctx.closePath();
  ctx.fillStyle = `rgba(255,255,255,${alpha})`;
  ctx.fill();
  ctx.restore();
}

function stepFireworks(ts) {
  if (!fwRunning) return;
  resizeCanvasToDisplaySize();

  const dt = Math.min(32, ts - lastTime || 16);
  lastTime = ts;

  // Fade frame (trail effect)
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // launch rockets randomly
  if (Math.random() < 0.07) addRocket();

  // update rockets
  rockets = rockets.filter((r) => !r.exploded);
  for (const r of rockets) {
    r.x += r.vx * dt;
    r.y += r.vy * dt;
    r.vy += 0.02 * dt;

    // draw rocket
    ctx.beginPath();
    ctx.arc(r.x, r.y, 2.2 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();

    if (r.y <= r.targetY) {
      r.exploded = true;
      explode(r.x, r.y);
    }
  }

  // update particles
  particles = particles.filter((p) => p.age < p.life);
  for (const p of particles) {
    p.age += dt / 16;

    p.vx *= p.drag;
    p.vy *= p.drag;
    p.vy += p.gravity * (dt / 16);

    p.x += p.vx * (dt / 16);
    p.y += p.vy * (dt / 16);

    const t = p.age / p.life;
    const alpha = Math.max(0, 1 - t);

    if (p.isHeart) {
      drawHeart(
        p.x,
        p.y,
        (10 * (window.devicePixelRatio || 1)) / 10,
        alpha * 0.9,
      );
    } else {
      const base = pickColor(p.colorPick);
      ctx.fillStyle = base + (alpha * 0.9).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8 * (window.devicePixelRatio || 1), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  requestAnimationFrame(stepFireworks);
}

function startFireworks() {
  if (fwRunning) return;
  fwRunning = true;

  // initial clear
  resizeCanvasToDisplaySize();
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(stepFireworks);
}

// Start fireworks only once we reach back, but you can also prewarm:
startFireworks();

/* =========================
   Gallery: arrows + moving thumbs + fullscreen bg
   ========================= */

const images = [
  // PLACEHOLDERS (swap these out)
  "assets/daKiss.jpg",
  "assets/abbyAndMe.jpg",
  "assets/abbyAndITreasure.jpg",
  "assets/sauceBoss.PNG",
  "assets/abbyAndDex.png",
  "assets/abbyAndIBecca.jpeg",
  "assets/abbyAndI.jpeg",
  "assets/abbyAndISilly.jpeg",
  "assets/abbyAndISilly2.jpeg",
  "assets/abbyAndI2.jpeg",
  "assets/abbyAndI3.jpeg",
];

let activeIndex = 0;

function setBackground(url) {
  // quick crossfade
  galleryBg.style.opacity = "0";
  setTimeout(() => {
    galleryBg.style.backgroundImage = `url("${url}")`;
    // galleryBg.style.backgroundSize = "90%";
    galleryBg.style.opacity = "1";
  }, 120);
}

function renderThumbs() {
  thumbRow.innerHTML = "";

  images.forEach((src, idx) => {
    const btn = document.createElement("button");
    btn.className = "thumb";
    btn.type = "button";
    btn.setAttribute("aria-label", `Photo ${idx + 1}`);
    btn.addEventListener("click", () => {
      activeIndex = idx;
      syncGalleryUI();
    });

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Memory ${idx + 1}`;
    img.style.width = "100%";

    btn.appendChild(img);
    thumbRow.appendChild(btn);
  });
}

function centerActiveThumb() {
  // Move the thumb row so the active thumb is roughly centered in the viewport
  const thumbs = [...thumbRow.children];
  if (!thumbs.length) return;

  const viewportRect = thumbViewport.getBoundingClientRect();
  const active = thumbs[activeIndex];
  const activeRect = active.getBoundingClientRect();

  // Compute current translateX from transform (if any)
  const style = window.getComputedStyle(thumbRow);
  const matrix = new DOMMatrixReadOnly(
    style.transform === "none" ? undefined : style.transform,
  );
  const currentX = matrix.m41 || 0;

  // desired shift:
  const viewportCenterX = viewportRect.left + viewportRect.width / 2;
  const activeCenterX = activeRect.left + activeRect.width / 2;
  const delta = viewportCenterX - activeCenterX;

  const nextX = currentX + delta;

  // Clamp so you can't scroll beyond ends
  const rowRect = thumbRow.getBoundingClientRect();
  const totalWidth = rowRect.width;
  const viewportWidth = viewportRect.width;

  // row left at transform 0 would be viewport left + padding area; easiest clamp:
  // We'll measure max scroll based on content width minus viewport width.
  const maxLeft = 0;
  const maxRight = Math.min(0, viewportWidth - totalWidth);

  const clamped = Math.max(maxRight, Math.min(maxLeft, nextX));
  thumbRow.style.transform = `translateX(${clamped}px)`;
}

function syncGalleryUI() {
  const thumbs = [...thumbRow.children];
  thumbs.forEach((t, i) => t.classList.toggle("active", i === activeIndex));
  setBackground(images[activeIndex]);

  // after render + class updates, center it
  requestAnimationFrame(centerActiveThumb);
}

function initGallery() {
  renderThumbs();
  activeIndex = 0;
  setBackground(images[0]);
  syncGalleryUI();
  const song = new Audio("assets/song.m4a");
  song.play();
}

/* Arrow controls */
prevBtn.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  syncGalleryUI();
});

nextBtn.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % images.length;
  syncGalleryUI();
});

/* Optional: swipe support on mobile for gallery */
let touchStartX = null;
galleryStage.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);

galleryStage.addEventListener("touchend", (e) => {
  if (touchStartX == null) return;
  const endX = e.changedTouches[0].clientX;
  const dx = endX - touchStartX;
  touchStartX = null;

  if (Math.abs(dx) > 50) {
    if (dx > 0) {
      activeIndex = (activeIndex - 1 + images.length) % images.length;
    } else {
      activeIndex = (activeIndex + 1) % images.length;
    }
    syncGalleryUI();
  }
});

/* Make sure "No" starts in normal flow until it runs */
function resetNoPosition() {
  noLabel.classList.remove("running");
  noLabel.style.left = "";
  noLabel.style.top = "";
}
resetNoPosition();

if (isOnBack == true) {
  const fireAudio = new Audio("assets/fireworks.mp3");
  fireAudio.play();
}
