/*
Given a non-negative integer N. The task is to check if N is a power of 2. More formally, check if N 
can be expressed as 2x for some integer x. 
Return true if N is power of 2 else return false.

Input: 
N = 8
Output: 
YES
Explanation:
8 is equal to 2 raised to 3 (2**3 = 8).
*/

function isPowerOfTwo(n){

  if(n == 0) return false;

  if ( (n & (n - 1)) === 0) return true;
  else return false;
}

console.log(isPowerOfTwo(5))

/*
every no of pwoer 2 in binary always have one set bit 
4 = 100
8 = 1000
16 = 10000
if we do AND operation on n  and n - 1 result will be 0 always

if  you include negativew no as well then n * n - 1 === n  will satisfy for negative no 
*/