
// doubly-linked List implementation

class DllNode {
  data;
  prev;
  next;

  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head;

  // O(1)
  append(data) {
    const node = new DllNode(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current?.next) {
      current = current.next;
    }

    node.prev = current;
    current.next = node;
  }

  shift() {
    if (!this.head) {
      console.log('head node is empty')
      return null;
    }

    const removedHead = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }

    return removedHead.data;
  }

  unshift(data) {
    const newNode = new DllNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // O(n)
  print() {
    if(!this.head) {
      console.log('head node is empty')
      return;
    }

    let current = this.head;

    while(current?.data) {
      console.log('node: ', current)
      current = current.next;
    }
  }
}


module.exports = { DllNode, DoublyLinkedList };