$(document).ready(function(){

    // sidebar selections
    $("#openHome").click(function(){
        $("#mainBody").html($("#landing").html());
    });
    $("#openAbout").click(function(){
        $("#mainBody").html($("#about").html());
    });
    $("#openSocials").click(function(){
        $("#mainBody").html($("#socials").html());
    });
    $("#openMedia").click(function(){
        $("#mainBody").html($("#media").html());
        for (let i = 0; i < game_list.length; i++){
            display(game_list[i]);
        }
    });
    






});
  