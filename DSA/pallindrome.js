var isPalindrome = function (x) {
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

  if (x < 0) return false;

  if (parseInt(str.join("")) === x) return true;
  else return false;
};
var num = 10;
console.log(isPalindrome(num));
