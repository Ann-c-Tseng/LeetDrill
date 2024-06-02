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
 * @return {number[][]}
 */

//Breadth first search/level order traversal

//Main idea of level order traversal is to traverse all the 
//nodes of the lower levels, and then move on to higher levels.

//We can actually use depth first search here
var levelOrder = function(root, level = 0, levels = []) {
    const isBaseCase = root === null;
    if(isBaseCase) return levels;
    
    const isLastNode = level === levels.length;
    if(isLastNode) levels.push([]);
    
    levels[level].push(root.val);
    //console.log(levels)
    return dfs(root,level,levels);
};

var dfs = function(root,level,levels) {
    //console.log("left")
    if(root.left) levelOrder(root.left, level + 1, levels);
    //console.log("right")
    if(root.right) levelOrder(root.right, level + 1, levels);
    return levels;
}
