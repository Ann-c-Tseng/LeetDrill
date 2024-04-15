/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/* Time complexity: O(N). Hit each node at most once. */
var isSameTree = function(p, q) {
    return check(p, q);
};

var check = function(p, q) {
    //Base cases
    if(!p && !q) { //reach the end of branch and have no differences
        return true;
    }
    if((p) && (q) && (p.val !== q.val)) { //values are not equal in !null node
        return false;
    }
    if((!p && q) || (p && !q)) { //one side is null while the other isn't
        return false;
    }
    
    //Keep going down the tree to the left and right.
    return check(p.left, q.left) && check(p.right, q.right);
}