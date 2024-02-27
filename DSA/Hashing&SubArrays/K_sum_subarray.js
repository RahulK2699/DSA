/*
Given an array of positive integers A and an integer B, find and return first continuous
subarray which adds to B.
If the answer does not exist return an array with a single integer "-1".
 A = [1, 2, 3, 4, 5]
 B = 5
 output =  [2, 3]
*/

function findSubArray(arr, n,  k) {
  let s = -1;
  let e = -1;
  let currSum = 0;
  let ans = [];
  let map = new Map();

  for(let i = 0; i < n; i++) {
    currSum += arr[i];
    if(currSum === k) {
      s = 0;
      e = i;
      break;
    }

    if(map.has(currSum - k)) {
      s = map.get(currSum - k)+ 1;
      e = i;
      break;
    }
    map.set(currSum, i);
  }

  if(s == -1 || e == -1) return [-1];
  else {
    let c = 0;
    for(let i = s; i <= e; i++){
      ans[c] = arr[i];
      c++;
    }
    return ans;
  }
}
let arr = [1, 2, 3, 4, 5];
let k = 5;

console.log(findSubArray(arr,arr.length, k));