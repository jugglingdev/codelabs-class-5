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

let nums2 = [4, 1, 2, 1, 2];



// Question #3: FizzBuzz

// Question #4: First Unique Character

// Question #5: Move Zeroes