const vnode = {
    tag:'div',
    attrs:{id:'myDiv'},
    children:[
        123,
        "123456",
        {tag:'div',children:['hello']},
        {tag:'span',children:['nihao']}
    ]
}

function visualToRealDom(vnode) {
    //如果是数字类型，转化为字符串
    if(typeof vnode === 'number') {
        vnode = String(vnode);
    }
    // 如果是文本节点，则直接创建文本节点
    if(typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }
    // 普通节点 创建一个新的DOM元素
    const dom = document.createElement(vnode.tag);
    // 如果虚拟节点有属性，则设置DOM元素的属性
    const attrs = vnode.attrs;
    if(attrs) {
        Object.keys(attrs).forEach(key => {
            dom.setAttribute(key, attrs[key]);
        })
    }
    // 如果虚拟节点有子节点，则递归地创建子节点DOM
    const children = vnode.children;
    children && children.forEach(childNode => {
        dom.appendChild(visualToRealDom(childNode))
    })
    return dom
}

const realDom = visualToRealDom(vnode);
document.body.appendChild(realDom)