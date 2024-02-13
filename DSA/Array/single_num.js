var singleNumber = function (nums) {
  var obj = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    else obj[nums[i]] = obj[nums[i]] + 1;
  }
  return obj;
};

var nums = [2, 2, 1];
const ans = singleNumber(nums);
let obj1 = Object.entries(ans);
for (var j = 0; j < obj1.length; j++) {
  const [key, value] = obj1[j];
  if (value === 1) {
    return key;
  }
}
