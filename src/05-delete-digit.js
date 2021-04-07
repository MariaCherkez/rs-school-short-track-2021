/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let isChange = false;
  return parseInt(String(n).split('').filter((e, i, a) => {
    if (!isChange && parseInt(e, 10) === Math.min.apply(null, a)) {
      isChange = true;
      return false;
    }
    return true;
  }).join(''), 10);
}

module.exports = deleteDigit;
