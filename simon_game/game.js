var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var gameStarted = false;

// Start the game
$(document).keydown(function() {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
})

// User click on button
$(".btn").on("click", function(event) {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log("userClickedPattern: " + userClickedPattern);

  animatePress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// Verify the user pattern
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    // If user completed the current game pattern, call the next sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

// Click the next button of the sequence
function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  // console.log("gamePattern: " + gamePattern);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

// Play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animation for user click of buttons
function animatePress(colour) {
  $("." + colour).addClass("pressed");
  setTimeout(function() {
    $("." + colour).removeClass("pressed");
  }, 100);
}
