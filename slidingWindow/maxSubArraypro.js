const arr=[1,2,-8,4,5]
function maxSumArray(arr){
    let maxSum=0
    let curSum=0;
    for(let i=0;i<arr.length;i++){
        curSum = curSum +arr[i]
        if(curSum>maxSum){
        maxSum = Math.max(curSum,maxSum)
        }
        if(curSum<0){
            curSum=0
        }
    }
    return maxSum
}
console.log(maxSumArray(arr))

function minSumArray(arr){
    let maxSum=0
    let curSum=0;
    for(let i=0;i<arr.length;i++){
        curSum = curSum +arr[i]
        if(curSum<maxSum){
        maxSum = Math.min(curSum,maxSum)
        }
        if(curSum>0){
            curSum=0
        }
    }
    return maxSum
}
console.log(minSumArray([-1, -2, -3, -4, -5]))
