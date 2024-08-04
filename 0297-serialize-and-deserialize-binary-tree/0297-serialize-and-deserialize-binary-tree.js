/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /*
    Time-complexity: O(N) - Both functions traverse through N nodes at most once.
    Space-complexity: O(N) - Both functions we keep the entire tree of N nodes.
    Go through the tree with preOrder traversal, and add to an ARRAY. If there
    is a null node, push '@' into the array as a null symbol. Make the array into
    a comma separated list using .join(",").
    In deserialize, split(",") the array and use preOrder traversal again to build
    up the tree. While going through the array, shift() can grab from the front of array.
    RECURSION TAKES CARE OF the node ordering when placing into tree.
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let serializedArray = [];

    var preOrderTraversal = function(node) {
        if(node) {
            serializedArray.push(node.val);
            if(node.left) {
                preOrderTraversal(node.left);
            } else {
                serializedArray.push("@");
            }
            if(node.right) {
                preOrderTraversal(node.right);
            } else {
                serializedArray.push("@");
            }
        }
    }

    if(root) {
        preOrderTraversal(root);
        return serializedArray.join(",");  
    } else {
        return "@";
    };
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    //1,2,@,@,3,4,@,@,5,@,@
    let dataArr = data.split(",");

    var preOrderTraversal = function() {
        while(dataArr.length > 0) {
            let value = dataArr.shift();

            if(value === "@") {
                return null;
            } else {
                //Get the needed data for the current node
                let newNode = new TreeNode(value);

                //Get new node attached to its left and right children
                newNode.left = preOrderTraversal();
                newNode.right = preOrderTraversal();

                return newNode;
            }
        }
    };

    return preOrderTraversal();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */