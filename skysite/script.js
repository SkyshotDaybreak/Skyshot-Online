$(document).ready(function(){
    
    //draggable only over the topbar
    // $( ".topbar" ).hover( 
    //     function() {
    //         $(".border").draggable({ disabled: false });
    //     }, function () {
    //         $(".border").draggable({ disabled: true });
    //     }
    // );

    //open/closing window
    $("#openContact").click(function(){
        $("#contact").css("display", "block");
        $("main").css("display", "none");
    });
    $("#closeContact").click(function(){
        $("#contact").css("display", "none");
        $("main").css("display", "block");
    });
    
    $("#openMedia").click(function(){
        $("#media").css("display", "block");
        $("main").css("display", "none");
      });
    $("#closeMedia").click(function(){
        $("#media").css("display", "none");
        $("main").css("display", "block");
    });

    // sidebar selections
    $("#openAbout").click(function(){
        $("#landing").html($("#about").html());
    });

});
  