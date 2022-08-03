// detecting button press

var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums);
for (i = 0; i < numberOfDrums; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleclick() {
      var buttonInnerhtml = this.textContent;
      makeSound(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);

    });
}

// detecting keyboard press

document.addEventListener("keypress", function (event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

//function to make sounds from both keypress and buttonpress.

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom4.mp3");
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
      var kick = new Audio("sounds/kickbass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerhtml);
  }
}


//function to generate a keypress effect.

function buttonAnimation(currentKey){
  var activeKey = document.querySelector("."+currentKey)
  activeKey.classList.add('pressed');
  setTimeout(function(){
    activeKey.classList.remove('pressed');
  },200);
}
