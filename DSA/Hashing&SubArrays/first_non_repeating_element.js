/*
  given an array retrun first non repeaating element in array 
  let arr = [1,2,3,2,4,1,5];
  output 3
*/
let arr = [1,2,3,2,4,1,5];
function getFirstUniqueelement(arr) {
  let obj = new Map();

  for(let i = 0; i < arr.length; i++) {
    if(obj.has(arr[i])) obj.set(arr[i], obj.get(arr[i]) + 1);
    else obj.set(arr[i], 1);
  }

  for(let i = 0; i < arr.length; i++) {
    if(obj.get(arr[i]) === 1) return arr[i];
  }

  return -1;
}

// console.log(getFirstUniqueelement(arr));

function getDistinctElements(arr) {
  let obj = new Set();

  for(let i = 0; i < arr.length; i++) obj.add(arr[i]);

  return obj.size
}

console.log(getDistinctElements(arr));


