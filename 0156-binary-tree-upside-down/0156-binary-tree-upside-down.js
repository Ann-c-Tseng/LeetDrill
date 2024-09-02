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
 * @return {TreeNode}
 */
 
/*
var upsideDownBinaryTree = function(root) {
    let newTree = root;
    
    //If a node does not have a left child, set current node to be new tree root.
    //If we have a left child, make the swap and return the right child (original root)
    var dfs = function(node) {
        if(!node.left) {
            let newRoot = new TreeNode(node.val);
            newTree = newRoot;
            return newRoot;
        }

        if(node.left) {
            let leftNode = dfs(node.left);
            leftNode.right = new TreeNode(node.val); //left child's right pointer to parent
            if(node.right) {
                leftNode.left = new TreeNode(node.right.val); //left child's left pointer to right child of parent
            }
            return leftNode.right; //Continue going up old tree layer by layer
        }
    }

    if(root !== null) {
        dfs(root);
    }
    return newTree;
};
*/

var upsideDownBinaryTree = function(root) {
    if(!root || (!root.left && !root.right)) {
        return root;
    }

    var dfs = function(node) {
        if(!node.left) {
            return node;
        }

        let rotatedLeft = dfs(node.left);
        node.left.right = node;
        node.left.left = node.right;
        node.left = node.right = null;
        return rotatedLeft;
    }

    return dfs(root);
}
