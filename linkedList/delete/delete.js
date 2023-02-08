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

function DeleteNode(head,position){
    let cur= head;
    let prev=null;
    let i=0
    while(i<position){
        prev = cur;
        cur = cur.next;
        i++
    }
    prev.next = cur.next;
    cur.next = null
    return head

}
console.log(DeleteNode(a,2))


