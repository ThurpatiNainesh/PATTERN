//   findLongestSubstring('') // 0
//   findLongestSubstring('rithmschool') // 7
//   findLongestSubstring('thisisawesome') // 6
//   findLongestSubstring('thecatinthehat') // 7
//   findLongestSubstring('bbbbbb') // 1
//   findLongestSubstring('longestsubstring') // 8
//   findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      //  this chakra activates when it seen element twice 
      if (seen[char]) {
        start = Math.max(start, seen[char]);
    
      }
      console.log(start)
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // console.log(i - start + 1)
      // console.log(longest)
      //  storing element with index 
      seen[char] = i + 1;
      console.log(seen)
    }
    return longest;
}