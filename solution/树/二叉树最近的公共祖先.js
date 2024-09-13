function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    // 遇到null、p、q直接返回当前节点
    if (root == null || root == p || root == q) return root;
    // 非null、非p、非q，递归左右子树
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    // 根据结果判断谁是最近公共祖先
    if (left == null && right == null) return null;
    if (left == null) return right;
    if (right == null) return left;
    return root;
}