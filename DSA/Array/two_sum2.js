var num = [-1, 0];
var target = -1;
var twoSum = function (numbers, target) {
  var start = 0;
  var end = numbers.length - 1;
  while (start < end) {
    var sum = numbers[start] + numbers[end];
    if (sum === target) return [start, end];

    if (sum < target) start++;
    else end--;
  }
};

console.log(twoSum(num, target));
