let nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
var removeDuplicates = function(nums) {
    let indexCounter =0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[indexCounter]=nums[i]
                 indexCounter
            indexCounter++
        }
    }
    console.log(nums)
    return indexCounter
    
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
var removeDuplicates1 = function(nums){
    let arr= new Set([...nums])
    return arr.size
} 
console.log(removeDuplicates1([0,0,1,1,1,2,2,3,3,4]))

var removeDuplicates3 = function(nums) {
    var i=0;
       for(var j=1;j<nums.length;j++){
           if(nums[i]!==nums[j]){
               i++
               nums[i] = nums[j]
           }
       }
       return i+ 1
       
   };
   console.log(removeDuplicates3([0,0,1,1,1,2,2,3,3,4]))

//    Input: nums = [3,2,2,3], val = 3
//    Output: 2, nums = [2,2,_,_]
//    Explanation: Your function should return k = 2, with the first two elements of nums being 2.
//    It does not matter what you leave beyond the returned k (hence they are underscores).
//    Example 2:
   
//    Input: nums = [0,1,2,2,3,0,4,2], val = 2
//    Output: 5, nums = [0,1,4,0,3,_,_,_]
//    Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
//    Note that the five elements can be returned in any order.
//    It does not matter what you leave beyond the returned k (hence they are underscores).
   var removeElement = function(nums, val) {
    if(!nums) return 0;
    let pointer =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[pointer] = nums[i];
            pointer++
        }
    }
    return pointer 
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))

