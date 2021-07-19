$(document).ready(
  // porfolio projects filter

  $("#showAll").click(function () {
    $(".dev").fadeIn(1000);
    $(".UiUx").fadeIn(1000);
    $(".graphics").fadeIn(1000);
  }),
  $("#gSort").click(function () {
    $(".dev").fadeOut("slow");
    $(".UiUx").fadeOut("slow");
    $(".graphics").hide();
    $(".dev").css("display", "none");
    $(".UiUx").css("display", "none");
    $(".graphics").fadeIn(1000);
  }),
  $("#devSort").click(function () {
    $(".graphics").fadeOut("slow");
    $(".UiUx").fadeOut("slow");
    $(".dev").fadeOut("slow");
    $(".UiUx").css("display", "none");
    $(".graphics").css("display", "none");
    $(".dev").fadeIn(1000);
  }),
  $("#interfaceSort").click(function () {
    $(".graphics").fadeOut("slow");
    $(".UiUx").fadeOut("slow");
    $(".dev").fadeOut("slow");
    $(".dev").css("display", "none");
    $(".graphics").css("display", "none");
    $(".UiUx").fadeIn(1000);
  }),

  // projects details slide in.
  $(".read-on-menu-bar").click(function () {
    $(this)
      .parent()
      .siblings()
      .children(".slide-up-overlay")
      .addClass("slide-up-overlay_slideUp");
  }),

  // close portfolio slide-up-overlay
  $(".close-overlay").click(function () {
    $(this)
      .parent()
      .parent(".slide-up-overlay")
      .removeClass("slide-up-overlay_slideUp");
  })
);
