




function pairCount(arr,n,target){
    let ans=0;
    let map =new Map()

    for(let i=0;i<n;i++){
        let x=arr[i]
        let y=target-x
        if(map.has(y)){
            ans+=map.get(y)
        }
        if(map.has(x)){
            map.set(x,map.get(x)+1)
        }else{
            map.set(x,1)
        }
    }
    return ans
}
console.log( pairCount([1,2,3,5,3,1],7,6))

1
/*1 no 2 no 3 no  
6-5=1 there count=1
6-3=3 there in map count=2
6-1=5 there in map count=3
*/
