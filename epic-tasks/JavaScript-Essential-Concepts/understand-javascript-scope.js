// GLOBAL VARIABLE

let game = 'Sonic';  // global variable

console.log(game);

function title() {
    console.log(`${game}`);
}

title();

if(true) {
    console.log(`${game}`);
}

// LOCAL VARIABLE

function a() {
    let anotherGame = 'Sonic';  // local variable, functional scope
    console.log(anotherGame);
}

a();

if (true) {
    let anotherGame = 'Mario';
    console.log(anotherGame);
}

// VAR

// function hello() {
//     var greeting = 'hello';  // var is only locally scoped in functions
// }

// console.log(greeting);

if (true) {
    var anotherGreeting = 'hello';  // var is not locally scoped here - it's global
}

console.log(anotherGreeting);

// VAR CLASH

var x = 10;
console.log(x);  // 10

if (true) {
    var x = 2;
    console.log(x);  // 2
}

console.log(x);  // 2  // 10 is overridden by if statement  // use let to fix this

// *** TASKS ***

// TASK 1

let firstName = 'Jane';
let lastName = 'Doe';
let age = '24';

function printPersonInfo() {
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}

printPersonInfo();

// TASKS 2 and 3

function printPersonInfo2() {
    let firstName2 = 'Jane';
    let lastName = 'Doe';
    let age = '24';
    let country = 'England';

    console.log(`${firstName2} ${lastName} is ${age} years old and lives in ${country}.`);
}

let firstName2 = 'James';

printPersonInfo2();  // Jane Does is 24 years old and lives in England.

// TASK 4

let newGame = 'Sonic';

if (true) {
    let newGame = 'Super Mario Bros.';
    console.log(newGame);  // Super Mario Bros.
}

console.log(newGame);  // Sonic


// ADDITIONAL PRACTICE

let globalScope = 2;

function multiply() {
    let localScope = 3;

    console.log(globalScope * 5);  // 10
    console.log(localScope * 5);  // 15
}


let myGlobal = 'pineapple';
console.log(myGlobal);  // pineapple

function scope() {
    let myLocal = 'pear';
    myGlobal = 'kiwi';

    console.log(myGlobal);  // kiwi
    console.log(myLocal)  // pear
}

scope();

console.log(myGlobal);  // kiwi
// console.log(myLocal);  // myLocal is not defined
