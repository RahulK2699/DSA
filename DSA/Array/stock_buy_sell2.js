var arr = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  var profit = 0;
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

console.log(maxProfit(arr));
