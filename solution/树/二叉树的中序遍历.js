function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function(root) {
    let ans = []
    function inOrder(root){
        if(root == null){
            return;
        }
        inOrder(root.left);
        ans.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return ans;
};

// 迭代
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    while(root || stack.length){
        while(root){
            stack.push(root)
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};