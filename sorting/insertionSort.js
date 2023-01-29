let arr1=[5,4,3,2,1]
//    putting each element  into right place 
//  no swap
function insertinSort(arr){
    for(var i=1;i<arr.length;i++){
        var curtrentVal = arr[i]
        //   starting play a biggy role
        for(var j=i-1;j>=0&&arr[j]>curtrentVal;j--){
            arr[j+1]= arr[j]
     //        [ 5, 5, 3, 2, 1 ]
        //     [ 4, 5, 5, 2, 1 ]
        //     [ 4, 4, 5, 2, 1 ]
        //     [ 3, 4, 5, 5, 1 ]
        //     [ 3, 4, 4, 5, 1 ]
        //     [ 3, 3, 4, 5, 1 ]
        //     [ 2, 3, 4, 5, 5 ]
        //     [ 2, 3, 4, 4, 5 ]
        //     [ 2, 3, 3, 4, 5 ]
        //     [ 2, 2, 3, 4, 5 ]
        //     [ 1, 2, 3, 4, 5 ]

            
        }
        arr[j+1]= curtrentVal
    }
    return arr
}
 let x = insertinSort(arr1)

//  insertion and quick sort sound similar



 