let randomResult;
let loss = 0;
let win = 0;
let addNums = 0;

let startGame = function () {
    $(".characters").empty();
    let images = [
        'assets/images/t.jpg',
        "assets/images/d.jpg",
        "assets/images/night_king.jpg",
        "assets/images/snow.jpg"
    ];
    randomResult = Math.floor(Math.random() * 101) + 19;
    console.log(randomResult);
    $("#generatedNumber").text(randomResult);
    for (let a = 0; a < images.length; a++) {
        console.log(images[a])
    let randomNumber = Math.floor(Math.random() * 11) + 1;

        var heroes= $("<img/>").attr('src', images[a])
        heroes.attr({
            "class": "heroes",
            "data-random": randomNumber
        });
        $(".characters").append(heroes)
        

        

    $(".characters").append(heroes);
    

};
};

startGame ();

$(document).on("click", ".heroes", function() {
    let num = parseInt($(this).attr("data-random"));
    addNums += num;
        console.log(addNums);
        $("#addNums").text(addNums);
      

   

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