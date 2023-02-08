// 918. Maximum Sum Circular Subarray
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 1

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.
// There are 2 use cases to consider. The max subarray sum is found either by not wrapping around the input array A xor by wrapping around the input array A.

// Case 1: if no wrap, then use Kadane's algorithm to find the maximum subarray sum (same as 53. Maximum Subarray)
// Case 2: if wrap, use Kadane's algorithm to find the minimum subarray sum, then substract the total sum from the minimum subarray sum.

// Note: Case 2 is a bit tricky, basically use deductive reasoning: if we can remove the minimum subarray from somewhere in the middle of A, then we are leftover with the maximum subarray which wraps around at each of the ends surrounding the minimum subarray in the middle.

// Edge Case: per the problem statement, the subarray sum cannot be comprised of an empty subarray with 0 sum. When all of the values of A are negative, for case 2 the minimum subarray is the entire array. Thus, the "leftover" result for the maximum subarray would be an empty subarray, which is not allowed. We can easily identify this use case when sum - min == 0. Since this value is invalid, this value is represented by negative infinity which will always be smaller than max (ie. when sum - min == 0, then always choose max as the only valid candidate for the maximum subarray sum).

let maxSubarraySumCircular = A => {
    let kadane = f => {
        let sum = A[0],
            ans = A[0];
        for (let i = 1; i < A.length; ++i)
            sum = f(sum + A[i], A[i]),
            ans = f(ans, sum);
        return ans;
    };
    let min = kadane(Math.min),
        max = kadane(Math.max),
        sum = A.reduce((a, b) => a + b);
    return Math.max(max, sum - min ? sum - min : -Infinity); // max of "no wrap" xor "wrap" 🎯
};
var maxSubarraySumCircular1 = function(A) {
    let maxSum, max, minSum, min, total
    maxSum = max = minSum = min= total = A[0]
    
    for(let i=1;i<A.length;i++){
      const n = A[i]
      max = Math.max(n, n+max)
      maxSum = Math.max(max, maxSum)
      min = Math.min(n, n+min)
      minSum = Math.min(min, minSum)
      total += n
    }
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
  };
  var maxSubarraySumCircular3 = function(A) {
    if (A.length == 1) return A[0];
    let maxS = A[0];
    let curMax = A[0]; 
    let minS = A[0];
    let curMin = A[0];
    let sum = A[0];
    
    for (let i=1; i<A.length; i++) {
      curMax = Math.max(A[i]+curMax, A[i]);
      maxS = Math.max(curMax, maxS);
      curMin = Math.min(A[i]+curMin, A[i]);
      minS = Math.min(curMin, minS);
      
      /*curMax = (A[i]+curMax> A[i])?A[i]+curMax: A[i]; //this was not faster
      if (curMax>maxS) maxS = curMax;
      curMin = (A[i]+curMin< A[i])?A[i]+curMin: A[i];
      if (curMin<minS) minS = curMin;
      */
      
      sum+=A[i];
    }
    return (sum == minS)? maxS:Math.max(maxS, sum-minS);
  }
  console.log(maxSubarraySumCircular3([5,-3,5]))