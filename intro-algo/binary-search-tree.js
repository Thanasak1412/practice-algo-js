class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //   * insertion in BST
  //   * involves placing a new node in the correct position
  //   * to maintain the BST properties.
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return;
    }

    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  //   * Deletion
  // * 1.Node to be deleted is a leaf
  // * 2.Node to be deleted has one child: replace the node with its child.
  // * 3.Node to be deleted has two children: Find the smallest in the right subtree,
  // * replace the node's value with successor value, and then delete the successor
  deleteNode(root, value) {
    if (!root) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      const temp = this._minValueNode(root.right);
      root.value = temp.value;
      root.right = this.deleteNode(root.right, temp.value);
    }

    return root;
  }

  _minValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }

    return current;
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.lookup(15));
bst.deleteNode(bst.root, 4);

console.log(traverse(bst.root));

//     9
//  4     20
//1  6  15  170

// removed 4
// in-order -> 1 6 9 15 20 170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
