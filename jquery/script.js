$(document).ready(function () {
  $(".game1").hover(function () {
    var src1 = $(this).find(".img_none").attr("src");
    console.log(src1);
    $(document).find(".img_hover img").attr("src", src1);
    var src2 = $(document).find(".img_hover img").attr("src");
    console.log(src2);
  });
});
