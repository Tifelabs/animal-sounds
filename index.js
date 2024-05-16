var numberOfDrumButtons = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    //Alligator
    case "a":
      var alligator = new Audio("assets/sounds/alligator.mp3");
      alligator.play();
      break;

    //Bee
    case "b":
      var bee = new Audio("assets/sounds/bee.mp3");
      bee.play();
      break;
      
    //Cow
    case "c":
      var cow = new Audio("assets/sounds/cow.wav");
      cow.play();
      break;

    case "d":
      var dog = new Audio("assets/sounds/dog.mp3");
      dog.play();
      break;

    case "e":
      var eagle = new Audio("assets/sounds/eagle.mp3");
      eagle.play();
      break;

    case "f":
      var frog = new Audio("assets/sounds/frog.mp3");
      frog.play();
      break;

    case "g":
      var goat = new Audio("assets/sounds/goat.mp3");
      goat.play();
      break;

    //The Default   
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
  