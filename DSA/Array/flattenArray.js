const arr = [1, 2, 3,[4, 5], [6, 7, [10, 11]], 8, 9];

function flattenArray(arr) {
  let ans = [];
  
  function flattenHelper(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        ans.push(arr[i]);
      } else {
        flattenHelper(arr[i]);
      }
    }
  }
  flattenHelper(arr);
  return ans
}

console.log(flattenArray(arr));
// console.log(ans);
