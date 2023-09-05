// EXERCISES

/* Exercise 1 */

let name = 'Chris';

console.log(name);  // Chris

if (true) {
    let name = 'Alex';
    console.log(name);  // Alex
}

function myName() {
    let name = 'Kayla';
    console.log(name);  // Kayla
}

myName();

console.log(name);  // Chris


/* Exercise 2 */

/* *** Var Test *** */

function hoistingTest(sentence) {
    console.log(sentence);
}

// hoistingTest(sentence);  // undefined

var sentence = 'I wanna dance with somebody';

hoistingTest(sentence);  // I wanna dance with somebody

/* *** Let Test *** */

function hoistingTest(sentence2) {
    console.log(sentence2);
}

// hoistingTest(sentence2);  // Cannot access 'sentence2' before initialization

let sentence2 = 'I wanna sing with somebody';

hoistingTest(sentence2);  // I wanna sing with somebody

/* *** Const Test *** */

function hoistingTest(sentence3) {
    console.log(sentence3);
}

// hoistingTest(sentence3);  // Cannot access 'sentence3' before initialization

const sentence3 = 'I wanna laugh with somebody';

hoistingTest(sentence3);  // I wanna laugh with somebody


/* Exercise 3 */

