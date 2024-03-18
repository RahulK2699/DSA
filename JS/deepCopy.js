function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  const copiedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
      if (obj[key]) {
          copiedObj[key] = deepCopy(obj[key]);
          //to create shallow copy  instead of recursive call obj[key] it will pass same refercne to copied obj 
      }
  }

  return copiedObj;
}

let obj = {
  name : "rahul",
  sname : {
    surname : "Kharche"
  }
}

let obj2 = deepCopy(obj);
obj2.sname.surname =  " Kadam";

console.log(obj)
console.log(obj2)
console.log("5" + -3);