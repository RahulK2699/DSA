let obj  = {
   name : "Pranav",
   sname : "Mishra",
   role : {
      org: "TCS",
   }
}

let obj2 = {
   org : "TCS"
}

const {org} = obj2;

console.log(org);

let arr = [1,2];

[a,b] = arr;
console.log(a,b);


 let obj1 = Object.assign({role: "SE"},obj)

//spread operator = ...
//rest operator = ...


// let obj1 = {...obj, role : "SE"}
// let obj1 = {...obj, ...obj2, role: "SE"}


// console.log(obj1)

function add(a,b,...args) {
   console.log(args);
}

// add(2,4,5,6,7,8,9);

// let obj1 = {...obj};
// let obj1 = JSON.parse(JSON.stringify((obj)))

// obj.role.org = "Wipro"
// console.log(obj);
// console.log(obj1)

let temp  = {
   name : "Pranav",
   sname : "Mishra",
   role : "SE",
   place: "She"
}

console.log(Object.keys(temp));
console.log(Object.values(temp));
console.log(Object.entries(temp));
console.log(Object.freeze(temp))

temp.name = "Rahul";
// console.log(temp)

//Call, Apply, bind

let call1  = {
   name : "Pranav",
   sname : "Mishra",
}

function display(role) {
   console.log(this.name + this.sname + " role is " + role)
}

// display.call(call1,"SE");
// display.apply(call1,["SE"]);

let temp1 = display.bind(call1);
temp1("SE");
temp1("DevOps");














