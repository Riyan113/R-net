
const texts = [
  "Full-Stack Developer",
  "Laravel & Tailwind Enthusiast",
  "Tech Explorer & Coder",
  "Building Digital Experiences",
  "Passionate About Code",
  "Code. Design. Deploy.",
  "Bringing Ideas to Life",
  "Creating with Logic & Creativity",
  "Coding the Future",
  "Problem Solver | Code Addict",
];

let index = 0;
let charIndex = 0;
const textElement = document.getElementById("changing-text");

function typeText() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

typeText();
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');

document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuContent = document.getElementById("mobile-menu-content");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenuContent.classList.remove("translate-x-full");
    }, 10);
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenuContent.classList.add("translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  });

  mobileMenu.addEventListener("click", function (e) {
    if (e.target === mobileMenu) {
      mobileMenuContent.classList.add("translate-x-full");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }
  });
});

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
  constructor(x = null, y = null) {
    this.x = x !== null ? x : Math.random() * canvas.width;
    this.y = y !== null ? y : Math.random() * -canvas.height;
    this.size = Math.random() * 5 + 2;
    this.speed = Math.random() * 3 + 1;
    this.opacity = Math.random() * 0.5 + 0.5;
    this.angle = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.05;
  }

  update() {
    this.y += this.speed;
    this.angle += this.rotationSpeed;

    if (this.y > canvas.height) {
      this.y = Math.random() * -canvas.height;
      this.x = Math.random() * canvas.width;
      this.angle = Math.random() * Math.PI * 2;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      let angle = (Math.PI / 2.5) * i;
      let x = Math.cos(angle) * this.size;
      let y = Math.sin(angle) * this.size;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
    ctx.restore();
  }
}

const stars = [];
function createStars(num) {
  for (let i = 0; i < num; i++) {
    stars.push(new Star());
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animateStars);
}

createStars(50);
animateStars();

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const maxLength = textarea.getAttribute("maxlength");

  textarea.addEventListener("input", function () {
      const currentLength = textarea.value.length;
      charCount.textContent = `${currentLength}/${maxLength}`;

      if (currentLength > 0) {
          charCount.classList.remove("hidden");
      } else {
          charCount.classList.add("hidden");
      }
  });
});




