
// Find a triplet that sum to a given value

// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.

// Examples: 

// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
// Output: 12, 3, 9 
// Explanation: There is a triplet (12, 3 and 9) present 
// in the array whose sum is 24. 
// Input: array = {1, 2, 3, 4, 5}, sum = 9 
// Output: 5, 3, 1 
// Explanation: There is a triplet (5, 3 and 1) present 
// in the array whose sum is 9.

function find3Numbers(A, arr_size, sum)
{
    let l, r;
 
    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++)
    {
 
        // Fix the second element as A[j]
        for (let j = i + 1; j < arr_size - 1; j++)
        {
 
            // Now look for the third number
            for (let k = j + 1; k < arr_size; k++)
            {
                if (A[i] + A[j] + A[k] == sum)
                {
                    console.log("Triplet is " + A[i] +
                        ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }
 
    // If we reach here, then no triplet was found
    return false;
}
 
/* Driver code */
  
    let A = [ 1, 4, 45, 6, 10, 8 ];
    let sum = 22;
    let arr_size = A.length;
    find3Numbers(A, arr_size, sum);
     
// This code is contributed by Mayank Tyagi


// Javascript program to find a triplet
 
// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers(A, arr_size, sum)
{
    let l, r;
 
    /* Sort the elements */
    A.sort((a,b) => a-b);
 
    /* Now fix the first element one
    by one and find the
    other two elements */
    for (let i = 0; i < arr_size - 2; i++) {
 
        // To find the other two
        // elements, start two index
        // variables from two corners of
        // the array and move
        // them toward each other
         
        // index of the first element in the
        l = i + 1;
         
        // remaining elements
         
       // index of the last element
        r = arr_size - 1;
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum)
            {
            console.log("Triplet is " + A[i] + ", "
                  + A[l] + ", " + A[r]);
                return true;
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else // A[i] + A[l] + A[r] > sum
                r--;
        }
    }
 
    // If we reach here, then no triplet was found
    return false;
}
 
/* Driver program to test above function */
 
    // let A = [ 1, 4, 45, 6, 10, 8 ];
    // let sum = 22;
    // let arr_size = A.length;
 
    find3Numbers(A, arr_size, sum);
 
 
// This code is contributed by Mayank Tyagi
 
 