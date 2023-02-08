// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    let index =0
    for(let i=0;i<nums.length;i++){
        const num= nums[i]
        if(num !==0){
            nums[index]=num;
            index++
        }
    }
    for(let i=index;i<nums.length;i++){
        nums[i]=0
    }
};
var moveZeroes2 = function(nums){
    let arr1= new Array(nums.length).fill(0)
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            arr1[count]=nums[i]
            count++
        }
    }
    return arr1
    
}
console.log(moveZeroes2([0,1,0,3,12]))

