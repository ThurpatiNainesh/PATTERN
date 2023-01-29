/* JavaScript program to print subarray
with sum as given sum */
 
  
/* Returns true if the there is a subarray
of arr[] with sum equal to 'sum' otherwise
returns false. Also, prints the result */
function subArraySum(arr, n, sum)
{
    var curr_sum, i, j;
  
    // Pick a starting point
    for (i = 0; i < n; i++) {
        curr_sum = 0;
  
        // try all subarrays starting with 'i'
        for (j = i ; j < n; j++) {
           curr_sum = curr_sum + arr[j];
           
            if (curr_sum == sum) {
                console.log("Sum found between indexes " + i + " and " + j);
                return;
            }
        }
    }
  
    console.log("No subarray found");
}
  
// Driver Code
var arr = [ 15, 2, 4, 8, 9, 5, 10, 23 ];
var n = arr.length;
var sum = 23;
 
//Function Call
subArraySum(arr, n, sum);
 
 
//This code is contributed by phasing17