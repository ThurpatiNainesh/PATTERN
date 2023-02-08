// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

// Input: head = [1,2]
// Output: false


// Input: head = [1,2,2,1]
// Output: true

var isPalindrome = function(head) {
    // Get midddle of the list by using a fast and slow pointer
	
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
   
   // Reverse the end of the list
   
   let reversed = null
   let next = null
   let cur = slow
 
   while(cur){
  	    next = cur.next;
		cur.next = reversed;
		reversed = cur;
		cur = next;
   }
   
  // Then traverse both lists to compare values returning false if any of them aren't equal
  
  while(reversed){
      if(reversed.val !== head.val) return false
      reversed = reversed.next
      head=head.next
  }
    
    return true
};