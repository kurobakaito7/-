function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root == null) {
        return true;
    } else {
        return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    }
};
function getHeight(root) {
    if (root == null) {
        return 0;
    } else {
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }
}