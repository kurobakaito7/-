function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 二叉树右视图 只需要把每一层最后一个节点存储到res数组
    let res = [],queue = [];
    queue.push(root);
    while(queue.length&&root!=null){
        // 记录当前层级节点的个数
        let length = queue.length;
        while(length--){
            let node = queue.shift();
            // length长度为0表明到了层级最后一个节点
            if(!length){
                res.push(node.val);
            }
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return res;
};