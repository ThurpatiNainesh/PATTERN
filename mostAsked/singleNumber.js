// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
var singleNumber = function(nums) {
    const ht={}
    for(const num of nums){
        ht[num] = ht[num]+1 || 1;
    }
    for(const key in ht){
        if(ht[key] ===1){
            return key 
        }
    }
};