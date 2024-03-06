function power(a, n) {
  if(n === 0) return 1;

  return power(a , n - 1) * a;
}

console.log(power(3, 3))