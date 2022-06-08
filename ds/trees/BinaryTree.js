const TreeNode = require('./TreeNode');
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new TreeNode(data);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (node.data > data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if (node) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  }

  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }

  breadthFirstSearch(rootNode) {
    if (!rootNode) {
      return;
    }

    let queue = [];
    queue.push(rootNode);

    while(queue.length > 0) {
      let currentNode = queue[0];

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      let visitingNode = queue.shift();
      console.log(visitingNode.data);
    }
  }
}

// create an object for the BinarySearchTree
var BST = new BinaryTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
let root = BST.getRootNode();
// BST.inorder(root);
// BST.preorder(root);
BST.breadthFirstSearch(root);
