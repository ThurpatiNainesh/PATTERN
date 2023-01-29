// Input: head = [2,1,5]
// Output: [5,5,0]

// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]
var nextLargerNodes = function(head) {
    let ar=new Array();
    while(head){
        ar.push(head.val);
        head=head.next;
    }
    let res=new Array(ar.length).fill(0);
    let stk=new Array();
    for(let i=0;i<ar.length;i++){
        while((stk.length>0)&&(ar[stk[stk.length-1]]<ar[i]))
            res[stk.pop()]=ar[i];
        stk.push(i);
    }    
    return res;
    
};
// [1,7,5,1,9,2,5,1]//array
// [ , , , ,4, ,6,7]//stack
// [7,9,9,9,0,5,0,0]//Result