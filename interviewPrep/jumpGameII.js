// 45. Jump Game II
// Medium
// 10.5K
// 367
// Companies
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

var jump = function(nums) {
    let jumpsRequired = 0, currenJumpEnd =0, farthest =0;
    
    for(let g=0; g<nums.length-1; g++){
        farthest = Math.max(farthest, nums[g] + g);
        if(g == currenJumpEnd ){
            jumpsRequired++;
            currenJumpEnd =  farthest;
        }
    }
   
    return jumpsRequired;
};

const jump = function (nums) {
    const len = nums.length;
    if (len <= 1) return 0;
  
    let ret = 0;
    let curr = 0;
    let next = 0;
  
    for (let i = 0, last = len - 1; i <= next; i += 1) {
      next = Math.max(next, i + nums[i]);
  
      if (next >= last) {
        ret += 1;
        break;
      }
  
      if (i === curr) {
        ret += 1;
        curr = next;
      }
    }
  
    return ret;
  };

  var jump = function(nums) {
    //dp 
    var steps = new Array(nums.length).fill(Infinity);
    steps[0] = 0;
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(steps[j] !== Infinity && j + nums[j] >= i){
                steps[i] = Math.min(steps[i], steps[j] + 1);
            }
        }
    }
    return steps[nums.length - 1];
    
    //greedy 
    if(!nums || !nums.length) return -1;
    let start = 0, end = 0, jump = 0;
    while(end < nums.length -1) {
        jump++;
        let farthest = end;
        for(let i = start; i <= end; i++) {
            if(nums[i] + i > farthest) {
                farthest = nums[i] + i;
            }
        }
        start = end + 1;
        end = farthest; 
    }
    return jumps
};