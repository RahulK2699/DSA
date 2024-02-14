let arr = [1,2,3,4,5,6,7]
let n = 7;

//Approach 1 

// function rotateArray(arr, n) {
  // let ans = []

  // for (let i = 0; i < arr.length; i++) {
  //   ans[(i + n) % arr.length] = arr[i]
  // }

  // return ans;
// }

//Approach 2

//using  reversing multiple subarrays

function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n ;

  reverse(arr, 0, n - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0 , k - 1);

  function reverse(arr, start, end) {
    while(start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  return arr;
}

 console.log(rotateArray(arr,3, arr.length));
// console.log(3 % 7, arr)

