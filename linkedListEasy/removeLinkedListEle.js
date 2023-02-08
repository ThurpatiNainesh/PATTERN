
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
 
// Input: head = [], val = 1
// Output: []

// Input: head = [7,7,7,7], val = 7
// Output: []


var removeElements = function(head, val) {
    let h=new ListNode(-1);
    h.next=head;
    head=h;
    while(h.next!==null){
        if(h.next.val===val){
            h.next=h.next.next;
        }
        else{
            h=h.next;
        }
    }
    return head.next;  
};