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


const depthFirstSearch=(root)=>{
    if(root==null) return [];
    const result=[];
    const stack=[root];
    while(stack.length>0){
        const current = stack.pop();
        result.push(current.val);
        if(current.right)stack.push(current.right);
        if(current.left)stack.push(current.left);
    }
    return result
}
let x=depthFirstSearch(a)
console.log(x)

const depthFirstSearch2=(root)=>{
    if(root===null) return [];
    const leftValue =depthFirstSearch2(root.left);
    const rightValue =depthFirstSearch2(root.right);
   return [root.val,...leftValue,...rightValue]
}
let y= depthFirstSearch2(a)
console.log(y)

//  sum values
const treeSum=(root)=>{
    if(root===null) return [];
    const leftValue =treeSum(root.left);
    const rightValue =treeSum(root.right);
   return root.val+leftValue+rightValue
}
let v= treeSum(a)
console.log(v)

const findTheMinValue=(root)=>{
    if(root===null) return [];
    const leftValue =findTheMinValue(root.left);
    const rightValue =findTheMinValue(root.right);
   return Math.min( root.val,...leftValue,...rightValue)
}

// find maxPath\
const maxPathSum=(root)=>{
    if(root===null) return -Infinity;
    if(root.left===null&&root.right===null) return root.val;
    const maxChildPath = Math.max(maxPathSum(root.left),maxPathSum(root.right))
    return root.val+maxChildPath;
}
var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};
