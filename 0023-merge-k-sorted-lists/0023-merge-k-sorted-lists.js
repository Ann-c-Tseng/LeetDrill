/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 /*
Time complexity: O(n * log k), where log k is the number of times we have to go through the O(N) process of checking through a list and merging it with another. k being the number of lists we have, and log k being how many times we divide the k lists in 2 for merging two lists each time.
Divide and conquer: We use the concept of merge sort to combine two lists each time, and then combinging those combinations into a final result. This is a lot more efficient than combining each single list into the final result which takes O(n*k). Use the idea that we know how to merge 2 lists of sorted ascending order, we can apply this with merge sort concept to solve this easily.
 */
var mergeKLists = function(lists) {
    let previous = null;
    for(let i = 0; i < lists.length; i++) {
        previous = mergeTwoLists(previous, lists[i]);
    }
    return previous;
};

var mergeTwoLists = function(list1, list2) {
    let sentinel = new ListNode(); //keep a dummy node to be the head of the list
    let tail = sentinel; //this pointer will move through the list for adding purposes

    while(list1 && list2) {
        let canAddL1 = list1.val <= list2.val;
        if(canAddL1) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 || list2; //connect remaining nodes from either list1 or list2 to the end of the list
    
    return sentinel.next; 
};

