class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a= new Node('A')
const b= new Node('B')
const c= new Node('C')
const d= new Node('D')

a.next = b;
b.next = c;
c.next = d;
var reorderList = function(head) {
    if (!head || head.next == null || head.next.next == null) return head; //<= 2 size 
    let mid = findMid(head); //if even length,split evenly, if odd pick second as mid
    let second = reverse(mid.next);
    mid.next = null; //split two lists
    merge(head,second);    
};
var findMid = function(head){
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
var reverse = function(head){
    let prev = null;
    let cur = head;
    while (cur){
        let temp = cur.next; //store (cur.next) node
        cur.next = prev; //link
        prev = cur;
        cur = temp;
    }
    return prev;
}
var merge = function(l1, l2){
    //since mid choose second, so first list size >= second list size
    let dummy = new ListNode(-1); //modify linkedlist
    let i = 0; //how to insert right to left one by one, use even/odd math, if even add first list, if odd add second list
    while (l2 != null){
        if (i % 2 == 0){ //add first
            dummy.next = l1;
            l1 = l1.next;
        }
        else{
            dummy.next = l2; //add second
            l2 = l2.next;
        }
        i++;
        dummy = dummy.next;
    }
    if (l1) {
        dummy.next = l1;
    }
}