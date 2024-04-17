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
/* Time complexity: O(N)
We hit each node at most one, bottom up + post order traversal.
*/

/* Height balanced? a binary tree in which the height of the left and the right subtree of any node differ by not more than 1 */
var isBalanced = function(root) {
    return recurse(root);    
};

var height = function(node) {
    if(!node) {
        return 0;
    }
    
    var left = height(node.left) + 1;
    var right = height(node.right) + 1;
    
    return Math.max(left, right);
}

//Going from bottom up, Post order traversal
//Find the height from the left and the right subtree of a node
//See if it differs by more than 1. At any point if it does, then return false.
//Return the condition of the left and right recursion result up the tree
var recurse = function(node) {
    if(!node) {
        return true;
    }
    
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
    
    if(Math.abs(leftHeight-rightHeight) > 1) {
        return false;
    }
    
    //Recursively check the balance for left and right subtree
    return recurse(node.left) && recurse(node.right);
}

