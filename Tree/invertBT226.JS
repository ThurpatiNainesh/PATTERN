// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Input: root = []
// Output: []

// Input: root = [2,1,3]
// Output: [2,3,1]


var invertTree = function(root) {
    const reverse = (node) => {
		if (!node) return;

		let left = node.left;
		let right = node.right;
		node.left = right;
		node.right = left;

		reverse(node.left);
		reverse(node.right);
	};

	reverse(root);
	return root;
};