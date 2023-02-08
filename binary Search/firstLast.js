// 34. Find First and Last Position of Element in Sorted Array
// Medium
// 15.6K
// 366
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

function searchrange(arr,target){
     let res= [firstPosition(arr,target),lastPosition(arr,target)]
     return res
}
function firstPosition(arr,target){
  let left=0;
  let right=arr.length-1
  let ans=-1
  while(left<=right){
    let mid = Math.floor((left+right)/2)
  if(arr[mid]===target){
    // we want to check first so we move our pointerto right=mid-1
      ans=mid
      right=mid-1
  }else if(arr[mid]>target){
    right=mid-1
  }else{
    left=mid+1
  }
  }
  return ans
}
function lastPosition(arr,target){
    let left=0;
    let right=arr.length-1
    let ans=-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
    if(arr[mid]===target){
        // we want to check last so we move our pointerto mid+1
        ans=mid
        left=mid+1
    }else if(arr[mid]>target){
      right=mid-1
    }else{
      left=mid+1
    }
    }
    return ans
}
console.log(searchrange([5,7,7,8,8,10],8))


