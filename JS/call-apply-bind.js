// call apply bind

const obj = {
  name: "Rahul",
};
const obj1 = {
  name: "pratik",
};

function sayHello(age, prof) {
  return " Hello " + this.name + "age is " + age + " and  is an " + prof;
}
//.call({obj},"")
// console.log(sayHello.call(obj)); //call will take an arguments as a string
// console.log(sayHello.apply(obj, [24, "SE"])); // Apply will take an argument as an array
// const fn = sayHello.call(obj, 24, "SE"); // bind will return us the function which we can execute later on
// console.log(fn());

const func1 = sayHello.bind(obj);
const func2 = sayHello.bind(obj1, 24, "student");

console.log(func1(18, "SE"));
console.log(func1(24, "SEE"));
