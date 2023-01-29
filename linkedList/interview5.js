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
// reverse nodes in linkedlist 
const reverseList =(head)=>{
    let prev = null;
    let current=head;
    while(current!==null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    };
    return prev;
};
//n   cur.next=prev(2)  <--     a  lose arrow     b  ->     c
//prev                          curr           (1)next =current.next
// n    a                 b                 c
//      prev (prev=curr)  cur (curr=next)   next

const reverseList2=(head,prev=null)=>{
   if(head===null) return prev;
   const next = head.next;
   head.next = prev;
   return reverseList(next,head);
};