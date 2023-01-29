
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
 
//   isSubsequence('hello', 'hello world'); // true
//   isSubsequence('sing', 'sting'); // true
//   isSubsequence('abc', 'abracadabra'); // true
//   isSubsequence('abc', 'acb'); // false (order matters)

  // function isSubsequence(str1, str2) {
  //   var i = 0;
  //   var j = 0;
  //   if (!str1) return true;
  //   while (j < str2.length) {
  //     if (str2[j] === str1[i]) i++;
  //     if (i === str1.length) return true;
  //     j++;
  //   }
  //   return false;
  // }

  // function isSubsequence(str1, str2) {
  //   if(str1.length === 0) return true
  //   if(str2.length === 0) return false
  //   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  //   return isSubsequence(str1, str2.slice(1))
  // }