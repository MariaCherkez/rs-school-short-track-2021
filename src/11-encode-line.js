/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 0;
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else if (!count) {
      res += str[i - 1];
    } else {
      res += ++count + str[i - 1];
      count = 0;
    }
  }
  return res;
}

module.exports = encodeLine;
