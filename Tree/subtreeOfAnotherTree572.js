// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false



var isSubtree = function(root, subRoot) {
    if (isMatch(root, subRoot)) return true
    if (root == null) {
        return false
    }
        
    else return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    
};

//helper method when find root node then check whole tree(include val and structure), if both exactly same
const isMatch = function(r1, r2){
    if (r1 != null && r2 == null) return false
    if (r1 == null && r2 != null) return false
    if (r1 == null && r2 == null) return true
    
    return (r1.val == r2.val) &&(isMatch(r1.left, r2.left) && isMatch(r1.right, r2.right))
}