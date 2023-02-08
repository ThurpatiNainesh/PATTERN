// You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return 1. Otherwise, return 0.

// Example:
// list1=1->2->3->Null
// list2=1->2->3->4->Null

// The two lists have equal data attributes for the first 3 nodes. list2 is longer, though, so the lists are not equal. Return 0.


// Function Description:

// Complete the compare_lists function in the editor below.

// compare_lists has the following parameters:
//       1. SinglyLinkedListNode llist1: a reference to the head of a list
//       2. SinglyLinkedListNode llist2: a reference to the head of a list

// Returns:
//         int: return 1 if the lists are equal, or 0 otherwise
    
    
    function compareLists( head1, head2) {
    if (head1 == null && head2 == null) {
        return true;
    } else if (head1 == null || head2 == null) {
        return false;
    } else if (head1.data != head2.data) {
        return false;
    }
    return compareLists(head1.next,head2.next);

}