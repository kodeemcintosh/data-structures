
class BtNode {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
  }
}

class BinarySearchTree {
  head;

  create() {}
  insert(value) {}
  search(value) {}

  // Depth-First Traversal
  preorder() {}
  inorder() {}
  postorder() {}

  // Breadth-First Traversal
  levelorder() {}

  print() {
    console.log({ tree: this.head })
  }
}


module.exports = { BtNode, BinarySearchTree };