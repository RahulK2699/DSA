let str = "cool"
let i = 0;
let j = str.length - 1;
let temp;

function reverseStr(str, i, j) {
  if(i >= j)return str;

  let strArray = str.split("");

  let temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;

  let revStr = strArray.join("");

  return reverseStr(revStr, i + 1, j - 1);
}

console.log(reverseStr(str, i, j))


let n = 46;
// n = n % 10;
console.log(n % 10)