let randomResult;
let loss = 0;
let win = 0;
let addNums = 0;

let startGame = function () {
    $(".characters").empty();
    let images = [
        "https://images.search.yahoo.com/yhs/search;_ylt=AwrBXeiQFzFbmEkAnxUPxQt.?p=Jon+snow&fr=yhs-Lkry-SF01&fr2=piv-web&hspart=Lkry&hsimp=yhs-SF01&type=ANYS_A0DHG_set_bsf#id=0&iurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fc9%2F22%2Fd0%2Fc922d04e750f7bc63d4ed96210d00055.jpg&action=click",
        "assets/images/Daenerys-Targaryen-daenerys-targaryen-34863365-2362-3543.jpg",
        "assets/images/ad8f5717fc06f12636f33dd9d12d3636.jpg",
        "assets/images/become-game-thrones-white-walker-halloween.w1456.jpg"
    ];
    randomResult = Math.floor(Math.random() * 101) + 19;
    console.log(randomResult);
    $("#generatedNumber").text(randomResult);
    for (let a = 0; a < 4; a++) {
    let randomNumber = Math.floor(Math.random() * 11) + 1;
    let heroes = $("<div>");
        heroes.attr({
            "class": "heroes",
            "data-random": randomNumber
        });
        
        

        

    $(".characters").append(heroes);
    

};
};

startGame ();

$(document).on("click", ".heroes", function() {
    let num = parseInt($(this).attr("data-random"));
    addNums += num;
        console.log(addNums);

   

   if (addNums > randomResult) {
       console.log("You Lose!!!");
       loss++;
       $("#lose").text("Losses: " + loss);
        
       addNums = 0;
        startGame ();

   } else if (addNums === randomResult) {
        console.log("You Win!!!");
        win++;
        $("#win").text("Wins: " + win);

        addNums = 0;
        startGame ();
   };

});