// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,"")
    let leftIndex = 0;
    let rightIndex = s.length-1;
    while(leftIndex<rightIndex){
        if(s[leftIndex].toLowerCase()!==s[rightIndex].toLowerCase()) return false
        leftIndex ++
        rightIndex--
    }
    return true 
};