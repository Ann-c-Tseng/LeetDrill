/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

/*
Time Complexity: O(N) - Use In-order traversal, go through the tree in order, and once we hit the kth smallest value, we return it. We use recursive in-order traversal, but Neetcode uses ITERATIVE in-order traversal, which also works.
*/
var kthSmallest = function(root, k) {
    var count = 0;
    
    function inorder(node) {
        console.log(node)
        if(!node) return null;
        
        //Traverse left subtree
        var left = inorder(node.left);
        if(left) return left;
        
        //Process current node
        count++;
        if(count === k) return node.val;
        
        //Traverse right subtree
        return inorder(node.right);
    }
    return inorder(root, count, k);
};
