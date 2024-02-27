/*
given an array of Size N and Number K find if there exist a pair(i,j) such that arr[i] + arr[j] = k
such that i != j

arr = [0,7,2,3,7]  K = 14 
*/

function  findPairs(arr, k) {
  let map = new Map();

  for(let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }


  for(let i = 0; i < arr.length; i++) {
    let target = k - arr[i];
    if(map.has(target)) {
      if(target === arr[i]) {
        if(map.get(target) >= 2) return true;
      }
      else return true;
    }
  }

  return false;
}

let arr = [0,7,2,3,7]  
let K = 10; 

console.log(findPairs(arr,K))