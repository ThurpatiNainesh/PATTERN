// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
var longestCommonPrefix2 = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
                //   console.log(strs[0][i])
        if (!strs.every((a) => a[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};
console.log(longestCommonPrefix2(["flower","flow","flight"]))

// function ispositive(element, index, array) {
//     return element > 0;
//   }
//   print([11, 89, 23, 7, 98].every(ispositive)); 
//   true
//==================================================================
// function isodd(element, index, array) {
//     return (element % 2 == 1);
//   }
//   print([56, 91, 18, 88, 12].every(isodd)); 
//   false
let longestCommonPrefix3 = function(strs) {
    if(!strs.length) {
        return '';
    }
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            // console.log(strs[0][i])
            if(s[i] !== strs[0][i]) {
                // console.log(s.slice(0, i))
                return s.slice(0, i);
            }
        }
    }
    return strs[0];
};
// console.log(longestCommonPrefix3(["flower","flow","flight"]))