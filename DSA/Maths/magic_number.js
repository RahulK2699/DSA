/*
 A magic number is defined as a number that can be expressed as a power of 5 or sum of unique powers of 5.
 First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5),Given the value of n, find the n'th 
 Magic number modulo 109+7.

 Input: n = 2
Output: 25
Explanation: 2'nd Magic number is 25. 
 */

function magicNumber(n) {
  let power = 1;
  let ans = 0;
  const mod = 10e9 + 7;

  while( n !== 0) {
    power *= 5;

    if(n & 1 === 1) ans = (ans + power) % mod;

    n = n >> 1;
  }

  return ans;
}

console.log(magicNumber(10e2));
console.log(Math.floor(3 / 2))