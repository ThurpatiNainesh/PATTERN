
// 16. 3Sum Closest
// Medium
// 8.4K
// 462
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

var threeSumClosest = function(nums, target) {
    if(nums.length < 3 || target == null) return;
    var res = target - nums[0] - nums[1] - nums[2], len = nums.length;
    
    nums.sort((a,b) => a - b);
    
    for(var i = 0; i < len - 2; i++){
    var L = i+1, R = len-1;
    
     while(L < R){ 
         var sum = nums[i] + nums[L] + nums[R];
         if(sum === target){
             return sum;
         }else if(sum < target){
             while(nums[L] === nums[++L]);
         }else{
             while(nums[R] === nums[--R]);
         }
         
         if(Math.abs(target - sum) < Math.abs(res)){
             res = target - sum;
         }
     }
    }
    
    return target - res;
    };