function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希集合
var getIntersectionNode = function(headA, headB) {
    if(headA == null|| headB == null) return null;
    let pA = headA,pB = headB;
    let visitd = new Set();
    while(pA){
        visitd.add(pA);
        pA = pA.next;
    }
    while(pB){
        if(visitd.has(pB)){
            return pB
        }
        pB = pB.next;
    }
    return null;
}
// 双指针
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    let pA = headA,pB = headB;
    while(pA !== pB){
        pA = pA == null?headB:pA.next;
        pB = pB == null?headA:pB.next;
    }
    return pA;
};
