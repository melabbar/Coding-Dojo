var sayHello = function (name) {
    console.log('Hello ' + name);
};

console.log(sayHello("Muftah"))

// ARROW FUNCTION  
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

// SIMPLER ARROW FUNCTION

const sayHello = name => console.log(`Hello ${name}`);

sayHello("Muftah")

// ARROW FUNCTION USING OBJECTS

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
const returnObj = () => { firstName: 'John'; lastName: 'Wick' }


// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

console.log(returnObjFixed())

// CONTEXT

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
}

// ! DESTRUCTURING ABOVE CODE USING "forEach" 

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function (suit) {
            faces.forEach(function (face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
}
