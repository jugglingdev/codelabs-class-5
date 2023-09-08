// Exercise 1

function outerFunction() {
    let outerVar = `I'm outside!`;

    function innerFunction() {
        let innerVar = `I'm inside!`;
        console.log(outerVar); // I'm outside!
                               // Outer function scope (local)
        console.log(innerVar); // I'm inside!
                               // Inner function scope (local)
    }

    innerFunction();

}

outerFunction();

// Exercise 2

function mainFunction() {
    hoistedFunction();

    function hoistedFunction() {
        console.log(`I'm hoisted!`);
    }
}

mainFunction();

// Exercise 3

function countVotes() {
    let greenVotes = 0;
    let purpleVotes = 0;

    return {
        incrementGreen: function() {
            greenVotes++;
            return `Green: ${greenVotes}`;
        },
        incrementPurple: function() {
            purpleVotes++;
            return `Purple: ${purpleVotes}`;
        },
        compareColorCounts: function() {
            return `Green: ${greenVotes}` + 
                    `\nPurple: ${purpleVotes}`;
        }
    }
}

const colorVotes = countVotes();

console.log(colorVotes.incrementGreen()); // Green: 1
console.log(colorVotes.incrementGreen()); // Green: 2
console.log(colorVotes.incrementPurple()); // Purple: 1
console.log(colorVotes.incrementGreen()); // Green: 3
console.log(colorVotes.incrementPurple()); // Purple: 2
console.log(colorVotes.incrementGreen()); // Green: 4
console.log(colorVotes.compareColorCounts()); // Green: 4
     // Purple: 2

// Exercise 4

let myGlobal = 'David';

function modifyGlobal() {
    myGlobal = 'Scott';
    console.log(myGlobal); // Scott
}

function localScopeTest() {
    let myGlobal = 'Bruce';
    console.log(myGlobal); // Bruce
}

modifyGlobal();
localScopeTest();

// Exercise 5

function functionFactory(param) {
    return function() {
        let multiply = param * 42;
        console.log(multiply);
    }
}

let myFactory = functionFactory(3);
myFactory(); // 126

// Exercise 6

function hoistingTest() {
    console.log(animal);

    let animal = 'penguin';
}

// hoistingTest();  // Cannot access 'animal' before initialization

// Exercise 7

function setupCounter() {
    let count = 0;

    return function() {
        console.log(++count);
    }
}

const myCounter = setupCounter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// Exercise 8

function setupCounter() {
    let count = 0;

    return function() {
        if (count < 3) {
            count++;
            console.log(count);
        } else {
            count = 1;
            console.log(count);
        }
    }
}

const counter = setupCounter();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 1
counter(); // 2

// Exercise 9