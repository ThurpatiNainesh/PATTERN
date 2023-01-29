
// 230. Kth Smallest Element in a BST
// Companies
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3




var kthSmallest = function(root, k) {
    let result = dfs(root);           //Create an array, call recursive dfs function and store in result Array
  function dfs(node) {
      if(!node) return [];           // Base case
      
      //Inorder traversal. Since the description says it's a BST, we can always assume it is sorted. left < root < right.
      //This will return a sorted Array.
      return [...dfs(node.left), node.val, ...dfs(node.right)]; 
  }
  
  return result[k-1];          //return kth element

};

var kthSmallest = function(root, k) {
  if(root===null) return null;
  const result=[];
  const queue=[root];
  while(queue.length>0){
      const current= queue.shift();
      result.push(current.val)
      if(current.left!==null)queue.push(current.left)
      if(current.right!==null)queue.push(current.right)
  }
  let a = result.sort((a,b)=>a-b)
  return a[k-1]

};