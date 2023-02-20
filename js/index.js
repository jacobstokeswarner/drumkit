

// another way to write the same thing is to use an anonymous function

// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked!");
// });

// to add the event listener to all of the buttons:

// detecting button click
var buttons = document.querySelectorAll("button.drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    handlePress(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}




// use keydown instead of keypress

// detecting keypress
document.addEventListener("keydown", function(event){
    handlePress(event.key);

    buttonAnimation(event.key);
});

//this same function can be used for keypress and also button press events
// due to the parameter
function handlePress(key){
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:console.log(this.innerHTML);
    }
}

// animation for buttons:

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    //after delay, remove this class

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}