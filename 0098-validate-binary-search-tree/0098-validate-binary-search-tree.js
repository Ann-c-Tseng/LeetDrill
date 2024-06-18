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
 * @return {boolean}
 */

/*
Solution attempt:
Go through each node using depth first search.
If we hit a null, then we automatically return true (base case). Consider a tree with 1 singular root node to be a true binary search tree.
If we hit a node with a particular value, we must consider if the left branch contain only nodes with keys less than the node key, and right branch contain only nodes with keys greater than the node key.

*/
var isValidBST = function(root) {
    return dfs(root, -Number.MAX_VALUE, Number.MAX_VALUE)
};

var dfs = function(node, leftMinThreshold, rightMaxThreshold) {
    if(node) {
        if(leftMinThreshold < node.val && node.val < rightMaxThreshold) {
            return dfs(node.left, leftMinThreshold, node.val) && dfs(node.right, node.val, rightMaxThreshold);
        } else {
            return false;
        }
    }
    return true;
}