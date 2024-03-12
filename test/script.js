// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const dynamicTexts = document.querySelectorAll(".dynamic-txts li span");

dynamicTexts.forEach((text, index) => {
  let letters = text.textContent.split("");
  text.textContent = "";
  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    text.append(span);
  });
});

// var cursor1 = document.querySelector(".cursor1");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove", function(e) {
//     cursor1.style.transform = cursor2.style.transform = "translate(-50%, -50%) translate(" + e.clientX + "px, " + e.clientY + "px)";
// })

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
];

// const colors = [
//   "#ffb56b",
//   "#fdaf69",
//   "#f89d63",
//   "#f59761",
//   "#ef865e",
//   "#ec805d",
//   "#e36e5c",
//   "#df685c",
//   "#d5585c",
//   "#d1525c",
//   "#c5415d",
//   "#c03b5d",
//   "#b22c5e",
//   "#ac265e",
//   "#9c155f",
//   "#950f5f",
//   "#830060",
//   "#7c0060",
//   "#680060",
//   "#60005f",
//   "#48005f",
//   "#3d005e"
// ];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
