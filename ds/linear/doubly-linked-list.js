
// Linked-List implementation

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

  shift() {}
  unshift() {}


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