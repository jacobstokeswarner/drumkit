

// another way to write the same thing is to use an anonymous function

// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked!");
// });

// to add the event listener to all of the buttons:

var buttons = document.querySelectorAll("button.drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}


function handleClick() {
    //this specifies the specific object that triggered the event
    switch (this.innerHTML) {
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





    }


  }


// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();

  