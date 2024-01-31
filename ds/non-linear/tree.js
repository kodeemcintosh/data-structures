
class TreeNode {
  children;

  constructor(children) {
    this.children = children;
  }
}

class Tree {
  head;

  preorder(node = this.head) {
  if (!node) return;
    for (const child of node.children) {
      this.preorder(child); // Recursively process each child
    }
  }

  // TODO: Figure out k-ary tree traversal operations
  inorder() {}

  postorder(node = this.head) {
    if (!node) return;
    for (const child of node.children) {
        this.postorder(child); // Recursively process each child
    }
  }

  print() {
    console.log({ tree: this.head })
  }
}


module.exports = { TreeNode, Tree };