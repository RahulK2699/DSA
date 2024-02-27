/*
Given an array of integers and a number K. Find the count of distinct elements in every window of size K 
in the array.
N = 7, K = 4
A[] = {1,2,1,3,4,2,3}
Output: 3 4 4 3
Explanation: Window 1 of size k = 4 is
1 2 1 3. Number of distinct elements in
this window are 3. 
Window 2 of size k = 4 is 2 1 3 4. Number
of distinct elements in this window are 4.
Window 3 of size k = 4 is 1 3 4 2. Number
of distinct elements in this window are 4.
Window 4 of size k = 4 is 3 4 2 3. Number
of distinct elements in this window are 3.
*/

function countDistinct(arr, k) {
  let map = new Map();
  let ans = [];
  let i = 1;
  let j = k;

  for(let i = 0; i < k; i++){
    if(map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }

  ans[0] = map.size;
  while(j < arr.length){

    //push ele to map
   if(map.has(arr[j])) map.set(arr[j], map.get(arr[j]) + 1);
   else map.set(arr[j], 1);

   //remove 1st ele from map
   if(map.get(arr[i - 1]) > 1) map.set(arr[i - 1], map.get(arr[i - 1] - 1));
   else map.delete(arr[i - 1]);

   ans.push(map.size);
   i++;
   j++;
  }

  return ans;

}

const K = 4
const arr = [1,2,1,3,4,2,3]
console.log(countDistinct(arr,K));
