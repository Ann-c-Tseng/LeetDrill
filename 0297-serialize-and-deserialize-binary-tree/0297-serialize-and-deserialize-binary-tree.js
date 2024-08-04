/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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