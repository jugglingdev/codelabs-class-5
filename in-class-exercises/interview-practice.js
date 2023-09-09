// Technical Interview Practice

// Question #1: Array Sum

console.groupCollapsed('1: Array Sum');

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

console.groupEnd();

// Question #2: Single Number

console.groupCollapsed('2: Single Number');

    function singleNumber(nums) {
        let singleNumber = [];

        for (let num of nums) {
            if (!singleNumber.includes(num)) {
                singleNumber.push(num);
            } else {
                // Remove the number if it's already in singleNumber[]
                singleNumber.splice(singleNumber.indexOf(num), 1);
            }
        }

        console.log(singleNumber[0]);
    }

    singleNumber([4, 1, 2, 1, 2]);  // 4
    singleNumber([1, 3, 5, 3, 1]);  // 5

console.groupEnd();

// Question #3: FizzBuzz

console.groupCollapsed('3: FizzBuzz');

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

console.groupEnd();

// Question #4: First Unique Character

// Question #5: Move Zeroes