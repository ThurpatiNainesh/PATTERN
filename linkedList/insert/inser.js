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

function insertNodeAtHead(head,data){
    let newNode = new Node(data)
    newNode.next=head;
    head = newNode
    return newNode
}
console.log(insertNodeAtHead(a,"hi"))


function inserNodeAtTail(head,data){
    let newNode = new Node(data)
   if(head==null){
          head = newNode

   }else{
        while(head.next!==null){
        head=head.next
    }

    head.next = newNode 

   }
    return head
}
console.log( inserNodeAtTail(a,"joke"))

function inertNodeATspecificPosition(head,data,position){
    let newNode = new Node(data);
    let prev = null;
    let cur=head;
    if(position===0){
        newNode.next = cur;
        head = newNode
    }else{
        let i=0;
        while(i<position){
            prev = cur
            cur= cur.next;
            i++
        }
        prev.next = newNode
        newNode.next = cur
    }
    return head
}