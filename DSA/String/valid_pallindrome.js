/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
 all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include 
 letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function validPallindrome (str) {
   str =  str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   return str === str.split("").reverse().join("");
}

console.log(validPallindrome("0P"))