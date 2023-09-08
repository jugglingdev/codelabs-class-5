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

// Exercise 6

// Exercise 7

// Exercise 8

// Exercise 9