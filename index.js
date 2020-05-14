
var numberOfDrums = document.querySelectorAll(".drum").length;
var audio = ('sounds/tom-1.mp3');





for(var i = 0; i<numberOfDrums; i++){

  document.querySelectorAll("button")[i].addEventListener("click", handleclick);

  function handleclick(){

  var innerHTML =  this.textContent;

  makeSound(innerHTML);
  animations(innerHTML);
  }

}




document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  animations(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio ('sounds/crash.mp3');
    audio.play();
      break;

    case "a":
    var audio = new Audio ('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio ('sounds/snare.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio ('sounds/tom-1.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio ('sounds/tom-2.mp3');
    audio.play();

    case "k":
    var audio = new Audio ('sounds/tom-3.mp3');
    audio.play();

    case "l":
    var audio = new Audio ('sounds/tom-4.mp3');
    audio.play();

    break;

    default: console.log(innerHTML);

  }
}

function animations(animation){

  var activeButton = document.querySelector("." + animation);

  activeButton.classList.add("pressed");

  setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}
