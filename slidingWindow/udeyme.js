// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}


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
  console.log(findLongestSubstring('rithmschool') )
//   findLongestSubstring('rithmschool')