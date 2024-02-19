// Add to the score upon click
var plus = 319;
var addScore = document.querySelector("#scoreLeft");

var plus1 = 159;
var addScore1 = document.querySelector("#scoreRight");


function add() {
    plus++;
    addScore.innerText = plus;
}

function add1() {
    plus1++;
    addScore1.innerText = plus1;
}

//Click on the button 'Subscribe and it will be removed'

function deleteBox(element) {
    element = document.querySelector(".box3")
    element.remove()
}

//Alert Message saying the game has ended

function message() {
    alert("The Game has ended!");
}
setTimeout(message, 13000);

