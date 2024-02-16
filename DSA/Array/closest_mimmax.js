/*
Given an array A, find the size of the smallest subarray such that it contains at least one 
occurrence of the maximum value of the array and at least one occurrence of the minimum value 
of the array.

Return the length of the smallest subarray which has at least one occurrence of 
minimum and maximum element of the array

A = [2, 6, 1, 6, 9]

output = 3
explanation = [1,6,9]  this subarray contains min and max value
*/

function findMinMaxSubArray(arr) {
  let min = Infinity;
  let max = -Infinity;
  let max_index = -1;
  let min_index = -1;
  let ans = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];

    if(arr[i] < min) min = arr[i];
    
  }

  if(min === max) return 1;

  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === min) {
      min_index = i;
      if(max_index !== -1){
        let len = Math.abs(max_index - min_index) + 1;
        ans = Math.min(ans,len);
      }
    }
    else if (arr[i] === max) {
      max_index = i;
      if(min_index !== -1){
        let len = Math.abs(max_index - min_index) + 1;
        ans = Math.min(ans,len);
      }
    }
  }

  return ans
}

const arr = [1, 2, 3, 4, 6, 1, 2, 6]

console.log(findMinMaxSubArray(arr))