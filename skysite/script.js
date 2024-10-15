$(document).ready(function(){
    
    //draggable only over the topbar
    $( ".topbar" ).hover( 
        function() {
            $(".border").draggable({ disabled: false });
        }, function () {
            $(".border").draggable({ disabled: true });
        }
    );

    //open/closing window
    $(".open").click(function(){
      $("#contact").css("display", "block");
    });
    $(".close").click(function(){
        $("#contact").css("display", "none");
      });
  });