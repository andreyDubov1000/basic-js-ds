const { NotImplementedError } = require('../extensions/index.js')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(q = []) {
    this.q = q
  }

  getUnderlyingList() {
    return this.q.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = { value: cur, next: acc }
        return node
      }

      return { value: cur, next: null }
    }, null)
  }

  enqueue(elem) {
    this.q.push(elem)
  }

  dequeue() {
    return this.q.shift()
  }
}
