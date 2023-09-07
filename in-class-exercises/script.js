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

// Exercise 3

// Exercise 4

// Exercise 5

// Exercise 6

// Exercise 7

// Exercise 8

// Exercise 9