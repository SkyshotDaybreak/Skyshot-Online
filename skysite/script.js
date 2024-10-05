$(document).ready(function () {
    $(".border").draggable();

    $(".open").click(function(){
      $("#contact").css("display", "block");
    });
    $(".close").click(function(){
        $("#contact").css("display", "none");
      });
  });