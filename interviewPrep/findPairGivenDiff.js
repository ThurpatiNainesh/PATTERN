// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 

// Find a pair with the given difference

// Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
// Output: Pair Found: (2, 80)

// Input: arr[] = {90, 70, 20, 80, 50}, n = 45
// Output: No Such Pair

function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            console.log("Pair Found: (" + arr[i] + ", " +
            arr[j] + ")");
            return true;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

    console.log("No such pair");
    return false;
}

// Driver program to test above function

let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
findPair(arr, size, n);


// This code is contributed by Potta Lokesh