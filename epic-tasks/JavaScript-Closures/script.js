// ARTICLE TASKS

/* Sum with Closures */

function sum(a) {

    return function(b) {
        return a + b;
    }
}

console.log( sum(1)(2) );  // 3
console.log( sum(5)(-1) );  // 4

/* Filter through Function */

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(args) {
    return function(x) {
        return args.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );  // 3, 4, 5, 6
console.log( arr.filter(inArray([1, 2, 10])) );  // 1, 2

/* Sort by Field */

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log( users.sort(byField('name')) );
console.log( users.sort(byField('age')) );


// ADDITIONAL PRACTICE

/* Access a variable from an outer function */

function printColor() {
    let color = 'blue';

    return function() {
        return color;
    }
}

let myColor = printColor();

console.log(myColor());  // blue

/* Factory function (preset parameters) */

function greetUser(message) {
    return function (name) {
        console.log(`${message}, ${name}!`);
    };
}

const greetMorning = greetUser('Good morning');
greetMorning('Liza');  // Good morning, Liza!

/* Functions that return other functions */

function createArithmeticFunction(operator) {
    return function(a, b) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return NaN;
        }
    };
}

const add = createArithmeticFunction('+');
const subtract = createArithmeticFunction('-');
const multiply = createArithmeticFunction('*');
const divide = createArithmeticFunction('/');

console.log(add(5, 3));  // 8
console.log(subtract(4, 2));  // 2
console.log(multiply(2, 24));  // 48
console.log(divide(15, 3));  // 5


// EXERCISES

/* Exercise 1 */

function counter() {
    let count = 0;
    
    return function() {
        return ++count;
    };
}

const makeCounter = counter();
console.log(makeCounter());  // 1
console.log(makeCounter());  // 2
console.log(makeCounter());  // 3

/* Exercise 2 */

// function makeAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const addNumbers = makeAdder(4);
// console.log( addNumbers(8) );  // 12

// /* Exercise 3 */

// function generateID() {
//     return function() {
//         return Math.floor(Math.random() * 9000) + 1000;
//     }
// }

// const newID = generateID();
// console.log(newID());
// console.log(newID());
// console.log(newID());
