/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

wrong solution
*/

let nums = [-2, 1]
var maxSubArray = function(nums) {
  let left_sum = 0;
  let right_sum = 0;
  let max_left_sum = 0;
  let max_right_sum = 0;
  let max_left_index = 0;
  let max_right_index = 0;

  const pfl = [];
  const pfr = [];

  if(nums.length === 1) return nums[0]

  for (let i = 0; i < nums.length; i++) {
      left_sum += nums[i];
      right_sum += nums[nums.length - 1 - i];
      pfl[i] = left_sum;
      pfr[nums.length - 1 - i] = right_sum;
      
      if (left_sum > max_left_sum) {
          max_left_sum = left_sum;
          max_left_index = i;
      }
      
      if (right_sum > max_right_sum) {
          max_right_sum = right_sum;
          max_right_index = nums.length - 1 - i;
      }
      
  }

  let min = Math.min(max_left_index, max_right_index);
  let max = Math.max(max_left_index, max_right_index);

  if( min === 0) return pfl[max];
  else return pfl[max] - pfl[min - 1]
};


console.log(maxSubArray(nums))