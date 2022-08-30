var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    else obj[nums[i]] += 1;
  }
  const keys = Object.values(obj);
  for (var i = 0; i < keys.length; i++) if (keys[i] > 1) return true;

  return false;
};

var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
