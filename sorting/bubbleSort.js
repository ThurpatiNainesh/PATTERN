 let array=[7,4,3,2]
 function bubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
     let swap = false;
     for(let j=0;j<arr.length-1;j++){
      if(arr[j]>arr[j+1]){
           let temp = arr[j]
           arr[j]=arr[j+1]
           arr[j+1] = temp
             swap=true;
      }
     }
    if(swap===false)break;
  }
  return arr
 }
 console.log(bubbleSort(array))

 