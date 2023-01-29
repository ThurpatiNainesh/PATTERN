
// 347. Top K Frequent Elements
// Medium
// 12.3K
// 455
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    var map = new Map();
    var output = [];
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i] ,map.get(nums[i])+1)
        }else {
            map.set(nums[i],1)    
        }    
    }
        
    let sortedArr = Array.from(map).sort((a,b)=> b[1]-a[1]);
     console.log(sortedArr)
    for(let i = 0; i < k; i++) {
        output.push(sortedArr[i][0]);
    }
    return output;
};