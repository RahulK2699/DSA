/*
longest subarray length with sum = 0 
Input:
N = 8
A[] = {15,-2,2,-8,1,7,10,23}
Output: 5
Explanation: The largest subarray with
sum 0 will be -2 2 -8 1 7.
*/

function maxLen(arr, n) {
  let pf = [];
  let prefix_sum = 0;
  let ans = 0;

  let map = new Map();

  for (let i = 0; i < n ; i++) {
    prefix_sum += arr[i];
    pf.push(prefix_sum);
  }

  for( let i = 0; i < n; i++) {

    if(pf[i] === 0) {
      ans = Math.max(i + 1, ans);
    }
    else if(map.has(pf[i])) {
      let  j = map.get(pf[i]);
      ans = Math.max(i - j, ans);
    }
    else map.set(pf[i], i);
  }

  return ans;
}

N = 8
A = [15,-2,2,-8,1,7,10,23];

console.log(maxLen(A,N))
