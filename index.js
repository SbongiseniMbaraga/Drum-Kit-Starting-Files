//this event Listener listens for when we will click a button and if 
//we click a button that correspondes with the letters on the make sound
//function then it will make a sound. 
let buttons = document.querySelectorAll(".drum");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        var buttonLetters = this.innerHTML;
        makeSound(buttonLetters);
        buttonAnimation(buttonLetters);
    });
});

//this event listener will listen for the keyboard and once you press a letter that
//corresponse to the makesound function then an event will trigger which will play the 
//sounds listed in the make sound function
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//created a make sound function that is mapped to letters and sounds
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        default:
            console.log(buttonLetters);
        break;
    }
}

//will be making the buttons flash
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 200);
}