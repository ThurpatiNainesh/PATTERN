
function mergeSort2(array) {
    if (array.length === 1) {
      return array;
    } else {
      // splitIndex or mid
      const mid = Math.floor(array.length / 2);
      return merge(
        mergeSort2(array.slice(0, mid)),
        mergeSort2(array.slice(mid))
      );
    }
    // Merge two sorted arrays
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      // After looping ends, one array is empty, and other array contains only
      // values greater than all values in `merged`
      // console.log(merged)
      // console.log(array2)
      return [...merged, ...array1, ...array2];
    }
  }
  console.log( mergeSort2([8,5,4,3,4,56,5,54]) )
  // let suj=(1,2)
  // console.log(suj)

  