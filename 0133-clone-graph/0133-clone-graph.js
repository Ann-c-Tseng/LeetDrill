/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {_Node} node
 * @return {_Node}
 */
 /*
Time-complexity: O(V + E) - Number of nodes (vertices) and edges, where we traverse the old graph's nodes and vertices at most once per V and E.
Space-complexity: O(V) - The oldToNew map references each node and its clone, which can get to length V as the number of nodes (vertices). The depth first search recursive stack here can also go as deep as the number of nodes.
We can use an oldToNew map in order to map nodes from the old graph to its clone node. Each node will also have its respective neighbor array that keeps track of its neighbor nodes. Using depth first search, we can return the basecase of having the new node if we find that the new node exists in the map given the old node as key. If not, we make the new node (a copy of the old) and add it to our map as well. Then recursively find its neighbors to push into its neighbor array. Return the copy after all is done. Return the graph at the end.
 */
var cloneGraph = function(node) {
    const oldToNew = new Map();
    
    //If there is no graph, return null
    if(!node) {
        return null;
    }

    var dfs = function(node) {
        //Base case: if our map has a clone node already complete for a given old node
        if(oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        //Otherwise, clone the node and add it to the map
        let copy = new Node(node.val);
        oldToNew.set(node, copy);

        //And get the neighbors for this new node (copy) and save it to the map.
        //We can push to this new node (copy)'s neigbors array recursively
        node.neighbors.forEach((neighbor) => {
            copy.neighbors.push(dfs(neighbor));
        });
        return copy;
    } 

    return dfs(node);
};