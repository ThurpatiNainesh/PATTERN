// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let num1= nums[i];
        let num2 = target - num1
        if(map.has(num2)){
            return [i,map.get(num2)]
        }
        map.set(num1,i)
    }
    
};

var twoSum1 = function(nums, target){
    let hash={}
    for(let i=0;i<nums.length;i++){
        let val=nums[i]
        hash[val]=i
    }
    for(let i=0;i<nums.length;i++){
        let potentialkey = target-nums[i]
        if(hash[potentialkey]&&hash[potentialkey]!==i){
            return [i,hash[potentialkey]]
        }
    }
}
console.log(twoSum1([3,2,4], 6))