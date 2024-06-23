/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
Initial solution:
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    var root = new TreeNode(preorder[0]);
    var mid = inorder.indexOf(root.val);
    
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));
    
    return root;
};
The above has O(N^2) time complexity, running through all the values in the subtree O(N) + using slice which at its worst can take up O(N) time complexity. We can reduce this complexity to be O(N) using a hashmap which has lookup that takes constant O(1) time.

Better solution is below, taking O(N) time complexity, with the hashmap lookup being O(1)
*/

var buildTree = function(preorder, inorder) {
    var preorderIndex = 0;
    var inorderIndexMap = new Map();
    for(var i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }
    
    function arrayToTree(left, right) {
        //if there are no elements to construct the tree
        if(left > right) return null;
        
        //Get the preorderIndex element as the root and increment it
        var rootValue = preorder[preorderIndex];
        var root = new TreeNode(rootValue);
        preorderIndex++;
        
        //Now build the left and right subtrees. 
        //Remember to exclude the inorderIndexMap[rootValue] 
        //since that is the root and is already accounted for above.
        root.left = arrayToTree(left, inorderIndexMap.get(rootValue) - 1);
        root.right = arrayToTree(inorderIndexMap.get(rootValue) + 1, right);
        
        return root;
    }
    
    return arrayToTree(0, preorder.length - 1);
}
