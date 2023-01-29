// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

var preorderTraversal = function(root) {
    const ans = [];
    preorder(root);
    return ans;

    function preorder(root) {
        if (root === null) {
            return;
        }
        ans.push(root.val);
        preorder(root.left);
        preorder(root.right);
    } 
};