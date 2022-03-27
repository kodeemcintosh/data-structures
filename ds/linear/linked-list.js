
// Linked-List implementation

class LlNode {
  data;
  next;

  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  head;

  // O(n)
  countNodes() {
    if(!this.head) {
      return 0;
    }

    let current = this.head;
    let count = 1;

    while(current?.data) {
      current = current.next;
      count++;
    }

    return count;
  }

  // O(1)
  append(data) {
    const node = new LlNode(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current?.next) {
      current = current.next;
    }

    current.next = node;
  }

  // O(1)
  insertAtIndex(data, index) {
    const node = new LlNode(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    let count = 1;

    while(count < index) {
      current = current.next;
      count++;
    }

    node.next = current.next;
    current.next = node;
  }

  shift() {
    if(!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // O(1)
  unshift(data) {
    const node = new LlNode(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    const prevHead = this.head;
    this.head = node;
    this.head.next = prevHead;
  }

  deleteTail() {
    let current = this.head;

    while(current?.next) {
      current = current.next;
    }

    delete current.data, current.next;
  }

  reversal() {
    if(!this.head) {
      return;
    }

    let previous;
    let current = this.head;
    let following = this.head;

    while(current?.next) {
      following = following.next;
      current.next = previous;
      previous = current;
      current = following;
    }
    this.head = previous;
  }

  // O(n)
  print() {
    if(!this.head) {
      console.log('head node is empty')
      return;
    }

    let current = this.head;

    while(current?.data) {
      console.log('node: ', current?.data)
      current = current.next;
    }
  }
}


module.exports = { LlNode, LinkedList };