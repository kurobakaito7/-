function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
// 顺序查找
var trainingPlan = function(head, cnt) {
    let node = head,n = 0;
    while(node) {
        node = node.next;
        n++;
    }
    node = head;
    for(let i = 0;i<n - cnt;i++){
        node = node.next
    }
    return node;
};

// 双指针
var trainingPlan = function(head, cnt) {
    let fast = head,slow = head;
    while(fast && cnt > 0) {
        fast = fast.next;
        cnt--;
    }
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}