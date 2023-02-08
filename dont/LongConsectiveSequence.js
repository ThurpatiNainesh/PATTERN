
// 128. Longest Consecutive Sequence
// Medium
// 14.5K
// 600
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function(nums) {
    let set = new Set();
    for(const n of nums) {
        set.add(n);
    } console.log(set)
    let max = 0;
    for(let n of set) {
        if(!set.has(n-1)) {
            let count = 0;
            while(set.has(n++)) {
                count++;
            }
            max = Math.max(count, max);
        }
    }
    return max;
};
