function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return check(root, root);
}
function check(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
}