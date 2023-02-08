function sumzero(arr){
    let left=0
    let rigth= arr.length-1;
    while(left<rigth){
      let sum = arr[left]+arr[rigth]
      if(sum===0){
          return [arr[left],arr[rigth]]
      }else if(sum>0)rigth--
      else left++
      }
      return false 
    }
  console.log(sumzero([1,2,3,4,5]))

  function sumEqualToX(arr,x){
    let left=0
    let rigth= arr.length-1;
    while(left<rigth){
      let sum = arr[left]+arr[rigth]
      if(sum===x){
          return [arr[left],arr[rigth]]
      }else if(sum>x)rigth--
      else left++
      }
      return false 
    }
  console.log(sumEqualToX([1,2,3,4,5,6],5))

  
  function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }


  function sumClosestToX(arr,target){
    let left=0
    let rigth= arr.length-1;
    let diff=Infinity
    let a,b
    while(left<rigth){
      let pairSum = arr[left]+arr[rigth]
        let currDiff = Math.abs(pairSum-target)
        if(currDiff<diff){
            diff=currDiff
            a=arr[left];
            b=arr[rigth]
        }
      
      if(pairSum>target)rigth--
      else left++
      }
    //   console.log(a,b)
    return a+b
    }
  console.log(sumClosestToX([12,34,56,67,89],65))