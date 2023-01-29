// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>{return b-a})
    for(let i=0;i<nums.length;i++){
        if(i>0&&nums[i-1]===nums[i])return true
    }
    return false
};
var containsDuplicate1 = function(nums){
const ht={}
for(const nu of nums){
   ht[nu] = ht[nu]+1 || 1
}
for(const key in ht){
   if(ht[key]>1){
       return true
   }

}
return false 
}
console.log(containsDuplicate1([1,2,3,1]))

