$(document).ready(function () {
  if ($(this).hasClass("disable")) {
    return false;
  }
  $(".header .menu ul li").hover(
    function () {
      $(this).find("ul:first").slideDown(300);
    },
    function () {
      $(this).find("ul:first").hide(50);
    }
  );
});
$(document).ready(function () {
  if ($(this).hasClass("disable")) {
    return false;
  }
  $(".contain .container_mid .menu_mid .left ul li").hover(
    function () {
      $(this).find("ul:first").slideDown(300);
    },
    function () {
      $(this).find("ul:first").hide(50);
    }
  );
});
