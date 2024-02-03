
class RedBlackBst {
  data;
  color;
  parent;
  leftChild;
  rightChild;
  constructor(color, data, parent, leftChild, rightChild) {
    this.color = color;
    this.data = data;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  _fixInsertion(node) {}
  _fixRemoval(node) {}

  insert(data) {}
  remove(data) {}

  leftRotate(node) {}
  rightRotate(node) {}

  search(data) {}

  print() {}
}


module.exports = { RedBlackBst };