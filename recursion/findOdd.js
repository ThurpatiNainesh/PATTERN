const arr1=[1,2,3,4,5,6,7]

    var set = new Set()
function findOdd(arr,set){
    // var set = new Set()
    if(arr.length===0) return set;
    if(arr[0]%2===0){
        set.add(arr[0])
    }
    return findOdd(arr.slice(1),set)
}
console.log(findOdd(arr1,set))

