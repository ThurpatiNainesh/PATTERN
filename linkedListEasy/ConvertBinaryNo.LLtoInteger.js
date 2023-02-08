


// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:

// Input: head = [0]
// Output: 0

// var getDecimalValue = function(head) {
//     let res = 0
//   while(head) {
//       if (head.val==1) {
//           res+=1
//       }
//       head = head.next
//       res*=2
//   }
//   return res/2
// };
// https://www.youtube.com/watch?v=pHRVViY3sPM

// https://www.youtube.com/watch?v=CyxbuJwA-0g
var getDecimalValue = function(head) {
    let result=head.val
    while(head.next){
        result = result*2 + head.next.val;
        head = head.next;
    }
    return result
 }



