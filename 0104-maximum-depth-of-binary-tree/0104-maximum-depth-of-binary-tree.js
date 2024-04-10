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
 * @return {number}
 */
var maxDepth = function(root) {
    return findDepth(root);
}


var findDepth = function(node) {
    //To find the maximum depth of a binary tree
    //We can find the maximum height to the left of the root
    //We can find the maximum height to the right of the root
    //Then which ever is the larger height, add 1 to account for the root
    //Time complexist: O(n)
    
    if(node === null) {
        return 0;
    }
    
    var left = findDepth(node.left);
    var right = findDepth(node.right);
    return Math.max(left, right) + 1;
}

