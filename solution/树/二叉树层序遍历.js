function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [],queue = [];
    if(root == null){
        return ans;
    }
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        let curLevel = [];
        ans.push(curLevel);
        for(let i= 0;i<len;i++){
            let node = queue.shift();
            ans[ans.length - 1].push(node.val);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return ans;
};