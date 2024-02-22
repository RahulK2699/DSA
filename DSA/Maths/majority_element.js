/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.

Example
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

let nums = [2,2,1,1,1,2,2]

function findMajority(nums) {
  nums = nums.sort((a,b) => a- b);

  return nums[Math.floor(nums.length / 2)]
}

console.log(findMajority(nums))