function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归方法
var hasPathSum = function(root, targetSum) {
    if (root == null){
        return false;
    }
    if (root.left == null && root.right == null){
        return targetSum === root.val;
    }
    return hasPathSum(root.left,targetSum - root.val)||hasPathSum(root.right,targetSum - root.val);
};

// 广度优先遍历
var hasPathSum = function(root, targetSum) {
    if(root == null){
        return false;
    }
    let queNode = [];
    let queVal = [];
    queNode.push(root);
    queVal.push(root.val);
    while(queNode.length !== 0){
        let now = queNode.shift();
        let temp = queVal.shift();
        if(now.left == null && now.right == null){
            if(temp === targetSum){
                return true;
            }
            continue;
        }
        if(now.left != null){
            queNode.push(now.left);
            queVal.push(now.left.val + temp);
        }
        if(now.right != null){
            queNode.push(now.right);
            queVal.push(now.right.val + temp);
        }
    }
    return false;
};