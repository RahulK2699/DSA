var pattern = "aaaa";
var s = "dog cat cat dog";
var wordPattern = function (pattern, s) {
  const arrayString = s.split(" ");
  let hashMapPattern = {};
  let hashMapString = {};

  if (pattern.length !== arrayString.length) return false;

  for (let i = 0; i < arrayString.length; i++) {
    if (!hashMapPattern[pattern[i]] && !hashMapString[arrayString[i]]) {
      hashMapPattern[pattern[i]] = arrayString[i];
    }
    if (!hashMapString[arrayString[i]]) {
      hashMapString[arrayString[i]] = pattern[i];
    }

    if (hashMapPattern[pattern[i]] !== arrayString[i]) return false;
  }

  return true;
};

console.log(wordPattern(pattern, s));
