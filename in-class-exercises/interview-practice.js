// Technical Interview Practice

// Question #1: Array Sum

function arraySum(nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            sum = nums[i] + nums[j];

            if (i != j && sum == target) {
                console.log([i, j]);
                return;
            }
        }
    }
}

arraySum([2, 7, 11, 15], 9); // [0, 1]

// Question #2: Single Number

function singleNumber(nums) {
    let countStack = [];

    for (let i = 0; i < nums.length; i++) {

    }
}

singleNumber([4, 1, 2, 1, 2]);  // 4



// Question #3: FizzBuzz

function FizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 5 == 0) {
            console.log('Fizz');
        } else if (i % 3 == 0) {
            console.log('Buzz');
        } else {
            console.log(i.toString());
        }
    }
}

FizzBuzz(20);

// Question #4: First Unique Character

// Question #5: Move Zeroes