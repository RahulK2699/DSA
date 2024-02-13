var x = 2.0;
var n = -2;

var myPow = function (x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;

  if (n < 0) return (1 / x) * myPow(x, n + 1);
  else return x * myPow(x, n - 1);
};

const ans = myPow(x, n);
console.log(ans.toFixed(5));
