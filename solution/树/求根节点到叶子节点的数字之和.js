function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 广度优先遍历
var sumNumbers = function(root) {
    if(root == null){
        return null;
    }
    let queNode = [];
    let queVal = []
    queNode.push(root);
    queVal.push(root.val);
    const result = 0;
    while(queNode.length !== 0){
        let node = queNode.shift();
        let nodeVal = queVal.shift();
        if(node.left == null && node.right == null){
            result += nodeVal;
        }
        if(node.left != null){
            queNode.push(node.left);
            queVal.push(nodeVal*10 + node.left.val);
        }
        if(node.right != null){
            queNode.push(node.right);
            queVal.push(nodeVal*10 + node.right.val);
        }
    }
    return result;
};

// 深度优先
var sumNumbers = function(root) {
    const dfs = (root,sum) => {
        if(root == null){
            return 0;
        }
        const result = sum*10 + root.val
        if(root.left == null&&root.right == null){
            return result
        }else{
            return dfs(root.left,result)+dfs(root.right,result)
        }
    }
    return dfs(root,0);
};