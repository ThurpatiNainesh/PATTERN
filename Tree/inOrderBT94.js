// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

var inorderTraversal = function(root) {
    let result = [];
   dfs(root);
   
   function dfs(root) {
       if(root != null) {
           dfs(root.left);
           result.push(root.val);
           dfs(root.right);
       }
   }
   
   return result;
};

const traversed = [];
    function inOrderTraverse1(node) {
        if (node.left) {
            inOrderTraverse1(node.left);
        }
        traversed.push(node.val);
        if (node.right) {
            inOrderTraverse1(node.right);
        }
    }
    inOrderTraverse1(root);
    return traversed;