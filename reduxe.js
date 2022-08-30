var arr = [5, 4, 6, 1, 3, 4];

const ans = arr.reduce((acc, currentValue) => {
  if (currentValue > acc) acc = currentValue;
  return acc;
}, 0);

console.log(ans);
