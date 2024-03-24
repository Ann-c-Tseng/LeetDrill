/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/* Logic: 
1. Find the middle of the linkedlist to determine first half and second half of list
2. Reverse the links for the second half of the list
3. Now use the two halves and create the final result
*/

// //Runtime is O(n) as every subfunction goes through the list in linear time.
var reorderList = function(head) {
    const mid = getMiddle(head); //O(N)
    const rsh = reverseSecondHalf(mid); //O(N)
    reorder(head, rsh); //O(N)
};

const getMiddle = function(list) {
    let [slow, fast] = [list, list];
    
    //Either list is even and we hit fast === null
    //Or odd and we hit last node, so fast.next === null
    //Return the start to the second half of the list in both cases.
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const reverseSecondHalf = function(list) {
    //To reverse the links, we can essentially make a 'window'
    //The window is made of 3 pointers, prev, cur, and following
    //The following keeps track of the rest of the list
    //The cur's next link is redirected to prev
    //Slide the window up after cur.next is redirected
    
    let [prev, cur, following] = [null, list, null];
    
    while(cur) {
        following = cur.next
        cur.next = prev;
        
        prev = cur;
        cur = following;
    }
    
    return prev;
}

const reorder = function(firstHalf, secondHalf) {
    let [first, second, next] = [firstHalf, secondHalf, null];
    console.log(first);
    console.log(second);
    while (second.next) {          
        next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;
    }
    
}