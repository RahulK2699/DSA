const sum = (a, b) => {
  return a + b;
};

const memoizedSum = (fn) => {
  let cache = {};

  return function (a, b) {
    let key = a.toString() + b.toString();

    if (key in cache) {
      console.log("Cache");
      return cache[key];
    } else {
      let result = fn(a, b);
      cache[key] = result;
      return result;
    }
  };
};

const memo = memoizedSum(sum);
console.time();
console.log(memo(4, 5));
console.timeEnd();

console.time();
console.log(memo(4, 5));
console.timeEnd();
