let arr =["flo ", "fly","flew"]



function commonPrefix(arr){
 for(let i=0;i<arr[0].length;i++){
   
   if(!arr.every((arr)=>arr[0]==arr[0][i])){
          return arr[0].slice(0,i+1)
   }
 }

}
console.log(commonPrefix(arr))