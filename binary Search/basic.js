
// Binary searchthrough while loop
const arr1=[1,2,3,4,5,6,7]

function binarySearch1(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  console.log(binarySearch1(arr1, 5))

// binary search through recursion 
  function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
  
    if (val === arr[mid]) {
      return mid;
    }
  
    if (start >= end) {
      return -1;
    }
  
    return val < arr[mid]
      ? binarySearch(arr, val, start, mid - 1)
      : binarySearch(arr, val, mid + 1, end);
  }
  console.log(binarySearch(arr1, 5,0,arr1.length-1))

  