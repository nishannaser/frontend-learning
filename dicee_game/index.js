// Dice 1
var randomNumber1 = getRandomNumber();
console.log("randomNumber1: "+ randomNumber1);

var newImage1 = getImageName(randomNumber1);
document.querySelector(".dice .img1").setAttribute("src", newImage1);

// Dice 2
var randomNumber2 = getRandomNumber();
console.log("randomNumber2: "+ randomNumber2);

var newImage2 = getImageName(randomNumber2);
document.querySelector(".dice .img2").setAttribute("src", newImage2);

// Set the winner
var title = "";
if (randomNumber1 > randomNumber2) {
  title = "🥇 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  title = "🥇 Player 2 wins!";
} else {
  title = "Draw!";
}
document.querySelector(".container h1").innerHTML = title;



// Functions

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function getImageName(imageNumber) {
  return "images/dice" + imageNumber + ".png";
}
