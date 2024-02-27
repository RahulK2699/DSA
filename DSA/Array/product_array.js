/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all 
the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
let  nums = [-1,1,0,-3,3];

function arrayProduct(nums) {
  let product = 1;
  let cnt = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0) product = product * nums[i]
    else cnt++;
  };

  for(let i = 0; i < nums.length; i++) {
   if(cnt > 1) nums[i] = 0; 
   else if(cnt == 1 && nums[i] === 0) nums[i] = product;
   else if(cnt === 1 && nums[i] !== 0) nums[i] = 0;
   else {
    nums[i] = product / nums[i];
   }
  }
  return nums;
}

console.log(arrayProduct(nums));
nums = [-1,1,0,3,-3];


function arrayProductBruteForce(nums) {
  let ans = [];
  let product = 1;
  for(let i = 0; i < nums.length; i++) {
    product = 1
    for (let j = 0; j < nums.length; j++) {
      if(i !== j) {
        product *= nums[j];
      }
    }
    ans.push(product);
  }
  return ans;
} 

console.log(arrayProductBruteForce(nums))