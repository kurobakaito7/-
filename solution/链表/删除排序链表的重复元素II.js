function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null){
        return head;
    }
    const dummy = new ListNode(0,head);
    let cur = dummy;
    while(cur.next&&cur.next.next){
        if(cur.next.val === cur.next.next.val){
            const x = cur.next.val;
            while(cur.next && cur.next.val === x){
                // 这一步就是将cur.next与cur.next.next断开，cur指向了cur.next.next
                cur.next = cur.next.next;
            }
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};