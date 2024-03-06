let str = "malayalam";
let i = 0; 
let j = str.length - 1;

function pallindrome(str, i , j) {
  if( i >= j) return true;

  if(str[i] !== str[j]) return false;

  return pallindrome(str, i + 1, j - 1);
}

console.log(pallindrome(str,i,j))