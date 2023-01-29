// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]
var mergeTwoLists = function(l1, l2) {
    let curr= new ListNode()
    const dummy= curr
    while(l1&&l2){
        if(l1.val<l2.val){
            curr.next=l1;
            l1=l1.next;
        }else{
            curr.next=l2
            l2=l2.next;
        }
        curr=curr.next;
    }if(l1){
        curr.next=l1
    
    }if(l2){
        curr.next=l2
        
    }
    console.log(JSON.stringify(curr));
    return dummy.next;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))