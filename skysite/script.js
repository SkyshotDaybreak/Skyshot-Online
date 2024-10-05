$(document).ready(function () {
    $(".border").draggable();

    $(".clickable").click(function(){
      $("#music").css("display", "block");
    });
    $(".close").click(function(){
        $("#contact").css("display", "none");
      });
  });