function printFirstNegativeInteger(arr, n, k)
{
    // flag to check whether window contains
    // a negative integer or not
    let flag;
     
    // Loop for each subarray(window) of size k
    for (let i = 0; i<(n-k+1); i++)        
    {
        flag = false;
 
        // traverse through the current window
        for (let j = 0; j<k; j++)
        {
            // if a negative integer is found, then
            // it is the first negative integer for
            // current window. Print it, set the flag
            // and break
            if (arr[i+j] < 0)
            {
                console.log((arr[i+j])+" ");
                flag = true;
                break;
            }
        }
         
        // if the current window does not
        // contain a negative integer
        if (!flag)
            console.log("0"+" ");
    }
}
 
    // Driver Code
     
    let arr = [12, -1, -7, 8, -15, 30, 16, 28];
    let n = arr.length;
    let k = 3;
    printFirstNegativeInteger(arr, n, k);
 
// This code is contributed by avijitmondal1998.

function printNegativeNumber(arr){
    result=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
      result.push(arr[i])
    }
  }
  return result
}
console.log(printNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28]))