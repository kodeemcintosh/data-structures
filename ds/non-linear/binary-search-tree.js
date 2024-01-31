
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

  constructor() {}

  create() {
    this.head = null;
  }
  insert(value) {
    const newNode = new BtNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.head;

    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  // Depth-First Traversal
  preorder(node = this.head) {
    if (!node) return;
    console.log(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node = this.head) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  postorder(node = this.head) {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.value);
  }

  // Breadth-First Traversal
  levelorder() {
    if (!this.head) return;
    const queue = [this.head];
    while (queue.length) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  print() {
    console.log({ tree: this.head })
  }
}


module.exports = { BtNode, BinarySearchTree };