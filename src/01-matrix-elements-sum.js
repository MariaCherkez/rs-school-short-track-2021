/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const blockIndexArray = new Set();
  return matrix.reduce((sum, e) => sum + e.reduce((rowSum, el, i) => {
    if (el === 0) {
      blockIndexArray.add(i);
    }
    if (blockIndexArray.has(i)) {
      return rowSum;
    }
    return rowSum + el;
  }, 0), 0);
}

module.exports = getMatrixElementsSum;
