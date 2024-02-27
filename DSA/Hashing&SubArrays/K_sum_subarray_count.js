/*
Input:
N = 5
Arr = {10 , 2, -2, -20, 10}
k = -10
Output: 3
Explaination: 
Subarrays: arr[0...3], arr[1...4], arr[3..4]
have sum exactly equal to -10.
*/
let n = 5;
let arr = [10 , 2, -2, -20, 10]
let k = -10;

function findSubArraySum(arr, n , k) {
  let cnt = 0;
  let map = new Map();
  let currSum = 0;

  for(let i = 0; i < n; i++) {
    currSum += arr[i];
    if(currSum === k) cnt++;
    else if(map.has(currSum - k)) cnt++;

    map.set(currSum - k, i);
  }
  return cnt;
}

console.log(findSubArraySum(arr, n , k));