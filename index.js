

$(".green").click(function(){
    var rand = Math.floor((Math.random()*4)+1);
    if(rand === 1){
        playSound("green");
    }
    else{
        wrongSound();
    }
})

$(".red").click(function(){
    var rand = Math.floor((Math.random()*4)+1);
    if(rand === 2){
        playSound("red");
    }
    else{
        wrongSound();
    }
})

$(".yellow").click(function(){
    var rand = Math.floor((Math.random()*4)+1);
    if(rand === 3){
        playSound("yellow");
    }
    else{
        wrongSound();
    }
})

$(".blue").click(function(){
    var rand = Math.floor((Math.random()*4)+1);
    if(rand === 4){
        playSound("blue");
    }
    else{
        wrongSound();
    }
})


function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
        audio.play();
}

function wrongSound(){
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").css("background-color", "red");
    setTimeout(function(){
        $("body").css("background-color", "#011F3F");
    }, 200)
    $("h1").text("Wrong. Press Any Key To Continue.");
    setTimeout(function(){
        $("h1").text("Press A Key To Start.");  
    }, 600)
}
