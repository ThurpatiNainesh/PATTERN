class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')


a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;
// print val
const bfs=(root)=>{
    if(root===null) return null;
    const result=[];
    const queue=[root];
    while(queue.length>0){
        const current= queue.shift();
        result.push(current.val)
        if(current.left!==null)queue.push(current.left)
        if(current.right!==null)queue.push(current.right)
    }
    return result 
}
let x = bfs(a)
console.log(x)


// find the target value
const bfs2=(root,target)=>{
    if(root===null) return null;
    const queue=[root];
    while(queue.length>0){
        const current= queue.shift();
        if(current.val===target){
            return true
        }
        if(current.left!==null)queue.push(current.left)
        if(current.right!==null)queue.push(current.right)
    }
    return false 
}
let y = bfs2(a,'f')
console.log(y)

const treeIncludes=(root,target)=>{
    if(root===null) return false;
    if(root.val===target) return true;
    return treeIncludes(root.left,target)||treeIncludes(root.right,target)
}
let g=treeIncludes(a,'f')
console.log(g)

// tree sum
const bf3=(root)=>{
    if(root===null) return null;
    let total=0;
    const queue=[root];
    while(queue.length>0){
        const current= queue.shift();
            total+=current.val
        if(current.left!==null)queue.push(current.left)
        if(current.right!==null)queue.push(current.right)
    }
    return total;
}
let k = bfs2(a,'f')
console.log(k)

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// sum the val fall between L and R
var rangeSumBST = function(root, L, R) {
    const bf3=(root)=>{
    if(root===null) return null;
    let total=0;
    const queue=[root];
    while(queue.length>0){
        const current= queue.shift();
        if(current.val>=L&&current.val<=R)
            total+=current.val
        if(current.left!==null)queue.push(current.left)
        if(current.right!==null)queue.push(current.right)
    }
    return total;
}
return bf3(root)
};

// find smallest val in tree
const bfs4=(root,target)=>{
    if(root===null) return null;
    let min=Infinity
    const queue=[root];
    while(queue.length>0){
        const current= queue.shift();
        if(current.val<min){
            min = current.val
        }
        if(current.left!==null)queue.push(current.left)
        if(current.right!==null)queue.push(current.right)
    }
    return min
}
let p = bfs4(a,'f')
console.log(p)
