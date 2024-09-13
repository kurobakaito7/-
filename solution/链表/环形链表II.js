function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针
var detectCycle = function(head) {
    if (head == null) return null
    let fast = head,slow = head
    while(fast != null){
        slow = slow.next
        if(fast.next != null){
            fast = fast.next.next
        }else{
            return null
        }
        if (fast === slow) {
            let pre = head
            while(pre != slow){
                slow = slow.next
                pre = pre.next
            }
            return pre
        }
    }
    return null
};
// 哈希表
var detectCycle1 = function(head) {
    let visited = new Set()
    let p = head
    while(p != null){
        if(visited.has(p)){
            return p
        }else{
            visited.add(p)
        }
        p = p.next
    }
    return null
};