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

/* Factory function */



/* Functions that return other functions */




// EXERCISES

/* Exercise 1 */



/* Exercise 2 */



/* Exercise 3 */

