//  LOCAL vs. GLOBAL SCOPE

const a = 1;

function test() {
    const b = 2;
    console.log(a, b);
}

test();
// console.log(a, b);  // this won't work // b is not defined (local scope)


//  MODULE SCOPE

// *** See nonModuleScript.js ***

console.log(globalVar);


// *** See moduleScript.js ***

import { exportedVar } from "./moduleScript.js";

console.log(exportedVar);
// console.log(moduleVar);  // this won't work // moduleVar is not imported from moduleScript.js


//  FUNCTION vs. BLOCK SCOPE

function test2() {
    const b = 2;

    if (true) {
        const c = 3;
        console.log(b, c);
    }

    // console.log(b, c);  // this won't work // c is not defined
}

test2();


function test3() {
    const d = 2;

    if (true) {
        const d = 3;
        console.log(d);  // 3
    }

    console.log(d);  // 2
}

test3();