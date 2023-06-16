$(document).ready(function () {
  $("nav div.wrapper ul li ").click(function () {
    $(this).siblings().find(".mega-box").addClass("active");
    $(this).find(".mega-box").toggleClass("active");
  });

  $(".hidden_btn").click(function () {
    $(this).next().toggleClass("active");
  });
});
