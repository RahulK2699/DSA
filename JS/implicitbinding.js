//implicit and explicit Binding

let obj = {
  name: "Rahul",
  display: function () {
    console.log(this.name);
  },
};

let obj1 = {
  name: "Sanket",
};

obj.display();
obj.display.call(obj1);
