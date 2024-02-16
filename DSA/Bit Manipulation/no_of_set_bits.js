/*
Given a positive integer N, print count of set bits in it. 

Input:
N = 6
Output:
2
Explanation:
Binary representation is '110' 
So the count of the set bit is 2.
*/


function countSetBits(n) {

  let cnt = 0;
  while( n > 0) {
    if(n & 1 == 1) cnt++;

    n = n >> 1;
  }
  return cnt;
}

console.log(countSetBits("1001"))