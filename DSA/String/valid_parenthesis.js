/*
link : https://leetcode.com/problems/valid-parentheses/description/
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

function validParenthesis(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(" || s[i] === "[" || s[i] === "{") stack.push(s[i])
    else {
      switch(s[i]) {
        case ")" : {
          let popped = stack.pop();
          if(popped !== "(") return false
          break;
        }

        case "]" : {
          let popped = stack.pop();
          if(popped !== "[") return false
          break;
        }

        case "}" : {
          let popped = stack.pop();
          if(popped !== "{") return false
          break;
        }

        default : return false;
      }
    }
  }

  if(stack.length !== 0) return false;
  else return true;
}

console.log(validParenthesis("()[]{}}"))