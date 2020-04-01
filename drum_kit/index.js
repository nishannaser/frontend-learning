// Detect button clicks
var allButtons = document.querySelectorAll(".drum");
console.log("Total Buttons: " + allButtons.length);

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function() {
    playAudioAndAnimateButton(this.innerHTML);
  });
}

// Detect key press
document.addEventListener("keydown", function(event) {
  playAudioAndAnimateButton(event.key);
});

// Functions

function playAudioAndAnimateButton(letter) {
  switch (letter) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      buttonAnimation(letter);
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      buttonAnimation(letter);
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      buttonAnimation(letter);
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      buttonAnimation(letter);
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      buttonAnimation(letter);
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      buttonAnimation(letter);
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      buttonAnimation(letter);
      break;

    default:
      console.log(letter + " key is pressed");
  }

}

function buttonAnimation(letter) {
  var activeButton = document.querySelector("." + letter);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
