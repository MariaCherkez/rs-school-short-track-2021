const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.list = [];
  }

  getsize() {
    return this.list.length;
  }

  enqueue(element) {
    if (this.list.length === 0) {
      const value = new ListNode();
      value.value = element;
      this.list.push(element);
    } else {
      this.list.push(element);
    }
  }

  dequeue() {
    const res = new ListNode();
    res.value = this.list.value;
    const res2 = this.list.shift();
    return res2;
  }
}

module.exports = Queue;
