
let butLength = document.querySelectorAll("button").length
for(let i = 0; i<butLength; i++)
document.querySelectorAll("button")[i].addEventListener("click", function (){

    let vase = this.classList[0];
  
    sound(vase);
    buttonAnim(vase)
   
})

document.addEventListener("keypress", function (event){

   
    sound(event.key);
    buttonAnim(event.key)
})

 

function sound (letter){


switch (letter){
case "w":
    var audio = new Audio("sounds/crash.mp3");
     audio.play();  
     break;

case "a":
    var audio = new Audio("sounds/kick-bass.mp3");
     audio.play();   
    break;

case "s":
    var audio = new Audio("sounds/snare.mp3");
     audio.play();   
    break;

case "d":
    var audio = new Audio("sounds/tom-1.mp3");
     audio.play();   
    break;

case "j":
    var audio = new Audio("sounds/tom-2.mp3");
     audio.play();   
     break;

case "k":
    var audio = new Audio("sounds/tom-3.mp3");
     audio.play();   
     break;

case "l":
    var audio = new Audio("sounds/tom-4.mp3");
     audio.play();   
    break;

default:
    //alert ("Please assign a Sound to this button");

}

}


function buttonAnim(target){
    document.querySelector("."+ target).classList.add("pressed")
    setTimeout(() => {
        document.querySelector("."+ target).classList.remove("pressed")
      }, "100")

}



    
