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
O(N) - worst case, visit all the nodes to find the maximum value which also is the kth smallest.

Traverse the tree in-order.
*/
var kthSmallest = function(root, k) {
    var count = 0;
    
    function inorder(node) {
        if(!node) return null;
        
        //Traverse left subtree
        var left = inorder(node.left);
        console.log("test " + node.val)
        if(left) return left;
        
        //Process current node
        count++;
        if(count === k) return node.val;

        //Traverse right subtree
        return inorder(node.right);
    }
    return inorder(root, count, k);
};
