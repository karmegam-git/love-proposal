/*************************************************
 * NAVIGATION (PAGE 1 → PAGE 2)
 *************************************************/
function goProposal() {
  window.location.href = "proposal.html";
}

/*************************************************
 * PASSWORD PROTECTION (PAGE 2 ONLY)
 *************************************************/
function unlock() {
  const passInput = document.getElementById("password");
  if (!passInput) return;

  const pass = passInput.value;

  // 🔐 CHANGE PASSWORD HERE
  if (pass === "forever") {
    const lock = document.getElementById("lockScreen");
    const content = document.getElementById("content");

    if (lock) lock.style.display = "none";
    if (content) content.style.display = "block";
  } else {
    alert("Wrong password 💔");
  }
}

/*************************************************
 * ACCEPT PROPOSAL BUTTON
 *************************************************/
function accept() {
  const result = document.getElementById("result");
  if (!result) return;

  result.innerHTML =
    "She said YES 💍💙<br>Forever starts now.";
}

/*************************************************
 * 🎆 COUNTDOWN TO NEXT NEW YEAR
 *************************************************/
(function newYearCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  // ⏳ CHANGE YEAR HERE IF NEEDED
  const nextYear = new Date("January 1, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = nextYear - now;

    if (diff <= 0) {
      countdownEl.innerHTML = "🎆 Happy New Year 🎆";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML =
      `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }, 1000);
})();

/*************************************************
 * 💙 SKY-BLUE FLOATING LIGHT PARTICLES (CANVAS)
 *************************************************/
(function skyBlueParticles() {
  const canvas = document.getElementById("loveCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1.5,
    s: Math.random() * 0.6 + 0.2,
    a: Math.random() * 0.5 + 0.3
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(220, 245, 255, 0.85)";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.y -= p.s;
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
})();

/*************************************************
 * 🎵 PLAY MUSIC ON FIRST USER INTERACTION
 *************************************************/
(function enableMusicOnClick() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  function playMusic() {
    music.volume = 0.4;
    music.play().catch(() => {});
    document.removeEventListener("click", playMusic);
    document.removeEventListener("touchstart", playMusic);
  }

  document.addEventListener("click", playMusic);
  document.addEventListener("touchstart", playMusic);
})();
