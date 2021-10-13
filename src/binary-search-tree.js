const { NotImplementedError } = require('../extensions/index.js')

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor(data = null, parent = null) {
    this.data = data
    this.left = null
    this.right = null
    this.parent = parent
  }

  add(data) {
    if (this.data === null) {
      this.data = data
      return
    }
    if (data < this.data)
      this.left === null
        ? (this.left = new BinarySearchTree(data, this))
        : this.left.add(data)
    if (data > this.data)
      this.right === null
        ? (this.right = new BinarySearchTree(data, this))
        : this.right.add(data)
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    if (this.data === data) return this
    if (data < this.data) {
      return this.left ? this.left.find(data) : null
    }
    if (data > this.data) {
      return this.right ? this.right.find(data) : null
    }
  }

  remove(data) {
    let node = this.find(data)
    let newNode = null
    if (!node) return false
    if (node.right) {
      newNode = node.right.min(true)

      if (newNode.parent.left === newNode) {
        newNode.parent.left = newNode.right
      } else {
        newNode.parent.right = newNode.right
      }
      if (newNode.right) newNode.right.parent = newNode.parent
      newNode.left = node.left
      newNode.right = node.right
    } else {
      newNode = node.left
    }
    if (node.left) node.left.parent = newNode
    if (node.right) node.right.parent = newNode
    if (!node.parent) {
      this.data = newNode && newNode.data
      this.left = newNode && newNode.left
      this.right = newNode && newNode.right
    } else {
      if (node.parent.left === node) {
        node.parent.left = newNode
      } else {
        node.parent.right = newNode
      }
      if (newNode) newNode.parent = node.parent
    }
    return true
  }

  root() {
    return this.data && this
  }

  min(key) {
    return this.left !== null ? this.left.min(key) : key ? this : this.data
  }
  max(key) {
    return this.right !== null ? this.right.max(key) : key ? this : this.data
  }
}
