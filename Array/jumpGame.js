// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
var canJump = function(nums) {
    let i =0,max=0
    for(let i=0;i<nums.length;i++){
        if(i > max){
           return false
           }
        if(i + nums[i] >= nums.length-1){
           return true
           }
        max = Math.max(max,i+nums[i])
    }
};
// var canJump = function(nums) {
//     let last = nums.length - 1;
//     for (let i = last - 1; i >= 0; i--) {
//         if (i + nums[i] >= last) {
//             last = i;
//         };
//     };
//     return last === 0;
// };
var canJump = function(nums) {
   if (nums.length < 2) {
    return true;
}
for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] >= nums.length - 1) {
        return true;
    };
    if (nums[i] === 0) {
        return false;
    }
    if (i + nums[i] > i + 1 + nums[i + 1]) {
        nums[i + 1] = nums[i] - 1;
    };
}; 
};



// if (nums.length < 2) {
//     return true;
// }
// for (let i = 0; i < nums.length - 1; i++) {
//     if (i + nums[i] >= nums.length - 1) {
//         return true;
//     };
//     if (nums[i] === 0) {
//         return false;
//     }
//     if (i + nums[i] > i + 1 + nums[i + 1]) {
//         nums[i + 1] = nums[i] - 1;
//     };
// };