var l = document.querySelectorAll("button").length;
for (var i = 0; i < l; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        makeanimation(this.innerHTML);
    });
    
};

document.addEventListener("keydown",function(e){
    makeSound(e.key);
    makeanimation(e.key);
});

function makeSound(s) {
    switch (s){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
    }
};

function makeanimation(b){
    var ele = "."+b;
    document.querySelector(ele).classList.add("pressed");
    setTimeout(function(){document.querySelector(ele).classList.remove("pressed");},100);
}