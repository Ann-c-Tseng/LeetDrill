/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null;
    var cur = head;
    var following = head; //node in front of cur
    
    //While we have not gone through all the nodes yet (cur)
    //keep track of future nodes in the list with following
    //alter cur pointer to point back to prev
    //update prev and cur to prepare for next iteration
    //Time complexity: O(n) as we go through each node (cur)
    while(cur !== null) {
        //Note, critical to move following forward to not lose
        //rest of linkedlist nodes
        following = following.next;
        cur.next = prev;
        
        //Now update prev and cur in this order. prev first to cur, the cur to following (notice that we update following at the beginning of every iteration)
        prev = cur;
        cur = following;
    }
    
    return prev;
};