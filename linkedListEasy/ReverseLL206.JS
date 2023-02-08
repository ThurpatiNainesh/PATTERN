// Given the head of a singly linked list, reverse the list, and return the reversed list.



var reverseList = function(head) {
    let dummy = null;
   while (head != null) {
       let temp = head.next;//1
       head.next = dummy;//POINTING
       dummy = head;//SETING DUMMY TOHEAD 
       head = temp;//2
   }
   return current;
};

