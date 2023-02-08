// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).


var isPowerOfThree = function(n) {
    if(n<1) return false
   if(n===1) return true
   if(n%3===0 &&  isPowerOfThree(n/3)){
       return true
   }
   return false
};