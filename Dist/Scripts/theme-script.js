const gSort = document.getElementById("gSort");
const devSort = document.getElementById("devSort");
const UiUxSort = document.getElementById("interfaceSort");
const showAll = document.getElementById("showAll");

function displayAll() {
  document.querySelectorAll(".graphics, .dev, .UiUx").forEach(function (each) {
    each.style.display = "block";
  });
  document.querySelectorAll(".graphics,.dev, .UiUx").forEach(function (each) {
    each.classList.add("show-all");
  });
}

function showGraphics() {
  document.querySelectorAll(".graphics,.dev, .UiUx").forEach(function (each) {
    each.classList.remove("show-all");
  });
  document.querySelectorAll(".graphics").forEach(function (each) {
    each.style.display = "block";
  });
  document.querySelectorAll(".dev, .UiUx").forEach(function (each) {
    each.style.display = "none";
  });
  document.querySelectorAll(".graphics").forEach(function (each) {
    each.classList.add("show-list");
  });
}

function showDev() {
  document.querySelectorAll(".graphics,.dev, .UiUx").forEach(function (each) {
    each.classList.remove("show-all");
  });
  document.querySelectorAll(".dev").forEach(function (each) {
    each.style.display = "block";
  });
  document.querySelectorAll(".graphics, .UiUx").forEach(function (each) {
    each.style.display = "none";
  });
  document.querySelectorAll(".dev").forEach(function (each) {
    each.classList.add("show-list");
  });
}

function showUiUx() {
  document.querySelectorAll(".graphics,.dev, .UiUx").forEach(function (each) {
    each.classList.remove("show-all");
  });
  document.querySelectorAll(".UiUx").forEach(function (each) {
    each.style.display = "block";
  });
  document.querySelectorAll(".graphics, .dev").forEach(function (each) {
    each.style.display = "none";
  });
  document.querySelectorAll(".UiUx").forEach(function (each) {
    each.classList.add("show-list");
  });
}

// projects overlay-slide-up

const projectOverlayBtn = document.querySelectorAll(".read-on-menu-bar");
const closeProjectOverlayBtn = document.querySelectorAll(".close-overlay");

function slideUpOverlay() {
  this.parentNode.previousSibling.previousSibling.childNodes[1].classList.remove(
    "slide-up-overlay_slideDown"
  );
  this.parentNode.previousSibling.previousSibling.childNodes[1].classList.add(
    "slide-up-overlay_slideUp"
  );
}

function slideDownOverlay() {
  this.parentNode.parentNode.classList.remove("slide-up-overlay_slideUp");
  this.parentNode.parentNode.classList.add("slide-up-overlay_slideDown");
}

// Display main-overlay and main-overlay-content-container

const showProjectStory = document.querySelectorAll(".project-story-link");

function ShowMainOverlay() {
  document.querySelector(".main-overlay").style.display = "block";
  document.querySelector(".side-nav").style.filter = "blur(10px)";
  document.querySelector(".side-content").style.filter = "blur(10px)";
}

const closeMainOverlayBtn = document.querySelectorAll(".close-main-overlay");

function closeMainOverlay() {
  document.querySelector(".main-overlay").style.display = "none";
  document.querySelector(".side-nav").style.filter = "none";
  document.querySelector(".side-content").style.filter = "none";
}
// Event Listeners
closeMainOverlayBtn.forEach(function (each) {
  each.addEventListener("click", closeMainOverlay);
});
gSort.addEventListener("click", showGraphics);
devSort.addEventListener("click", showDev);
UiUxSort.addEventListener("click", showUiUx);
showAll.addEventListener("click", displayAll);
projectOverlayBtn.forEach(function (each) {
  each.addEventListener("click", slideUpOverlay);
});
closeProjectOverlayBtn.forEach(function (each) {
  each.addEventListener("click", slideDownOverlay);
});
showProjectStory.forEach(function (each) {
  each.addEventListener("click", ShowMainOverlay);
});
