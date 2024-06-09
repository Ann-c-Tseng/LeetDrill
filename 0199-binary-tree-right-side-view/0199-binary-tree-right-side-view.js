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
 * @return {number[]}
 */

/* O(N) time complexity, depth first search and replacing at each
level, all the nodes that are not the right most node.
Dfs will end at the right most side of the tree in searching */
var rightSideView = function(root, level = 0, levels = []) {
    const isBaseCase = root === null;
    if(isBaseCase) return levels;
    
    levels[level] = root.val;
    return dfs(root, level, levels);
};

var dfs = function(root, level, levels) {
    rightSideView(root.left, level+1, levels);
    rightSideView(root.right, level+1, levels);
    return levels;
}