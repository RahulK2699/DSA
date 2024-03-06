/*
Given a number A, check if it is a magic number or not.
A number is said to be a magic number if the sum of its digits is calculated till a single digit recursively 
by adding the sum of the digits after every addition. If the single digit comes out to be 1, then the number 
is a magic number.
 A = 83557\ Sum of digits of (83557) = 28
 Sum of digits of (28) = 10
 Sum of digits of (10) = 1. 
 Single digit is 1, so it's a magic number. Return 1.
*/

var addDigits = function(num) {
  if (num === 0) {
    return 0;
  }

  const sumDigits = (n) => {
    if (n === 0) {
      return 0;
    }
    return n % 10 + sumDigits(Math.floor(n / 10));
  };

  let result = sumDigits(num);

  while (result > 9) {
    result = sumDigits(result);
  }

  return result;
};

// Example usage:
console.log(addDigits(83557)); // Output: 1

