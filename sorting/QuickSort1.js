
/*  1, it select pivot
    2, arranging < right && > left 
    3, then arranging left part && right part 
*/

function pivot(arr,start=0,end=arr.length+1){
       function swap(array,i,j){
        var temp = array[i]
         arr[i]= arr[j]
         arr[j] = temp
       }
      //  pivot is value we need to take we need place it
       var pivot = arr[start]
      //  swapIdx is index we will put our pivot value 
       var swapIdx= start
       for(var i=  start+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
            console.log(swapIdx,i)
            // here loop drama 
      // [ 4, 2, 8, 1, 5, 7, 6, 3 ] swapIdx = 2, i=3
      // [ 4, 2, 1, 8, 5, 7, 6, 3 ] swapIdx = 3, i=4
      // [ 4, 2, 1, 3, 5, 7, 6, 8 ] swapIdx = 4, i=8
        }
       }
      //   here we are atually swapping srart with swapIdx which is three 
       swap(arr,start,swapIdx)
       // here we are implementing after  loop drama 
      // [ 3, 2, 1, 4, 5, 7, 6, 8 ] swapIdx =3 , start =0
       return swapIdx
      }
      
let x =pivot([4,8,2,1,5,7,6,3])
console.log(x)
//  each time new pivot index , each time new left and new right 
function quickSort(arr,left=0,right=arr.length-1){
  if(left<right){
    // >=descending ||<=ascending 
    let pivotIndex = pivot(arr,left,right)
    // left
    quickSort(arr,left,pivotIndex-1)
    // right
    quickSort(arr,pivotIndex+1,right)
  }
  return arr
}
let y = quickSort([6,5,4,3,2,1])
console.log(y)