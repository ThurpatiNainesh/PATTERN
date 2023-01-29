let arr1=[1,2,3,[3,4,5],6,6,6]
function flattenArr(arr){
    let flate=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])===false) flate.push(arr[i])
        else flate = flate.concat(flattenArr(arr[i]))
    }
    return flate
}
let u=flattenArr(arr1)
console.log(u)