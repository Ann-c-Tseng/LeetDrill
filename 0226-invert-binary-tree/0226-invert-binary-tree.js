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
var invertTree = function(root) {    
    flip(root);
    return root;
};

var flip = function(t) {
    var topPtr = t;
    if(topPtr && topPtr.right && topPtr.left) {
        var rPtr = topPtr.right;
        var lPtr = topPtr.left;
        
        console.log(rPtr.val)
        console.log(lPtr.val)
    
        topPtr.left = rPtr;
        topPtr.right = lPtr;
        
        flip(topPtr.left);
        flip(topPtr.right);
    } else if(topPtr && topPtr.right) {
        var rPtr = topPtr.right;
        
        topPtr.left = rPtr;
        topPtr.right = null; //do not forget to assign null to the now empty branch
        
        flip(topPtr.left);
    } else if(topPtr && topPtr.left) {
        var lPtr = topPtr.left;
        
        topPtr.right = lPtr;
        topPtr.left = null; //do not forget to assign null to the now empty branch
        
        flip(topPtr.right);
    }
}