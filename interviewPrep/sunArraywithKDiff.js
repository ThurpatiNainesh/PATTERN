
// Number of subarrays having sum less than K


// Input : arr[] = {2, 5, 6}
//         K = 10
// Output : 4
// The subarrays are {2}, {5}, {6} and
// {2, 5},

// Input : arr[] = {1, 11, 2, 3, 15}
//         K = 10
// Output : 4
// {1}, {2}, {3} and {2, 3}


    // Function to find number of
    // subarrays having sum less than k.
    function countSubarray(arr , n , k)
    {
        var count = 0;
 
        for (i = 0; i < n; i++)
        {
            var sum = 0;
            for (j = i; j < n; j++)
            {
 
                // If sum is less than
                // k then update sum and
                // increment count
                if (sum + arr[j] < k)
                {
                    sum = arr[j] + sum;
                    count++;
                }
                else
                {
                    break;
                }
            }
        }
        return count;
    }
 
    // Driver Code
        var array = [ 1, 11, 2, 3, 15 ];
        var k = 10;
        var size = array.length;
        var count = countSubarray(array, size, k);
        console.log(count);
 
// This code is contributed by Rajput-Ji