/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode();
    var tail = dummy;
    
    var ptr1 = list1;
    var ptr2 = list2;
    
    while(ptr1 !== null && ptr2 !== null) {
        if(ptr1.val < ptr2.val) {
            tail.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            tail.next = ptr2;
            ptr2 = ptr2.next;
        }     
        tail = tail.next;
    }
    
    //Edge case, check that the left over list is appended to the solution
    if(ptr1 !== null) {
        tail.next = ptr1;
    }
    
    if(ptr2 !== null) {
        tail.next = ptr2;
    }
    
    return dummy.next;
};