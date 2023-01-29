// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

Input: nums = [3,4,5,1,2]
Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times

Input: nums = [4,5,6,7,0,1,2]
Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 time

Input: nums = [11,13,15,17]
Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Brute force O(N)
// const findMin = function(nums) {
//     let currentMin = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//       currentMin = Math.min(currentMin, nums[i]);
//     }
//   return currentMin;
// };


// Optimized: O(logN) MODIFIED Binary Search
const findMin = (nums) => {
  
    let low = 0;
    let high = nums.length - 1;
  
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        // Found the pivot point where the rotation began
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}