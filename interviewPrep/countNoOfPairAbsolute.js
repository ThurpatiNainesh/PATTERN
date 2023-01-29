
// 2006. Count Number of Pairs With Absolute Difference K
// Easy
// 1.1K
// 24
// Companies
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]

var countKDifference = function(nums, k) {
    let map = {};
    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1 
    }
    
    let pairs = 0;
    
    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]-k]) {
            pairs += map[nums[i] - k]
        }
    }
    
    return pairs;
    
};

var countKDifference = function(nums, k) {
    let count = 0;
    let arr = nums.sort((a,b) => b-a);
    for(let i = 0; i<arr.length; i++){
        for(let j = 1; j<arr.length ; j++){
            if(arr[i]-arr[j] === k){
                count++ ;
            }
        }
    }

    return count;
};