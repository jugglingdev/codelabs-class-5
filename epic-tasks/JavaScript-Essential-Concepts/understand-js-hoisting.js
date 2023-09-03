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

    var author;  // declaration
    console.log(author);  // usage  // undefined because only declarations are hoisted to the top
    author = 'C.S. Lewis';  // initialization


console.log(author);  // ReferenceError: Cannot access 'author' before initialization
let author = 'C.S. Lewis';


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

console.log(book);  // undefined

let book = 'The Silver Chair';

console.log(book);  // The Silver Chair
