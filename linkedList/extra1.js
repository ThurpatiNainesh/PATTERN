// Given a pointer to the head of a linked list and a specific position, determine the data value at that position. Count backwards from the tail node. The tail is at postion 0, its parent is at 1 and so on.


function getNode(llist, positionFromTail) {
    // Write your code here
    const data = [];
    let current=llist
    while(current) {
        data.push(current.data);
        current = current.next;
    }
    return data[data.length-positionFromTail-1];

}

function reversePrint(llist) {
    // Write your code here
    const data = [];
    let node = { next: llist};
    do {
        node = node.next;
        data.push(node.data);
    } while (node.next)
    data.reverse().forEach(d => process.stdout.write(d + "\n"));
}

function insertNodeAtHead(head, data) {
    let n = new SinglyLinkedListNode(data);
    n.next = head;
    
    return n;
}

function CompareLists(llist1, llist2) {
    // / checks for null head
    if (!llist1 || !llist2) {

        // if both null, the lists are the same length
        return llist1 === llist2 ? 1 : 0;
    }

    // if the data is the same, compare next node
    return llist1.data === llist2.data ? CompareLists(llist1.next, llist2.next) : 0;
}

function removeDuplicates(llist) {
    // Write your code here
    let ans = llist;
        
    while(ans.next){ 
        ans.data == ans.next.data ? 
            ans.next = ans.next.next
            : 
            ans = ans.next; 
    }
    
    return llist;
}

function findMergeNode(headA, headB) {
    let a = headA;
        while(a) {
            let b = headB;
            while(b) {
                if (a === b) return a.data;
                b = b.next;
            }
            a = a.next;
        }
        return null;
    }

    function insertNodeAtTail(head, data) {
        const newNode = new SinglyLinkedListNode(data);
        
        if (head === null) {
          head = newNode;
          return head;
        }
        
        const trueHead = head;
        
        while (head.next !== null) {
          head = head.next;
        }
        
        head.next = newNode;
        
        return trueHead;
        }

        function deleteNode(llist, position) {
            // Write your code here
             let nodeToDelete = llist;
          
          if (position === 0) {
            return nodeToDelete.next;
          }
          
          let i = 1;
          while(nodeToDelete){
              if( i === position){
                  nodeToDelete.next = nodeToDelete.next.next;
                  return llist;
              }
              nodeToDelete = nodeToDelete.next;
              i++;
          }
        }