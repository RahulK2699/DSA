/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the 
same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 
0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

let nums= [0, 1, 2, 0, 1, 2]

function sortColors(nums) {
  // let red = 0;
  // let white = 0;
  // let blue = 0;

  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] === 0) red++;
  //   else if(nums[i] === 1) white++;
  //   else if(nums[i] === 2) blue++;
  // }

  // let i = 0;
  // while(i < nums.length) {
  //   if(red !== 0){
  //     nums[i]  = 0;
  //     red--;
  //     i++;
  //   }else if(white !== 0){
  //     nums[i]  = 1;
  //     white--;
  //     i++;
  //   }else if(blue !== 0){
  //     nums[i] = 2;
  //     blue--;
  //     i++;
  //   }
  // }

  // return nums;

  // approach 2 Using  Dutch National Flag algorithm

  let  low = 0;
  let high = nums.length - 1;
  let mid = 0;
  
  while(mid <= high) {
    if(nums[mid] == 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      mid++;
      low++;
    }
    else if(nums[mid] == 1) mid++;
    else if(nums[mid] == 2) {
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }
  return nums;
}

console.log(sortColors(nums))

let arr = [10,2];

console.log(arr.sort((a,b) => a - b))