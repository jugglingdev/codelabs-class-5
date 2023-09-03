const a = 1;

function test() {
    const b = 2;
    console.log(a, b);
}

test();
// console.log(a, b);  // this won't work // b is not defined (local scope)

// *** See nonModuleScript.js ***

console.log(globalVar);
