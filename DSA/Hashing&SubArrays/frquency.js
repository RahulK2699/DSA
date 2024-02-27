let arr = [2 , 4, 1 ,2 ,3];

function findFreq(arr) { 
  let obj = new Map();

  for(let i = 0; i < arr.length; i++) {
    if(obj.has(arr[i])) obj.set(arr[i], obj.get(arr[i]) + 1);
    else obj.set(arr[i], 1);
  }
  return obj;
}

console.log(findFreq(arr));