function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 方法一：计算链表长度
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head
    let len = getLength(head);
    let cur = dummy;
    for(let i = 1;i< len - n + 1;i++){// 注意这里不取等号
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};
function getLength(head) {
    let length = 0
    while(head != null){
        length++;
        head = head.next
    }
    return length;
}
// 方法二：栈
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0,head);
    const stack = new Array();
    let cur = dummy;
    while(cur != null){
        stack.push(cur);
        cur = cur.next;
    }
    for(let i = 1;i <= n;i++){
        stack.pop();
    }
    let node = stack[stack.length - 1];// 到达要删除节点的前一个节点
    node.next = node.next.next
    return dummy.next
};
// 方法三：双指针法
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0,head);
    let fast = dummy;
    let slow = dummy;
    while(n--){
        fast = fast.next;
    }
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};