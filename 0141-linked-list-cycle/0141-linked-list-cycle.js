/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 /* Time complexity: O(n)
    Space complexity: O(1)

    Have a fast and slow pointer, the fast pointer moves two steps in each iteration while the slow pointer moves one step. If there is a loop, the fast pointer will eventually catch up to the slow pointer.

    Fast and slow pointer, aka Floyd's tortois and the hare:
    Relative Speeds:
        The key insight is that the fast pointer moves twice as fast as the slow pointer.
        As a result, the distance between them decrease by one step during each iteration.
    Closing the Gap:
        Suppose the slow pointer is at position i and the fast pointer is at position j.
        The distance between them is j - i.
        In each iteration, this distance decreases by one (since the fast pointer moves twice as fast).
        Eventually, the fast pointer will catch up to the slow pointer within the cycle.
    Meeting Point:
        When the fast pointer enters the cycle, it will eventually catch up to the slow pointer.
        They will meet at some position within the cycle.
        This meeting point is crucial because it helps us find the entry point of the cycle (which corresponds to the duplicate number in the problem you mentioned).

    If there is a cycle, fast will eventually catch up to slow, and they will meet at the same node.
If there is no cycle, fast will reach the end of the list (fast.next will be null), and the loop will terminate.
 */
var hasCycle = function(head) {
    var fast = head;
    var slow = head;

    while(fast && fast.next) { //check that head is not null and fast.next is not null (aka hit end of list)
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) {
            return true;
        }
    }

    return false;
};