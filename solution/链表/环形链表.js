function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null) {
        fast = fast.next;
        if(fast != null) {
            fast = fast.next;
        }
        if(fast == slow) {
            return true;
        }
        slow = slow.next;
    }
    return false;
}

// 哈希表
var hasCycle = function(head) {
    let map = new Map();
    while(head) {
        if(map.has(head)){
            return true;
        }else{
            map.set(head,true)
        }
        head = head.next;
    }
    return false;
}
