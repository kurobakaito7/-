function treeToArray(tree) {
    const res = [];
    function traverse(node) {
        res.push({
            id: node.id,
            name: node.name,
            pid: node.pid || null
        })
        if(node.children && node.children.length > 0) {
            node.children.forEach(child => {
                child.pid = node.id; // 设置子节点的child
                traverse(child);
            })
        }
    }
    tree.forEach(node => traverse(node))
    return res;
}

const tree = [
  {
    id: 1,
    name: "Root",
    children: [
      {
        id: 2,
        name: "Child 1",
        children: [
          { id: 4, name: "Grandchild 1", children: [] },
          { id: 5, name: "Grandchild 2", children: [] },
        ],
      },
      { id: 3, name: "Child 2", children: [] },
    ],
  },
];

let arr = treeToArray(tree);
console.log(arr);
