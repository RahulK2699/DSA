const myMemoized = (fn) => {
  let res = {};

  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(this, ...args);
    }
    return res[argsCache];
  };
};
const product = (n1, n2) => {
  for (var i = 0; i < 1e8; i++) {}
  return n1 * n2;
};
const memoizedProduct = myMemoized(product);

console.time("First Call");
console.log(memoizedProduct(120, 111));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizedProduct(120, 111));
console.timeEnd("Second Call");

/*
  Memoization 
  In programming, memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again
  
  In simpler words, it consists of storing in cache the output of a function, and making the function check if each required computation is in the cache before computing it.
  
  A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.
  
  Memoization is a simple but powerful trick that can help speed up our code, especially when dealing with repetitive and heavy computing functions.
   */
