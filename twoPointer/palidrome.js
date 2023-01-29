// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindro

var isPalindrome = function(s) {
    if (s === "") {
        return true;
    }
    
    // 1. Remove non-alphanumeric chars from the string
    const alphanum = s.toLowerCase().replace(/[\W]/g, "");
    
    let front = 0;
    let back = alphanum.length - 1;
    
    while (front < back) {
        const frontChar = alphanum[front];
        const backChar = alphanum[back];
        if (frontChar != backChar) {
            return false;
        }
        front++;
        back--;
    }
    
    return true;
};