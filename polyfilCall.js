//Polyfil for call

// call apply bind

const obj = {
  name: "Rahul",
};

function sayHello(age, prof) {
  console.log(" Hello " + this.name + " is " + age + " and  is an " + prof);
}
sayHello.call(obj, 24, "SE");
//call will take object and arguments

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function")
    throw new Error(this.context + "it's not a callable");

  context.fn = this;
  context.fn(...args);
};

sayHello.myCall(obj, 24, "SE");
