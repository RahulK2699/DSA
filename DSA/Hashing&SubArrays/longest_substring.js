/**
 * Given a string return length of longest  substring without repeating characters
 */

let str = "abcdefgh"


function longestSubstring(str) {
  let map = new Map();
  let startIndex = 0;
  let maxLength = 0;

  for( let i = 0; i < str.length; i++ ) {

    if(map.has(str[i]) && map.get(str[i]) >= startIndex){
      startIndex = i;
    }

    map.set(str[i], i);
    maxLength = Math.max(maxLength, i - startIndex + 1)
  }

  return maxLength;
}

console.log(longestSubstring(str));
