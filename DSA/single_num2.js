var nums = [0, 1, 0, 1, 0, 1, 99];

var singleNumber = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    else obj[nums[i]] += 1;
  }
  const ans = Object.entries(obj).filter(([key, value]) => {
    return value === 1;
  });
  return parseInt(ans[0][0]);
};

console.log(singleNumber(nums));
