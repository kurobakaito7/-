function _Node(val,children) {
    this.val = val;
    this.children = children;
};

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) {
        return [];
    }

    let res = [];
    let queue = [root];

    while(queue.length) {
        let curLen = queue.length;
        let level = [];
        for(let i=0;i<curLen;i++) {
            let node = queue.shift();
            level.push(node.val);
            if(node && node.children) {
                for(let child of node.children) {
                    queue.push(child);
                }
            }
        }
        res.push(level);
    }
    return res;
};