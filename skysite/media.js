// 
let game_list = [
{
    title: "Final Fantasy XIV: Heavensward",
    thumb: 2,
    desc: "My second year in Eorzea, I'm about on pace for one expansion per year. As many have acclaimed, Heavensward truely blows A Realm Reborn out of the water. The amped up production in cutscene work and area design were highlights for me.",

},
{
    title : "Resident Evil 2 Remake",
    thumb : 4,
    desc : "After getting into the survival horror genre a few years ago with Signalis, I was hooked. My first full Resident Evil experience after briefly playing the first REmake on the Gamecube. This game totally sold me on why these games, and especially this remake, is so adored. It managed to often, truely, spook me. ",

},
{
    title : "Resident Evil 3 Remake",
    thumb : 1,
    desc : "Not as beloved as RE2R. However I still managed to enjoy the brief fun this game delivers. ",

},
{
    title :"Resident Evil 4",
    thumb : 1,
    desc : "ongoing",

},
{
    title : "The Legend of Zelda: Tears of the Kingdom",
    thumb : 1,
    desc : "Another game that, as time passed, has come under less favorable criticism. I think to properly enjoy Tears, you probably need a great amount of time since playing Breath of the Wild. When Tears came out, I dropped it about 40 hours in (nothing to scoff at), but I couldn't finish. It took another 2 years after release for me to get really hooked. Even more time since I played BOTW. With this new lens, it seems clear to me that Tears is almost a direct upgrade of a game. I'm obsessed.",

},
{
    title :"Fallout 3",
    thumb : 1,
    desc : "TOTW. nostalgia unmatched. mid comfort game",

}, {
    title : "Metal Gear Solid V: The Phantom Pain",
    thumb : 1,
    desc : "After playing both MGS2, MGS3, and MGSR, I didn't enjoy MGS5 as much. There are much more interlinked complex game systems in a handful of open zone areas, but I personally prefer the more linear focused experiences of the earlier games. MGS5 is not a bad game by any means, just less hooking for me",

},
{
    title : "Marathon",
    thumb : 1,
    desc : "I wish I could dedicate myself",

},
{
    title : "Halo 4",
    thumb : 1,
    desc : "first palythru. Played this on the Master Chief Collection on Heroic with one of my close friends. I was terribly sick during the experience. decent",

},
{
    title : "Shin Megami Tensei Devil Summoner Soul Hackers",
    thumb : 1,
    desc : "addicting old school jrpg"
},
{
    title : "Miscellaneous",
    thumb : 1,
    desc : "idk brah"
}

];
let musicList = [
    {
        title : "Ceres and Calypso in the Deep Time",
        desc : "best album evah"
    },
    {
        title : "nurture",
        desc : "look at the sky brah"
    }
];
let bookList = [
    {
        title: "Persona",
        desc: "meow"
    },
    {
        title: "Pale Fire",
        desc: "meow2"
    },
    {
        title: "Go Tell it on the Mountain",
        desc: "meow3"
    },
    {
        title: "Yokohama",
        desc: ""
    }, 
    {
        title: "forget-me-not",
        desc: ""
    }
]

function display(item) { // expected array object
    $("#mediaList").append("<p>" + "<i>" + item.title + "</i> <br>" + item.desc + " </p><br>")
}