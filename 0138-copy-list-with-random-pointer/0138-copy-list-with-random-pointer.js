/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

//Time complexity O(n), because we have a 2 pass algorithm that goes
//through the nodes in the list each time in linear time
//Space complexity O(n), because our map is the length of the list
var copyRandomList = function(head) {
    
    //Set up a hashmap where the nodes of the old list
    //are keys, and the values are new copied node 
    //Note that the new nodes created do not
    //point to next or random nodes yet.
    var oldToNewMap = oldToNew(head);
    
    //Connect the copied nodes accordingly
    connectNodes(head, oldToNewMap);
    
    return oldToNewMap.get(head);
};

var oldToNew = function(head) {
    var m = new Map();
    var ptr = head;
    
    while(ptr) {
        var n = new Node(ptr.val);
        m.set(ptr, n);
        ptr = ptr.next;
    }
    
    return m;
}

var connectNodes = function(head, map) {
    var ptr = head;
    
    while(ptr) {
        var clonedNode = map.get(ptr);
        var n = ptr.next? map.get(ptr.next) : null;
        var r = ptr.random? map.get(ptr.random) : null;

        clonedNode.next = n;
        clonedNode.random = r;
        
        ptr = ptr.next;
    }
}