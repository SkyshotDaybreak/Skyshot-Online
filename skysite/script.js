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
    $("#openContact").click(function(){
      $("#contact").css("display", "block");
    });
    $("#closeContact").click(function(){
        $("#contact").css("display", "none");
    });
    
    $("#openMedia").click(function(){
        $("#sc").css("display", "block");
      });
    $("#closeMedia").click(function(){
        $("#media").css("display", "none");
    });
});
  