class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a= new Node(2)
const b= new Node(8)
const c= new Node(5)
const d= new Node(7)

a.next = b;
b.next = c;
c.next = d;

const sumOfValue =(head)=>{
    let current = head;
    let result=0;
   //  current.next!==null(big no )
    while(current!==null){
       result+=current.val
       current = current.next;
    }
    return result
}
let x = sumOfValue(a)
console.log(x)
const sumList=(head)=>{
    if(head===null) return 0;
    return head.val+sumList(head.next)
}
let z = sumList(a)
console.log(z)
