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
    Time-complexity: O(N), only going through each node once.
    Space-complexity: O(1), not including returned object space.
    Depth first search and calculate both the branch max sums to the left and right, as well as the max sum if including the parent node. Return up the tree the max sum branch (EITHER left or right max sum + parent node value).
 */
var maxPathSum = function(root) {
    let res = {maxSum: -Infinity}; //Objects and arrays can pass by reference in javascript, but not primitive values

    //This depth-first search returns the maximum path sum without split
    function dfs(root) {
        if(!root) {
            return 0;
        }

        //If the leftMax ends up being a negative sum, we don't wanna include the left child branch
        //If the rightMax ends up being a negative sum, we don't wanna include the right child branch
        let leftMax = Math.max(dfs(root.left), 0);
        let rightMax = Math.max(dfs(root.right), 0);

        //Find the max path sum WITH split
        //Update res to either the max path sum with split or keep it at original value.
        res.maxSum = Math.max(res.maxSum, root.val + leftMax + rightMax);

        //return up the tree the max path sum without split in case there's more nodes up the tree
        return root.val + Math.max(leftMax, rightMax); 
    }
    
    dfs(root);
    return res.maxSum;
};