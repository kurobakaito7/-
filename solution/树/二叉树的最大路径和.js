function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let sumMax = Number.MIN_SAFE_INTEGER;//最大路径和
    const dfs = (root) => {
        if(root == null){
            // 遍历到null节点，收益为0
            return 0;
        }
        let left = dfs(root.left);// 求左子树对外能提供的最大和
        let right = dfs(root.right);// 求右子树对外能提供的最大和
        const innerSumMax = left + root.val + right;// 子树内部的最大路径和
        sumMax = Math.max(sumMax,innerSumMax);//挑战最大记录（子树内部路径和可能会大于以根节点开始加子树对外提供最大和）

        const outputSumMax = root.val + Math.max(0,left,right);// 对外能提供的最大和
        // 如果对外提供最大和为负数，则直接返回0
        return outputSumMax < 0 ? 0 : outputSumMax;
    }
    dfs(root)
    return sumMax;
};