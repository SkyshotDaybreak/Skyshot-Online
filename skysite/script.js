$(document).ready(function () {
    $("#mainBody").html($("#landing").html());

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
        $("#mediaTab").css("display", "block");
    });
    $("#mediaGame").click(function(){
        $("#mainBody").html($("#media").html());
        for (let i = 0; i < game_list.length; i++){
            display(game_list[i]);
        }
        $("#mediaTab").css("display", "none");
    });
    $("#mediaMusic").click(function(){
        $("#mainBody").html($("#media").html());
        for (let i = 0; i < musicList.length; i++){
            display(musicList[i]);
        }
        $("#mediaTab").css("display", "none");
    });
    $("#mediaBook").click(function(){
        $("#mainBody").html($("#media").html());
        for (let i = 0; i < bookList.length; i++){
            display(bookList[i]);
        }
        $("#mediaTab").css("display", "none");

    });
    






});
  