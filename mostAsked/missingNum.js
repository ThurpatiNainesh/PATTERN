let nums = [3,0,1]
// Output: 2
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Input: nums = [0,1]
// Output: 2

var missingNumber = function(nums) {
    let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    return total - sum

};

