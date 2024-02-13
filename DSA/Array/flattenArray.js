const arr = [1, 2, 3, [4, 5], [6, 7, [10, 11]], 8, 9];
let ans = [];

function flattenArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      ans.push(arr[i]);
    } else {
      flattenArray(arr[i]);
    }
  }
}

flattenArray(arr);
console.log(ans);
