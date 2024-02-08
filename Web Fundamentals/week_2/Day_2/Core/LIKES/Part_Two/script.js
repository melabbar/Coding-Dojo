var plus = 9;
var plus1 = 12;
var plusLikes = document.querySelector("#plus")
var plus1Likes = document.querySelector("#plus1")
var plus2Likes = document.querySelector("#plus2")

function add() {
    plus++;
    plusLikes.innerText = plus
}

function add1() {
    plus1++;
    plus1Likes.innerText = plus1
}

function add2() {
    plus++;
    plus2Likes.innerText = plus
}