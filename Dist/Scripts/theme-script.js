// function alertMe() {
//   alert("page loaded");
// }

// Portfolio filter script

$(document).ready(
  $("#gSort").click(function () {
    $(".dev").fadeOut("slow");
    $(".UiUx").hide();
    $(".graphics").show();
  })

  // $("#devSort").click(function () {
  //   $(".graphics").hide();
  //   $("#gSort").fadeOut();
  //   $(".dev").css("display", "block");
  // }),

  // $("#interfaceSort").click(function () {
  //   $(".graphics").css("display", "none");
  //   $(".dev").css("display", "none");
  //   $(".UiUx").css("display", "block");
  // })
);
