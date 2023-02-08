// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    let stMap ={}
    
    for(let i=0;i<s.length;i++){
        if(stMap[s[i]]==undefined){
            stMap[s[i]] = true;
        }else{
            stMap[s[i]]=false
        }
    }
    for(let i=0;i<s.length;i++){
        if(stMap[s[i]]){
            return i
        }
    }
    return -1
};