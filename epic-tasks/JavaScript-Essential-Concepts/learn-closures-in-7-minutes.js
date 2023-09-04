let myName = 'Kyle';

function printName() {
    console.log(myName);
}

myName = 'Joey';

printName();

myName = 'Kate';

printName();


// COMMON USE CASES OF CLOSURES

/* Example 1 */

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');  // Outer Variable: outside
                        // Inner Variable: inside


/* Example 2 */

function outerFunction2(outerVariable) {
    const outer2 = 'Hi';
    return function innerFunction2(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
        console.log(outer2);  // things on the inside have access to the things on the outside
    }
}

const newFunction2 = outerFunction2('outside');
newFunction2('inside');  // Outer Variable: outside
                         // Inner Variable: inside
                         // Hi


/* Example 3 */

function outerFunction3(url) {
    fetch(url).then(() => {
        console.log(url);
    })
}

const newFunction3 = outerFunction3('outside');
newFunction3('inside');  // Outer Variable: outside
                         // Inner Variable: inside
