var myAtoi = function (s) {
  var str_arr = s.split(" ");
  for (var i = 0; i < str_arr.length; i++) {
    var num = isNaN(parseInt(str_arr));
    console.log(num);
  }
  return str_arr;
};
var str = "4193 with words";
console.log(myAtoi(str));
