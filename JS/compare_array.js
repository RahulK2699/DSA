let arr1 = [1,2,3,5,4];
let arr2 = [1,2,3,4,5];

function compareArrays(arr1,arr2) {
  if(arr1.length !== arr2.length) return false;

  return arr1.every((item, index) => {
    return item === arr2[index];
  })
}

console.log(compareArrays(arr1, arr2))