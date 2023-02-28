const labels = document.querySelectorAll(".input-label");
const hiddenEl = document.querySelectorAll(".hidden");
let btntoggle = document.querySelector(".btn-toggle-menu");
let menu = document.querySelector(".mobile-menu");
const boxes = document.querySelectorAll(".team-card");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`;
    })
    .join("");
});

btntoggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (e.target === menu) {
    menu.classList.remove("show");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("review");
    } else {
      entry.target.classList.remove("review");
    }
  });
});

hiddenEl.forEach((el) => observer.observe(el));

window.addEventListener("scroll", checktop);

checktop();

function checktop() {
  const triggerPoint = window.innerHeight * 0.5;
  boxes.forEach((box) => {
    let top = box.getBoundingClientRect().top;

    if (top < triggerPoint) {
      box.classList.add("show-card");
    } else {
      box.classList.remove("show-card");
    }
  });
}
