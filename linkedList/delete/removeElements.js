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

function RemoveTargetElement(head,target){
    let prev = null
    let cur = head
    while(cur){
        if(cur.val===target){
            prev.next = cur.next;
            cur = cur.next
        }else{
            prev=cur;
            cur=cur.next;
        }
    }
    return head
}
console.log(RemoveTargetElement(a,"B"))


// function removeHead(head){
//    let next = head.next.nex;
//    head.val = head.next.val;
//    head.next = next;
//    return head

// }
console.log(removeHead(a))

function removetail(head){
   while(head.next.next!==null){
      head=head.next
   }
   head.next=null
   return head
}
console.log(removetail(a))
