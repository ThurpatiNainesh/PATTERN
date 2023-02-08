// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
var reverseString = function(s) {
    let left=0
    let right= s.length-1
    while(left<right){
        let hold = s[left];
        s[left] = s[right]
        s[right] = hold
        left++
        right--
    }
    
};