

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
    this.style.color = "yellow"
  }


// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();

  