// public/site.js

// (1) Mouse glow tracking
const root = document.documentElement;
window.addEventListener("pointermove", (e) => {
  root.style.setProperty("--mx", `${e.clientX}px`);
  root.style.setProperty("--my", `${e.clientY}px`);
});

// (2) Scroll reveal via IntersectionObserver
const revealEls = Array.from(document.querySelectorAll(".reveal"));
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));
}

// (3) Animated counters (supports "8", "20+", "10+")
function animateCounter(el) {
  const raw = el.dataset.value || el.textContent || "";
  const match = String(raw).trim().match(/^(\d+)\s*(\+)?$/);
  if (!match) return; // not a simple number or "number+"

  const target = parseInt(match[1], 10);
  const hasPlus = !!match[2];

  const start = 0;
  const duration = 900;
  const t0 = performance.now();

  function tick(now) {
    const p = Math.min(1, (now - t0) / duration);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(start + (target - start) * eased);
    el.textContent = hasPlus ? `${val}+` : `${val}`;
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const counterEls = Array.from(document.querySelectorAll(".statCounter"));
if (counterEls.length) {
  // Trigger counters when stats becomes visible
  const statsSection = document.querySelector(".stats");
  let ran = false;

  if (statsSection) {
    const io2 = new IntersectionObserver(
      (entries) => {
        if (ran) return;
        if (entries.some((x) => x.isIntersecting)) {
          ran = true;
          counterEls.forEach(animateCounter);
          io2.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io2.observe(statsSection);
  } else {
    counterEls.forEach(animateCounter);
  }
}