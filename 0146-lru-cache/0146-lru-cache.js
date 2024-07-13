/**
 * @param {number} capacity
 */

 /*
 Time complexity: O(1) for get and put functions
 Space complexity: O(N) where N is capacity of the cache

Because we want the get function to be constant time O(1), this makes a hashmap very handy for this problem's lookup.
If we are putting [2,1] into the hashmap, we can have the key be 2, and the value be a pointer to the node [2,1]. We can keep these nodes in a doubly linkedlist.

Why doubly linkedlist? Basically creating a queue, but where the hashmap can point to.
- Allow us to maintain order of elements
- Support O(1) insertion at the end and deletion at the front
- When an item is used, move it to the back of the queue making it the most recently used. This ensures the front item is the one that hasn't been moved to the back for the longest time.

Why hashmap?
- Provide O(1) access to elements based on their keys
- Helps track location of items in the doubly-linked list
- Ensure efficient lookups when retrieving or updating cache entries
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = {}; //initialized to js empty object literal
    this.tail = {}; //initialized to js empty object literal

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //If we don't have the key in the map lookup, just return -1
    const hasKey = this.map.has(key);
    if(!hasKey) return -1;

    const node = this.map.get(key);

    this.disconnectNode(node);
    this.moveToFront(node);

    return node.value;
};

LRUCache.prototype.disconnectNode = function(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
}

LRUCache.prototype.connectNode = function(node, top) {
    node.prev = top.prev;
    node.next = top.next;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const hasKey = this.get(key) !== -1;
    const isAtCapacity = this.map.size === this.capacity;

    if(hasKey) return (this.tail.prev.value = value);
    if(isAtCapacity) this.removeLastUsed();

    const node = {key, value};
    this.map.set(key, node);
    this.moveToFront(node);
};

LRUCache.prototype.removeLastUsed = function() {
    const [key, next, prev] = [this.head.next.key, this.head.next.next, this.head];

    this.map.delete(key);
    this.head.next = next;
    this.head.next.prev = prev;
}

LRUCache.prototype.moveToFront = function(node) {
    const [prev, next] = [this.tail.prev, this.tail];

    this.tail.prev.next = node;
    this.connectNode(node, {prev, next});
    this.tail.prev = node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */