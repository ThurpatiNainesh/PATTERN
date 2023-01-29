// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
// the smallest in lexicographical order
//  among all possible results.
Input: s = "bcabc"
Output: "abc"
var removeDuplicateLetters = function(s) {
    const n = s.length;
     const stack = [];
     const seen = {};
     const occurence = {};
     // get the last occurence of each char
     for(let i = 0; i < n; i++){
         occurence[s[i]] = i;
     }
     
     // go through each chars in s and do following
     for(let j = 0; j < n; j++){
         // here if we have the same char appear more times and
         // in contiguous position just we skeep it
         if(seen[s[j]]) continue;
         // here go to the stack and compare the top char in it with
         // the current char if cut char is small in lexicographical order
         // and the top char in stack appear one more time in s just pop it
         // and mark it unvisited 
         while(stack.length > 0 && s[j] < stack[stack.length - 1] && occurence[stack[stack.length - 1]] > j){
         let cut = stack.pop();
         seen[cut] = false;
               }
         seen[s[j]] = true;
         stack.push(s[j]);
     }
     return stack.join('');
 };
 
//  Input: s = "abbaca"
//  Output: "ca"
//  Explanation: 
//  For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca"
//  Input: s = "azxxzy"
//  Output: "ay"

 var removeDuplicates = function(S) {
    const stack = []
    
    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] === S[i]) {
            stack.pop()
        } else {
            stack.push(S[i])
        }
    }
    
    return stack.join('')
};