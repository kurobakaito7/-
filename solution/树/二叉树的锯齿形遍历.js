function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function(root) {
    const ans = []
    if(!root) {
        return []
    }
    let isOrderLeft = true
    let quene = [root]
    while (quene.length){
        let nodeList = []
        let len = quene.length
        for (let i = 0;i<len;i++){
            let node = quene.shift()
            if (isOrderLeft){
                nodeList.push(node.val)
            }else {
                nodeList.unshift(node.val)
            }
            if (node.left){
                quene.push(node.left)
            }
            if (node.right){
                quene.push(node.right)
            }
        }
        isOrderLeft = !isOrderLeft
        ans.push(nodeList)
    }
    return ans
};