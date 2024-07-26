/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 /*
Time-Complexity: O(N) - Adding and removing each element once into the deque, therefore linear time.
Space-Complexity: O(N) - queue can go up to N elements based on size of nums.
We use a deque and store the index of values we see from the window in monotonic decreasing order.
We pop from the left of the deque to get the maximum value when we are at the end of a window and add to the output.
We check if the current value we are viewing (right ptr) is greater than the rightmost value:
If it is greater, we need to maintain monotonically decreasing pattern, so we pop from the right of the deque to remove all those small values. Then we place the current value into the queue.
If it is less, we can place the current value into the deque no problem.
Once we get to the desired window size (right+1 >= k), at each window move interation we see if we can add to output.
 */

function Node(value) {
this.value = value;
this.prev = null;
this.next = null;
};

//Create a Deque (double-ended queue), using a doubly linked list structure
//this.left point to the left most node of the list
//this.right point to the right most node of the list
function Deque() {
    this.left = null;
    this.right = null;
    this.size = 0;

    this.pushRight = function(value) {
        const node = new Node(value);
        if(this.size === 0) {
            this.left = node;
            this.right = node;
        } else {
            this.right.next = node;
            node.prev = this.right;
            this.right = node;
        }
        this.size++;
        return this.size;
    };

    this.popRight = function() {
        if(this.size === 0) return null;
        const removedNode = this.right;
        this.right = this.right.prev; //set right most node pointer to previous of the one to be removed
        if(this.right) this.right.next = null; //unlink new right node from the one to be removed
        this.size--;
        return removedNode;
    };

    this.pushLeft = function(value) {
        const node = new Node(value);
        if(this.size === 0) {
            this.left = node;
            this.right = node;
        } else {
            this.left.prev = node;
            node.next = this.left;
            this.left = node;
        }
        this.size++;
        return this.size;
    };

    this.popLeft = function() {
        if(this.size === 0) return null;
        const removedNode = this.left;
        this.left = this.left.next;
        if(this.left) this.left.prev = null;
        this.size--;
        return removedNode;
    };
};

var maxSlidingWindow = function(nums, k) {
    const output = [];
    let deque = new Deque();
    let left = 0;
    let right = 0;

    while(right < nums.length) {
        let currentElement = nums[right];
        //Pop values from the right of queue when
        //the value at the rightmost index in the queue is less than current
        //This ensures the deque is always in Monotonically Decreasing Order.
        while(deque.right && nums[deque.right.value] < currentElement) {
            deque.popRight();
        }
        deque.pushRight(right);

        //Remove left value from the window since we moved forward one step.
        if(left > deque.left.value) {
            deque.popLeft();
        }

        //Checks if the current window size (right+1) is greater or equal to the desired window size k.
        if(right + 1 >= k) {
            output.push(nums[deque.left.value]);
            left++;
        }

        right++;
    };
    return output;
};