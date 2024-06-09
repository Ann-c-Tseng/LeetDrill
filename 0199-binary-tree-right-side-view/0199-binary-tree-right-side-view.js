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