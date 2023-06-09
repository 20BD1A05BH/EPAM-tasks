// Opposite number
/*Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/
function opposite(number) {
    let res;
    if (!isNaN(Math.sign(number))) {
      res = number * (-1);
    }
    return res;
  }