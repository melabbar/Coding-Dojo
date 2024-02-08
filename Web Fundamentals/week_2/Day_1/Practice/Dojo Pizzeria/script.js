function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var pie1 = pizzaOven("deep-dish", "traditional", "mozzerlla", ["pepperoni", "sausage"]);
var pie2 = pizzaOven("hand-tossed", "marinara", ["mozzerlla", "feta"], ["mushrooms", "olives", "onions"]);
var pie3 = pizzaOven("stuffed-crust", "marinara", ["mozzerlla", "feta", "chedder"], ["mushrooms", "BBQ Chicken"]);
var pie4 = pizzaOven("thin-crust", "none", ["mozzerlla"], ["Thyme", "olives", "onions"]);

function getRandomInt(pie1) {
    return Math.floor(Math.random().pizzaOven[0]);
}

console.log(getRandomInt());



