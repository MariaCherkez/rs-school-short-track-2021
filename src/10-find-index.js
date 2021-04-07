/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  while (end > 1) {
    const middle = Math.ceil((start + (end - start) / 2));
    if (array[middle] === value) {
      return middle;
    }
    if (array[middle] > value) {
      end = middle;
    }
    if (array[middle] < value) {
      start = middle;
    }
    if (end === middle || start === middle) {
      return array[end] === value ? end : start;
    }
  }
  return array[0];
}

module.exports = findIndex;
