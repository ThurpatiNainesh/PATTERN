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
const findLinkedList =(head,target)=>{
    let current = head;
   //  current.next!==null(big no )
    while(current!==null){
       if (current.val===target){
        return true
       }
       current = current.next;
    }
    return false
}
let x= findLinkedList(a,'C')
console.log(x)

const findList=(head,target)=>{
    if(head===null) return false;
    if(head.val===target){
        return true 
    }
    return findList(head.next,'C')
}
let z = findList(a)
console.log(z)