var isHappy = function (n, cnt) {
  var str = [...String(n)];
  var sum = 0;

  for (var i = 0; i < str.length; i++)
    sum += parseInt(str[i]) * parseInt(str[i]);

  if (cnt === 100) return false;
  if (sum === 1) return true;
  else return isHappy(sum, cnt + 1);
};
var n = 19;
console.log(isHappy(n, 0));
