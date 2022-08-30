var nums = [5, 7, 7, 8, 10];
var target = 8;

let s_pos = -1;
let e_pos = -1;

const findPos = () => {
  if (nums === []) return [s_pos, e_pos];
  for (var i = 0; i < nums.length; i++) {
    if (s_pos === -1 && nums[i] === target) s_pos = i;
    if (s_pos && nums[s_pos + 1] === target) {
      e_pos = s_pos + 1;
    }
  }
  return [s_pos, e_pos];
};

findPos();
console.log([s_pos, e_pos]);
