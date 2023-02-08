let a=1
let b=2
let temp = a;
   a=b
   b=temp
   console.log(a,b)

   let c=1;
   let d=2;
   [c,d]=[d,c]
   console.log(c,d)

   let i=2
   let j=3
   i=i+j;
//    h=2+3===>5
   j=i-j;
//    r=5-3===>2
   i=i-j
//  h=5-2====>3
   console.log(i,j)
   let arr=[1,2,3,4,5]
   arr.reverse()
   console.log(arr)
   arr.sort((a,b)=>a-b)
   console.log(arr)
   let result=[]
   for(let i=arr.length-1;i>=0;i--){
       result.push(arr[i])
   }
console.log(result)

function revfun(arr,left=0,right=arr.length-1){
    while(left<right){
       arr[left]=arr[left]+arr[right]
       arr[right]=arr[left]-arr[right]
       arr[left]=arr[left]-arr[right]
       left++
       right--
    }
    return arr
}
console.log( revfun(result,left=0,right=result.length-1))

// let arr3=[1,2,3,4,5];
// let k=3;
// for(let i=0;i<k;i++){
//     arr3.unshift(arr3.pop())
// }