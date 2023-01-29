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
/// A ->B->C->D->null
const printLinkedList =(head)=>{
     let current = head;
    //  current.next!==null(big no )
     while(current!==null){
        console.log(current.val);
        current = current.next;
     }
}
 printLinkedList(a)

 const printLinkedList1 =(head)=>{
    if(head===null) return;
    console.log(head.val)
    printLinkedList1(head.next)
 };
 printLinkedList1(a)

 const collectionOfValue =(head)=>{
    let current = head;
    let result=[]
   //  current.next!==null(big no )
    while(current!==null){
       result.push(current.val)
       current = current.next;
    }
    return result
}
let x = collectionOfValue(a)
console.log(x)


const collectionOfValue1 =(head)=>{
    const values=[]
    fillValues(head,values);
    return values;
 };
 function  fillValues (head,values){
    if(head===null) return;
    values.push(head.val)
    return  fillValues (head.next,values)

 };
 let y=collectionOfValue1(a)
 console.log(y)
 

 

