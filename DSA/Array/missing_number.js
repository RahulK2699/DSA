var arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
var n = 10;

var t_sum = (n * (n + 1)) / 2;
var arr_sum = 0;

for (var i = 0; i < arr.length; i++) {
  arr_sum += arr[i];
}

console.log(t_sum - arr_sum);
