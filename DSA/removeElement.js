var removeElement = function (nums, val) {
  var start = 0;
  var end = nums.length - 1;
  var count = 0;
  while (start < end) {
    if (nums[end] === val && nums[start] === val) {
      end -= 1;
      var temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      count += 2;
    }
    if (nums[start] === val) {
      nums[(nums[start], nums[end])] = nums[(nums[end], nums[start])];
      count++;
    }
    if (nums[end] === val) end -= 1;
  }
  return nums;
};
var nums = [3, 2, 2, 3];
var value = 3;

console.log(removeElement(nums, value));
