let arr=[1,2,3,4,5]
function findTwoMostLargestNumber(arr){
    let first=0
    let second=0
    let third=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>first){
             third=second
             second=first
             first=arr[i]
        }else if(arr[i]>second){
               third=second
              second=arr[i]
        }else if(arr[i]>third){
            third=arr[i]
        }
    }
    console.log([first,second,third])
}
console.log(findTwoMostLargestNumber(arr))