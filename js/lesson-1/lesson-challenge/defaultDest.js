const obj = { name: "John" };
let { name, age = "Unknown" } = obj;
console.log(name);
console.log(age);
