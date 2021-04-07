/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let tmp = l;
  const res = [];
  while (tmp) {
    if (tmp.value !== k) {
      res.push(new ListNode(tmp.value));
    }
    tmp = tmp.next;
  }
  let list = res[res.length - 1];
  for (let i = res.length - 2; i >= 0; i--) {
    res[i].next = res[i + 1];
    list = res[i];
  }
  return list;
}

module.exports = removeKFromList;
