class Node {
  constructor(key=0, value=0) {
      this.key=key;
      this.value=value;
      this.prev=null;
      this.next=null;
  }
}

class LRUCache {
  constructor(capacity) {
      this.capacity=capacity;
      this.dummy=new Node();
      this.dummy.prev=this.dummy;
      this.dummy.next=this.dummy;
      this.keyToNode=new Map();
  }
  getNode(key) {
      if(!this.keyToNode.has(key)) {
          return null;
      }
      const node = this.keyToNode.get(key);
      this.remove(node);
      this.pushFront(node);
      return node;
  }
  get(key) {
      const node = this.getNode(key);
      return node?node.value:-1;
  }
  put(key, value) {
      let node = this.getNode(key);
      if(node) {
          node.value=value;
          return;
      }
      // 没有node
      node=new Node(key, value);
      this.keyToNode.set(key, node);
      this.pushFront(node);
      if(this.keyToNode.size > this.capacity) {
          const backNode = this.dummy.prev;
          this.keyToNode.delete(backNode.key);
          this.remove(backNode);
      }
  }
  remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
  }
  pushFront(node) {
      node.next = this.dummy.next;
      node.prev = this.dummy;
      node.next.prev=node;
      this.dummy.next=node;
  }
}