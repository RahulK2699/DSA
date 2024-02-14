/*
count pairs  "ag"
given a char [] calculate no of pairs i,j such that i < j && s[i] === 'a  and s[j] === 'g'
all chars in lowercase
*/


let arr = ["b","a","a", "g", "d", "c", "a", "g"];

function countPairs(arr) {
  let cnt = 0;
  let ans = 0;

  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 'g') cnt++;

    if(arr[i] === 'a') ans += cnt;
  }

  return ans;
}

console.log(countPairs(arr));

