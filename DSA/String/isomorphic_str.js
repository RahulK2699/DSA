var isIsomorphic = function (s, t) {
  var obj1 = {};
  var obj2 = {};
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    if (!obj1[s[i]]) obj1[s[i]] = 1;
    else obj1[s[i]] += 1;

    if (!obj2[t[i]]) obj2[t[i]] = 1;
    else obj2[t[i]] += 1;
  }
  let key1 = Object.values(obj1);
  let key2 = Object.values(obj2);
  if (key1.length !== key2.length) return false;

  for (var j = 0; j < key1.length; j++)
    if (!key2.includes(key1[j])) return false;

  return true;
};

var s = "bbbaaaba";
var t = "aaabbbba";
console.log(isIsomorphic(s, t));
