// Function Declarations

hello();  // this works

function hello() {
    console.log('hello');
}

hello();  // so does this


// VARIABLE HOISTING

console.log(author);  // undefined
var author = 'C.S. Lewis';

    // under the hood, this is the same as:

    var author2;  // declaration
    console.log(author2);  // usage  // undefined because only declarations are hoisted to the top
    author2 = 'C.S. Lewis';  // initialization


console.log(author3);  // ReferenceError: Cannot access 'author' before initialization
let author3 = 'C.S. Lewis';


// FUNCTION HOISTING

/* Function Declarations */

lion('Aslan');  // this works (function declarations are hoisted)

function lion(name) {
    console.log(`The lions name is ${name}`);
}

lion('Aslan');  // so does this

/* Function Initializations */

lion2('Aslan');  // this does NOT work (function initializations are NOT hoisted)

let lion2 = function(name) {
    console.log(`The lions name is ${name}`);
}

lion2('Aslan');  // only this does


// TASKS

/* Task 1 */

book('The Magicians Nephew');  // The book is called The Magicians Nephew

function book(title) {
    console.log(`The book is called ${title}`); 
}

/* Task 2 */

console.log(myBook);  // undefined

let myBook = 'The Silver Chair';

console.log(myBook);  // The Silver Chair


// ADDITIONAL PRACTICE

/* var */

console.log(num);  // undefined (not ReferenceError because 'num' has been declared, just not initialized)
var num = '42';
console.log(num);

/* let */

console.log(favoriteColor);  // ReferenceError: Cannot access 'favoriteColor' before initialization
let favoriteColor = 'blue';
console.log(favoriteColor);  // blue

/* const */

console.log(myDog);  // ReferenceError: Cannot access 'myDog' before initialization
const myDog = 'Chico Bean';
console.log(myDog);  // Chico Bean
