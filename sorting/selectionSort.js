let arr1 =[8,7,5,6,4]
//  takes smallest element
function selectionSort(arr){
     for(var i=0;i<arr.length;i++){
        var lowest=i;
        for(var j=i+1;j<arr.length;j++){
            // console.log(arr[lowest],arr[j])
            // here we are checkin the lowest 
            if(arr[j]<arr[lowest]){
                lowest=j
                // console.log(arr)
            }

        }
        // here we are swaping current lowest and previous lowest 
        var temp = arr[i]
        arr[i]= arr[lowest]
        arr[lowest] = temp
     }
     return arr
}
 let x = selectionSort(arr1)
 console.log(x)
let testArray=[7,6,5,4,3,2,1]





