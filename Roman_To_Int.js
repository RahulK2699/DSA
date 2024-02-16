/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
function romanToInt(str) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let ans = 0;

  for(let i = 0; i < str.length; i++) {
    let s1 = obj[str[i]];
    let s2 = i == str.length - 1 ? 0 : obj[str[i + 1]];

    if(s1 >= s2) {
      ans += s1;
    }
    else {
      ans += s2 - s1;
      i++;
    }
  }

  return ans
}

console.log(romanToInt("XCVIII"))