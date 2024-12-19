/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null;
    let pA = headA;
    let set = new Set();
    while(pA){
      set.add(pA);
      pA = pA.next;
    }
    let pB = headB;
    while(pB) {
      if(set.has(pB)) {
        return pB
      }
      pB = pB.next;
    }
    return null;
};