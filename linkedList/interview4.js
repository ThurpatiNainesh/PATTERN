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
// return index 
const getNodeLinkedList =(head,index)=>{
    let current = head;
    let val=0
   //  current.next!==null(big no )
    while(current!==null){
        if(val==index){
            return current
        }
       current = current.next;
       val++
    }
    return null;
}
let x=getNodeLinkedList(a,2)
console.log(x)

const printLinkedList1 =(head,index)=>{
    if(index===0) return head;
    printLinkedList1(head.next,index-1)
 };
 printLinkedList1(a,2)