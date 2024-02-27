/*
Given two integer arrays, nums1 and nums2 of size N and M, respectively. Your task is to find all the common 
elements in both the array.
 A = [1, 2, 2, 1]
 v2 = [2, 3, 1, 2]
 output => [1, 2, 2]

*/

let A = [3,4,2,3];
let B = [1,5];

// function commonElements(v1,v2) {
//   let map = new Map();
//   let ans = [];
  

//   for(let i = 0; i < v1.length; i++) {
//     if(map.has(v1[i])) map.set(v1[i], map.get(v1[i]) + 1);
//     else map.set(v1[i],1)
//   }

//   for(let i = 0; i < v2.length; i++) {
//     if(map.has(v2[i])) {
//       if(map.get(v2[i]) === 1){
//         map.get(v2[i]);
//         map.delete(v2[i]);
//       }
//       else  map.set(v2[i], map.get(v2[i]) - 1);

//       ans.push(v2[i])
//     }
//   }
//   return ans;
// }


//Leetcode Problem dont consider duplicates 

function commonElements(nums1,nums2) {

  let cnt1 = getCount(nums2,nums1);
  let cnt2 = getCount(nums1,nums2);

  function getCount(arr1,arr2) {
    let map = new Map();
    let cnt = 0;
    for(let i = 0; i < arr1.length; i++) {
      if(map.has(arr1[i])) map.set(arr1[i], map.get(arr1[i]) + 1);
      else map.set(arr1[i],1)
    }
  
    for(let i = 0; i < arr2.length; i++) {
      if(map.has(arr2[i])) {
        cnt++;
      }
    }
    return cnt;
  }
  return [cnt1, cnt2];
}

console.log(commonElements(A,B))

