var num = 1534236469;
var reverse = function (x) {
  var str = Math.abs(x).toString();
  str = [...str];
  var start = 0;
  var end = str.length - 1;
  while (start < end) {
    var temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  var ans = parseInt(str.join(""));
  if (ans < -2147483648 || ans > 2147483647) return 0;

  if (x < 0) return -ans;
  else return ans;
};

console.log(reverse(num));
