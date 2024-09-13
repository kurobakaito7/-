function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res;
    const inOrder = (node) => {
        if(node != null && k>0) {
            inOrder(node.left);
            if(--k === 0) {
                res = node.val;
            }
            inOrder(node.right);
        }
    }
    inOrder(root);
    return res;
};