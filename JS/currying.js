// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     else return a;
//   };
// }

// console.log(add(2)(3)());

//add(2,3) && add(2)(3) write a js function will accept both function calls.

function add(...args) {
  if(args.length > 1) return args[0] + args[1];
  else return function (y) {
    return args[0] + y;
  }
}

console.log(add(2, 3));