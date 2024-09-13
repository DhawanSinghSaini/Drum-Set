for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handelclick)
    document.querySelectorAll("button")[i].addEventListener("click",buttonAnimation)
    document.addEventListener("keydown", handelkey);
    document.addEventListener("keydown", buttonAnimation);
}
    
var w = new Audio("./tom-1.mp3")
var a = new Audio("./tom-2.mp3")
var s = new Audio("./tom-3.mp3")
var d = new Audio("./tom-4.mp3")
var j = new Audio("./crash.mp3")
var k = new Audio("./kick-bass.mp3")
var l = new Audio("./snare.mp3")
    
function handelclick(){
    var sound = this.innerHTML;
    switch (sound) {
        case "w": w.play();
            break;
        case "a": a.play();
            break;
        case "s": s.play();
            break;
        case "d": d.play();
            break;
        case "j": j.play();
            break;
        case "k": k.play();
            break;
        case "l": l.play();
            break;
        default:
            break;
    }
    
    buttonAnimation(sound)
    }
    
function handelkey(event){
    switch (event.key) {
        case "w": w.play();
            break;
        case "a": a.play();
            break;
        case "s": s.play();
            break;
        case "d": d.play();
            break;
        case "j": j.play();
            break;
        case "k": k.play();
            break;
        case "l": l.play();
            break;
        default:
            break;
    }

    buttonAnimation(event.key)
}

function buttonAnimation(currentKey){
    var activebutton = document.querySelectorAll("."+currentKey)
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}
