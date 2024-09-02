const dice  = document.querySelectorAll(".dice img")

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var diff  = 0 ;

dice.forEach((img) => {
    const randomnum = getRandomInt(1,6); 

    img.setAttribute("src", `./images/dice${randomnum}.png`);

    diff  =  randomnum - diff ;


});

if (diff < 0 ){
    document.querySelector(".dice .p1").textContent = "Player 1 😏👑🚩";
    document.querySelector(".dice .p2").textContent = "Player 2 😔👎🏼 ";
}else if (diff > 0) {
    document.querySelector(".dice .p2").textContent = "Player 2 😏👑🚩";
    document.querySelector(".dice .p1").textContent = "Player 1 😔👎🏼";
}else{
    document.querySelector(".dice .p1").textContent = "Player 1 😏";
    document.querySelector(".dice .p2").textContent = "Player 2 😏 ";
}

diff  = 0 



