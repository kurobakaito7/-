function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// 深度优先
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }
  let res = rootSum(root, targetSum);
  res += pathSum(root.left, targetSum);
  res += pathSum(root.right, targetSum);

  return res;
};

const rootSum = (root, targetSum) => {
  let ret = 0;

  if (root == null) {
    return 0;
  }
  if (root.val === targetSum) {
    ret++;
  }

  ret += rootSum(root.left, targetSum - root.val);
  ret += rootSum(root.right, targetSum - root.val);

  return ret;
};
