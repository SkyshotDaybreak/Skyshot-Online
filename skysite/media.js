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

    ]
    let musicList = [
        {
            meow = 1,
            mreow = 2
        },
        {
            meow = 1,
            mreow = 2
        }
    ]

    // 

    for (var i = 0; i <= game_list.length; i++){
        $("#mediaList").html(function(){
            $("mediaList").html(game_list[i].title);
        });
    };
});