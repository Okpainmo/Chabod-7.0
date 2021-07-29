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

// projects overlay-slide-up and overlay-slide-down -- start

const projectOverlayBtn = document.querySelectorAll(".read-on-menu-bar");
const closeProjectOverlayBtn = document.querySelectorAll(".close-overlay");

projectOverlayBtn.forEach(function (each) {
  each.addEventListener("click", function () {
    this.parentNode.previousSibling.previousSibling.childNodes[1].classList.remove(
      "slide-up-overlay_slideDown"
    );
    this.parentNode.previousSibling.previousSibling.childNodes[1].classList.add(
      "slide-up-overlay_slideUp"
    );
  });
});

closeProjectOverlayBtn.forEach(function (each) {
  each.addEventListener("click", function slideDownOverlay() {
    this.parentNode.parentNode.classList.remove("slide-up-overlay_slideUp");
    this.parentNode.parentNode.classList.add("slide-up-overlay_slideDown");
  });
});

// projects overlay-slide-up and overlay-slide-down -- end

// Display and hide main-overlay and content(project stories and blog stories) -- start

const closeMainOverlayBtn = document.querySelectorAll(
  ".close-main-overlay-btn"
);
const showProjectStory = document.querySelectorAll(".project-story-link");
const projectStories = document.querySelectorAll(".project-story");
const showBlogStory = document.querySelectorAll(".seller-blog-story");
const blogStories = document.querySelectorAll(".blog-story");

for (let x = 0; x < 6; x++) {
  showProjectStory[x].addEventListener("click", function () {
    projectStories[x].style.display = "block";
    document.querySelector(".side-nav").style.filter = "blur(10px)";
    document.querySelector(".side-content").style.filter = "blur(10px)";
  });

  showBlogStory[x].addEventListener("click", function () {
    blogStories[x].style.display = "block";
    document.querySelector(".side-nav").style.filter = "blur(10px)";
    document.querySelector(".side-content").style.filter = "blur(10px)";
  });
}

closeMainOverlayBtn.forEach(function (each) {
  each.addEventListener("click", function closeMainOverlay() {
    document.querySelector(".side-nav").style.filter = "none";
    document.querySelector(".side-content").style.filter = "none";
    document.querySelectorAll(".main-overlay").forEach(function (each) {
      each.style.display = "none";
    });
  });
});

// Display and hide main-overlay and content(project stories and blog stories) -- end

// Event Listeners

gSort.addEventListener("click", showGraphics);
devSort.addEventListener("click", showDev);
UiUxSort.addEventListener("click", showUiUx);
showAll.addEventListener("click", displayAll);

// showProjectStory.forEach(function (each) {
//   each.addEventListener("click", ShowMainOverlay);
// });
