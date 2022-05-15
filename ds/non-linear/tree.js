
class TreeNode {
  children;

  constructor(children) {
    this.children = children;
  }
}

class Tree {
  head;

  // TODO: Figure out k-ary tree traversal operations
  // preorder() {}
  // inorder() {}
  // postorder() {}

  print() {
    console.log({ tree: this.head })
  }
}


module.exports = { TreeNode, Tree };