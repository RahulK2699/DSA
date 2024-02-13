var arr = [2, 2, 2, 2, 2];
var fourSum = function (nums, target) {
  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  var ans = [];
  var s_arr = bubbleSort(nums, nums.length);
  var n = s_arr.length;

  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      var start = j + 1;
      var end = n - 1;
      //   console.log(i, j, start, end);
      while (start < end) {
        var sum = s_arr[i] + s_arr[j] + s_arr[start] + s_arr[end];
        // console.log(sum);
        if (
          sum === target &&
          !arrayEquals(
            [s_arr[i], s_arr[j], s_arr[start], s_arr[end]],
            ans[ans.length - 1]
          )
        ) {
          ans.push([s_arr[i], s_arr[j], s_arr[start], s_arr[end]]);
        }

        if (sum < target) start++;
        else end--;
      }
    }
  }
  return ans;
  function bubbleSort(arr, n) {
    var temp = 0;
    if (n === 1) return;

    for (var i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    bubbleSort(arr, n - 1);
    return arr;
  }
};

console.log(fourSum(arr, 8));
