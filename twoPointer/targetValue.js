let aa = [1,2,3,4,5,6,7,8,9]
9
function multipointer(arr,target){
  let left=0;
  let right=arr.length-1
     let result=[]
  while(left<right){
    let sum=arr[left]+arr[right]
    if(sum===target){
      let arr2=[arr[left],arr[right]]
      result.push(arr2)
      left++
      right--
    }else if(sum>target){
      right--
    }else{
      left++
    }
  }
  return result
}
console.log(mulipointer([1,2,3,4,5,6,7,8,9],9))