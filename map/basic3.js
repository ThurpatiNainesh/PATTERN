
function returnMaxFreqEle(arr){
    let map = new Map()
    for(let nums of arr){
        if(map.has(nums)){
            map.set(nums,map.get(nums)+1)
        }else{
            map.set(nums,1)
        }
    }
    let result=[]
    map.forEach((val,key)=>{
        if(val>1){
            result.push(key)
        }
    })
    //sort by values
    // let arr4=Array.from(map).sort((a,b)=>b[1]-a[1])
    // sort by keys
    // let arr4=Array.from(map).sort((a,b)=>b[0]-a[0])
    // let arr4=Array.from(map).sort((a,b)=>b[1]-a[1])
    // console.log(arr4)
    return result
}
console.log(returnMaxFreqEle([1,2,3,4,5,5]))

