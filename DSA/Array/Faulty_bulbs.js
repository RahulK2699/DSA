/*
N light bulbs are connected by a wire. Each bulb has a switch associated with it, 
however due to faulty wiring, a switch also changes the state of all the bulbs to the right of current bulb.
Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all 
the bulbs. "0 represents the bulb is off and 1 represents the bulb is on."

Example
Input:
N=4
arr[] = { 0, 0, 0, 0 }
Output:  1
Explanation: 
From the given set of bulbs change
the state of the first bulb from off
to on ,which eventually turn the rest
three bulbs on the right of it.
*/

function faultyBulbs(arr, n) {

//  for(let i = 0; i < arr.length; i++) {
//   if(arr[i] === 0){
//     arr[i] = 1;

//     for(let j = i + 1; j < n; j++) {
//       if(arr[j] === 0) arr[j] = 1;
//       else arr[j] = 0;
//     }
//     count++;
//   }
//  }
//  return count;
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1 && count % 2 === 0) continue;
    else if(arr[i] === 0 && count % 2 !== 0) continue;
    else if(arr[i] === 1 && count % 2 !== 0) count++;
    else if(arr[i] === 0 && count % 2 === 0) count++;

  }

  return count;
}

let arr = [1, 0, 0, 1]

console.log(faultyBulbs(arr,arr.length))