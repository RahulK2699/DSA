
String.prototype.repeatString = function(times) {
  let ans = ""
  if(typeof times !== "number") throw new Error(times + "is expecting number found a string");

  for(let i = 0; i < times; i++) {
    ans += this
  }
  return ans;
}

let str = "Hello"

console.log(str.repeatString(13))