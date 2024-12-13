class Node {
    constructor(key = 0,value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.dummy = new Node();
        this.dummy.prev = this.dummy;
        this.dummy.next = this.dummy;
        this.keyToNode = new Map();
    }

    getNode(key) {
        if(!this.keyToNode.has(key)){// 没有这本书
            return null;
        }
        const node = this.keyToNode.get(key);// 有这本书
        this.remove(node);// 把这本书抽出来
        this.pushFront(node);// 放到最上面
        return node;
    }

    get(key) {
        const node = this.getNode(key);
        return node ? node.value : -1;
    }

    put(key,value) {
        let node = this.getNode(key);
        if(node) {// 如果有这本书
            node.value = value;
            return;
        }
        node = new Node(key,value);// 新书
        this.keyToNode.set(key,node);
        this.pushFront(node);// 放到最上面
        if (this.keyToNode.size > this.capacity){//书太多了
            const backNode = this.dummy.prev;
            this.keyToNode.delete(backNode.key);
            this.remove(backNode);// 去掉最后一本书
        }
    }

    // 删除一个节点（抽出一本书）
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // 在链表头添加一个节点（把一本书放在最上面）
    pushFront(node){
        // 以下写法不会超时
        node.prev = this.dummy;
        node.next = this.dummy.next;
        node.prev.next = node;
        node.next.prev = node;
    }
}
