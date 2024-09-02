function handleClick(event){
    var key = event.key;
    var tar =  event.target;
    if (tar!=null){
        if (tar.textContent != null){
            tar = tar.textContent;
        }
    }
    play(tar);
    animate(tar);
}

function handlePress(event){
    var key = event.key;
   
    if (key !=null ){
        tar = key;
    }
    
    play(key);
    animate(key);
}

function play(tar){
    var audio = new Audio();
    switch (tar){
        case "w":
            audio.src = 'sounds/tom-1.mp3';
            break;
        case "a":
            audio.src = 'sounds/tom-2.mp3';
            break;

        case "s":
            audio.src = 'sounds/tom-3.mp3';
            break;
        case "d":
            audio.src = 'sounds/tom-4.mp3';
            break;

        case "j":
            audio.src = 'sounds/crash.mp3';
            break;
        case "k":
            audio.src = 'sounds/kick-bass.mp3';
            break;
        
        case "l":
            audio.src = 'sounds/snare.mp3';
            break;
        default:
            break;
    }

    if (audio.src != null){
        audio.play();
    }
}

function animate(k){
    console.log(k);

    const key = document.querySelector(`.${k}`);

    key.classList.add("pressed");

    setTimeout(function(){
        key.classList.remove("pressed")
        
    }, 100);

}

const buttons  = document.querySelectorAll('.drum');
 
var loops = buttons.length

for (var i  =  0 ; i<loops; i++){
    buttons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handlePress);

