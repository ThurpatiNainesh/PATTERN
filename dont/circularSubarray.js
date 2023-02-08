const arr=[5,-3,-2,6,-1,4]
function maxSumCircularArray(arr){
    let arr2=[]
    for(let i=0;i<arr.length;i++){
            arr2.push(arr[i]*-1)
    }
    const ArraySum = arr2.reduce((a, b) => a + b);
    let max= arr2[0]
    let sum= arr2[0]
    for(let i=1;i<arr2.length;i+=1){
        if(sum+arr2[i]>arr2[i]){
            sum+=arr2[i]
        }else{
            sum=arr2[i]
        }
        max=Math.max(max,sum)
    }
    return x= -(ArraySum)-(-max)

}
let y =maxSumCircularArray(arr)
console.log(y)
// let max= nums[0]
// let sum= nums[0]
// for(let i=1;i<nums.length;i+=1){
//     if(sum+nums[i]>nums[i]){
//         sum+=nums[i]
//     }else{
//         sum=nums[i]
//     }
//     max=Math.max(max,sum)
// }
// return max