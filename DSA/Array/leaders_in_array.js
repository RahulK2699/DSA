/*
  Leaders in array
  An element is a leader if element is strictly greater that then all the elements on its right hand side
  Note:- aa[N - 1] is always a leader
*/


let arr = [15, -1, 7, 2, 5, 4, 2, 3];

function getAllMaxElements(arr){
  let max = -Infinity
  let ans = [];

  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] >= max){
      max = arr[i];
      ans.unshift(arr[i]); // push elelement at first position
    }
  }

  return ans;
}

console.log(getAllMaxElements(arr))