




Input: root = [3,9,20,null,null,15,7]
Output: 2
// Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

var minDepth = function(root) {
    
    if (root == null) return 0;
    
    let min = Number.MAX_SAFE_INTEGER;
    
    findMin(root, 1);
    
    return min;
    
    function findMin(node, depth) {
        // base
        if (node == null) return 0;
        
        if (node.left == null && node.right == null) {
            min = Math.min(min, depth);
        }
        
        findMin(node.left, depth + 1);
        findMin(node.right, depth + 1);
    }
};