/*
Given a string S, Check if characters of the given string can be rearranged to form a palindrome
S = "geeksogeeks"
Output: Yes
Explanation: The string can be converted
into a palindrome: geeksoskeeg
*/

let str = "geeksogeeks";

function checkPallindrome(str) {
  let map = new Map();
  let checkMap = new Map();

  for(let i  = 0; i < str.length; i++) {
    if(map.has(str[i])) map.set(str[i], map.get(str[i]) + 1);
    else map.set(str[i],1);
  }


  if((str.length & 1) === 0) {
    for(let i = 0; i < str.length; i++)
      if(map.get(str[i]) % 2 !== 0) return 0;
  }
  else {
    for(let i = 0; i < str.length; i++) {
      if(map.get(str[i]) % 2 !== 0) checkMap.set(str[i], map.get(str[i]));
    }

    if(checkMap.size > 1) return 0;
  }

  return 1;
}

console.log(checkPallindrome("st"));