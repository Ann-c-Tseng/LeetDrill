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

/*
Time complexity: O(N)

Using depth first search, search through all the nodes.
Return back up the tree the number of good nodes from each path (left and right branch) = k
If our current node value is greater than or equal to max, also add to the k value.
Then return k as our result.
Hitting null returns 0 ofcourse.

Note: initial maximum should be less than the lowest node value threshold. (Number.MIN_VALUE)
*/
var goodNodes = function(root) {
    return dfs(root, Math.pow(-10, 9));
};

var dfs = function(node, possibleMax) {
    if(node) {
        var result = dfs(node.left, Math.max(node.val, possibleMax)) + dfs(node.right, Math.max(node.val, possibleMax));
        if(node.val >= possibleMax) {
            result++;
        }
        return result;
    }
    return 0;
}

