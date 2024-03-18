let arr = [1, 3, 2, 3, 3, 4 ,5]

// function removeDuplicate(arr) {
//   let ans = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(ans.indexOf(arr[i]) === -1) ans.push(arr[i]);
//   }
//   return ans;
// }
function removeDuplicate(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }
  return Object.keys(obj).map(Number);
}

console.log(removeDuplicate(arr));