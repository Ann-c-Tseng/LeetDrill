/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//Start from the top of the tree,
//Note that at any node which branches off into one or two child nodes,
//that top node is the LCA of the two child nodes below.
//If p value or q value is greater than the parent node, we know in the BST
//to traverse down the right side for greater values. Similarly, left if p or q is less than the parent node.
//And p or q can be a descendant of itself as well.

//Time complexity: O(log n)
var lowestCommonAncestor = function(root, p, q) {
    //move left
    if((root.val > p.val) && (root.val > q.val)) {
        return lowestCommonAncestor(root.left, p, q);
    }
    
    if((root.val < p.val) && (root.val < q.val)) {  //move right
        return lowestCommonAncestor(root.right, p, q);
    }
    
    return root; //root val is the LCA
};