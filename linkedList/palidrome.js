/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
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
var isPalindrome = function(head) {
    let stack=[]
    let curr=head;
    while(curr){
        stack.push(curr.val)
        curr=curr.next
    }

    let res=head;
    while(res){
        if(res.val!==stack.pop()){
            return false
        }
        res = res.next
    }
	return true
};