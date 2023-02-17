function handleClick(){
   var audio = new Audio('sounds/tom-1.mp3');
   audio.play();
}

// another way to write the same thing is to use an anonymous function

// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked!");
// });

// to add the event listener to all of the buttons:

var buttons = document.querySelectorAll("button.drum");

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",handleClick);
}