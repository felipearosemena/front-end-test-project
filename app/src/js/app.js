$(function(){
  $("#content > .item").click(function(){
    var $elementID = $("#" + $(this).attr("id"));
    $elementID.find(".close").fadeIn(100);
    $elementID.find(".galery").fadeIn(100);
    $elementID.removeClass("item").addClass("expand");
    $elementID.addClass('show-element');

    return false;
  });

  $(".close").click(function(){
    var $elementID = $("#" + $(this).parent().attr("id"));
    $elementID.find(".close").fadeOut(100);
    $elementID.find(".galery").fadeOut(100);
    $elementID.removeClass("expand").addClass("item");
    $elementID.removeClass('show-element');

    return false;
  });

})