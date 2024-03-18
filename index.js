let obj = {
  name : "Rahul"
}

function display (name) {
  console.log(this.name + " " + name);
}

let fn = display.bind(obj);
fn("Vishal");
fn("I am not rahul")


