/*
  if subarray with sum = 0 is exists return true;
*/

function subArrayExists(arr, n){
  let pf = [];
  pf[0] = arr[0]
  
  for (let i = 1; i < n ; i++) {
    
      pf.push(pf[i - 1] + arr[i])
  }
  console.log(pf)
  
  let obj = new Set(pf)
  
  return obj.size < n || obj.has(0)
  
}

let arr = [6, 10 ,-4, -6];
console.log(subArrayExists(arr,arr.length))