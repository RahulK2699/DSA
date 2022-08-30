var nums = [1, 3];
var target = 7;

var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;

    if (target < nums[0]) return 0;

    if (target > nums[nums.length - 1]) return nums.length;

    if (i < nums.length - 2 && nums[i] < target && nums[i + 1] > target)
      return i + 1;
  }
};

console.log(searchInsert(nums, target));
