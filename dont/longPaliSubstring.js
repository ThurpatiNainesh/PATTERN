// 5. Longest Palindromic Substring
// Given a string s, return the longest 
// palindromic
// substring
//  in s.

// Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" 
// is also a valid answer.

// Example 2:
Input: s = "cbbd"
Output: "bb"




var longestPalindrome = function(s) {
    if(s.length<2) return s ;
    let start =0 , maxLength=1
    function expandAroundCenter(left,right){
        while(s[left]===s[right]&& left>=0&& right<s.length){
            if(right-left+1>maxLength){
                start = left ;
                maxLength = right -left +1
            }
            left -=1
            right += 1
        }
    }
    for(let i=0;i<s.length;i+=1){
        expandAroundCenter (i-1,i+1);
        expandAroundCenter(i,i+1)
    }
    return s.substring(start,start+maxLength)
};