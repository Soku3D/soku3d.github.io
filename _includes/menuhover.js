$(document).ready(function () {
  $(".menu>a").mouseover(function () {
    $(this).next("ul").slideDown();
  });
});
