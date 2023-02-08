// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.







// let getIntersectionNode = function(headA, headB) {
//     if(headA===null || headB===null) {
//         return null;
//     }
//     let r1=headA;
//     let r2=headB;
//     while(r1!==r2){
//         r1=r1.next;
//         r2=r2.next;
//         if(r1===r2){
//            return r1;
//         }
//         if (r1===null){
//           r1=headB;  
//         }
//         if(r2===null){
//             r2=headA;
//         }
//     }
//     return r1;
// };

var getIntersectionNode1 = function(headA, headB) {
    if(headA===null || headB===null) {
        return null;
    }
    let r1=headA;
    let r2=headB;
    while(r1!==r2){
        //INORDER TO MAKE THINGS EVEN TO MEET 
        if(r1===null){
            r1=headB
        }else{
           r1=r1.next
        }

        if(r2===null){
            r2=headA
        }else{
           r2=r2.next
        }

    }
    return r1;
};