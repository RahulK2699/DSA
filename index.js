function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    else return a;
  };
}

// sum(3, 4);
console.log(sum(3)(4)(3)(4)(3)());
