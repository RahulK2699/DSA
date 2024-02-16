/*
Given a number N and a bit number K, check if Kth index bit of N is set or not. 
A bit is called set if it is 1. Position of set bit '1' should be indexed starting with 0 from LSB side 
in binary representation of the number.

Note: Index is starting from 0. You just need to return true or false, 
driver code will take care of printing "Yes" and "No".

Input: 
N = 4
K = 0
Output: 
No
Explanation: 
Binary representation of 4 is 100, in which 0th index bit from LSB is not set. So, return false.
*/

function checkKthBit(n,k) {
  if( 1 & (n >> k) === 1) return true;
  else return false
}