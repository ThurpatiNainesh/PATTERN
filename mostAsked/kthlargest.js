// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b)=>b-a)
    for(let i=0;i<nums.length;i++){
        if(i===k-1){
            return nums[i]
        }
    }
};