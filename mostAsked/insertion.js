// Input: arr[] = {1, 3, 5, 6}, K = 5
// Output: 2
// Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.

// Input: arr[] = {1, 3, 5, 6}, K = 2
// Output: 1
// Explanation: Since 2 is not present in the array but can be inserted at index 1 to make the array sorted.
function find_index(arr, n, K)
{
     
    // Traverse the array
    for(let i = 0; i < n; i++)
      
        // If K is found
        if (arr[i] == K)
            return i;
  
        // If current array element
        // exceeds K
        else if (arr[i] > K)
            return i;
  
    // If all elements are smaller
    // than K
    return n;
}
 
// Driver code
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let K = 2;
  
document.write(find_index(arr, n, K));
 