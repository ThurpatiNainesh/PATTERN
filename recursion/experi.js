// let arr=[7,8,9,7,6]
// // console.log(arr.splice(1))
// function product(arr){
//     if(arr.length==2) return "fially done"
//     // [ 8, 9, 7, 6 ]
//          console.log(arr[0])
//     // return product(arr.slice(1))
//     return setTimeout(product(arr.slice(1)),0.2*100)
// }
// console.log(product(arr))

// let timeout;

// function myFunction() {
//   timeout = setTimeout(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }
// // return product(arr.slice(1))
  

    // function product(arr){
    //     function maza(){
    //      console.log("finally done")
    //    }
    //       // [ 8, 9, 7, 6 ]
    //            if(arr.length<=0){
    //              console.log(maza());
    //            }else {
    //              console.log(arr[0])
    //              let x=product(arr.slice(1))
    //              if(arr.length===0){
    //                 break;
    //              }
    //              return setTimeout(x,0.2*100)
    //            }
    //   }
    //   console.log(product([7,8,9,7,6]))


    // function recursiveFunction(arr) {
    //     if (arr.length === 0) {
    //         return "Finally Done";
    //     } else {
    //         setTimeout(() => {
    //             recursiveFunction(arr.slice(1));
    //         }, 200);
    //     }
    // }

    // 
    
    // function recursiveFunction(arr) {
    //     if (arr.length === 0) {
    //         return "Finally Done";
    //     } else if {
    //         setTimeout(() => {
    //             recursiveFunction(arr.slice(1));
    //         }, 200);
    //     }else{
    // return "Finally Done";
    // }
    // }
      
    function recursiveFunction(arr) {
        if (arr.length === 0) {
            return "Finally Done";
        } else if(arr.length>0) {
            setTimeout(() => {
              console.log(arr[0])
                recursiveFunction(arr.slice(1));
            }, 200);
        }else{
    return "Finally Done";
    }
    }
    console.log(recursiveFunction([1,2,3,4,5]))


//     let arr1=[1,2,3,[3,4,5],6,6,6]
// function flattenArr(arr){
//     if(arr.length===0){
//         return "finallay done"
//     }
//     let flate=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])===false) flate.push(arr[i])
//         else flate = flate.concat(flattenArr(arr[i]))
//     }
//     return flate
// }
// let u=flattenArr(arr1)
// console.log(u)

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 +i);
// }
// function productOfAnArray(arr,index){
//     if(arr.length==0){
//         return "finally done"
//     }
//     console.log(arr[arr.length-1])
    
//     return setTimeout(()=>productOfAnArray(arr[arr.length-1]),200)
// }
// console.log(productOfAnArray([1,3,4,5,2],5))
// let x = 5/5  
// console.log(x)