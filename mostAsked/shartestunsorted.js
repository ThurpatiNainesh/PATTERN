// 581. Shortest Unsorted Continuous Subarray
// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

// Input: nums = [1,2,3,4]
// Output: 0

// Input: nums = [1]
// Output: 0
var findUnsortedSubarray = function(nums) {
    // nums = [2,6,4,8,10,9,15]
//     nums = [2,4,6,8,9,10,15]
    let sortNums = nums.slice()
    sortNums.sort((a,b) => (a - b))
    let start = nums.length - 1, end = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != sortNums[i]){
            start = Math.min(start, i)
            end = Math.max(end, i)
        }
    }
    if(end <= start) return 0
    return end - start + 1
};
  // let targetArr = new Array(...nums).sort((a, b) => a - b);
  // let start = 0;
  // let end = nums.length - 1;
  // while(nums[start] === targetArr[start] && start < nums.length) {
  //   ++start;
  // }
  // if (start === nums.length) return 0;
  // while (end >= start && nums[end] === targetArr[end] ) {
  //   --end;
  // }
  // if (end === start) return 0;
  // return end - start + 1;