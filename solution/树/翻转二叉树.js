function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 深度优先
var invertTree = function(root) {
    if (root == null){
        return null;
    }

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
};

// 广度优先
var invertTree = function(root) {
    if(root == null){
        return null;
    }
    let stack = [root];
    while(stack.length !== 0){
        let node = stack.pop();
        if(node.left){
            stack.push(node.left);
        }
        if(node.right){
            stack.push(node.right);
        }

        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
    return root;
};