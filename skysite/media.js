$(document).ready(function(){
    let game_list = [
        {
            title = "Final Fantasy XIV: Heavensward",
            thumb = 2,
            desc = "",

        },
        {
            title = "Resident Evil 2 Remake",
            thumb = 4,
            desc = "",

        },
        {
            title = "Resident Evil 3 Remake",
            thumb = 1,
            desc = "",

        },
        {
            title ="Resident Evil 4",
            thumb = 1,
            desc = "",

        },
        {
            title = "The Legend of Zelda: Tears of the Kingdom",
            thumb = 1,
            desc = "",

        },
        {
            title = "Fallout 3",
            thumb = 1,
            desc = "",

        }, {
            title = "Metal Gear Solid V: The Phantom Pain",
            thumb = 1,
            desc = "",

        },
        {
            title = "Marathon",
            thumb = 1,
            desc = "",

        },
        {
            title = "Halo 4",
            thumb = 1,
            desc = "",

        },
        {
            title = "Shin Megami Tensei Devil Summoner Soul Hackers",
            thumb = 1,
            desc = ""
        },
        {
            title = "Miscellaneous",
            thumb = 1,
            desc = ""
        }

    ];
    let musicList = [
        {
            meow = 1,
            mreow = 2
        },
        {
            meow = 1,
            mreow = 2
        }
    ];

    // 
    

    function display(item){ // expected -> array item property
        $("#mediaList").innerHTML += item.title += " " + item.thumb + " " + item.desc;
    };
    display(game_list[1]);

    for(var i = 0; i < game_list.length; i++){
        // var item = game_list[i];
        display(game_list[i]);
    };

    $("#openMedia").click(function(){
        // for(var i = 0; i < game_list.length; i++){
        //     display(game_list[i]);
        // };
        ("#mediaList").css = ({"display": "block"});
        // $("#mainBody").innerHTML += ("#mediaList");
        
    });

});
// 	document.getElementById("album_text").innerHTML += "<h2>" + item.album_name + "</h2><h3 style='margin-top:-26px;margin-bottom:-18px'>" + item.artist_name + "</h3><h3>â†’" + item.year + "</h3><p>" + item.desc + "</p>"