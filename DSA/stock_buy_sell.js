var maxProfit = function (prices) {
  var l = 0;
  var r = l + 1;
  var max = 0;

  if (prices.length === 0 || prices.length === 1) return 0;

  while (l < prices.length) {
    if (prices[r] > prices[l]) {
      max = Math.max(max, prices[r] - prices[l]);
      r++;
    } else {
      l = r;
      r = l + 1;
    }
  }
  return max;
};
var arr = [2];
console.log(maxProfit(arr));
