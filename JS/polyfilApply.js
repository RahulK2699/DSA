const obj = {
  name: "Rahul",
};

function sayHello(age, prof) {
  console.log(" Hello " + this.name + " is " + age + " and  is an " + prof);
}

sayHello.apply(obj, [24, "SE"]);

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not a callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike calle an non-object");
  }
};

sayHello.myApply(obj, [24, "SE"]);
