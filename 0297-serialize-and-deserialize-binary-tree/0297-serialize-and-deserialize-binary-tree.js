/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//Level Order Traversal Queue Solution BELOW:
/*
Time-complexity: O(N) - Both serialize and deserialize traverse through the tree node at most once.
Space-complexity: O(N) - Both serialize and deserialize uses the entire tree structure of N nodes.
Serialize - Use a queue and traverse level by level the given tree. At each node store into array, grab its left and right child if any.
Make sure to take care of null nodes with '@' symbol. Use an array to track the node values. Use join(",") to make arr into string.
Deserialize - Go through the array and also use the queue to attach left and right children to each new nodes.
*/

var serialize = function(root) {
    if(!root) return "@";//given an empty tree []

    const queue = [root];
    const result = [];

    while(queue.length > 0) {
        const node = queue.shift(); //Pull from the front of the queue to move through tree level-by-level
        if(node) {
            result.push(node.val.toString());
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push("@");
        }
    }
    return result.join(",");
}

var deserialize = function(data) {
    if(data === "@") return null; //Given tree is empty

    const dataArray = data.split(",");

    const root = new TreeNode(dataArray[0]);
    const queue = [root];
    let counter = 1;

    while(queue.length > 0) {
        const node = queue.shift();

        //Go through left and right child, add to current node.
        if(dataArray[counter] !== "@") {
            node.left = new TreeNode(dataArray[counter]);
            queue.push(node.left);
        }
        counter++;
        if(dataArray[counter] !== "@") {
            node.right = new TreeNode(dataArray[counter]);
            queue.push(node.right);
        }
        counter++;
    }

    return root;
}





//IN ORDER DFS Solution BELOW: 

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
/*
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 /*
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
*/


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
 /*
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
*/


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 