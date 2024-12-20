console.log("Hello world");

let name = "Hashir";
console.log(typeof(name));

let age = 18;
console.log(typeof(age));

let is_adult = true;
console.log(typeof(is_adult));

let phone_no = BigInt("0314")
console.log(typeof(phone_no));

let sign = Symbol("!")
console.log(typeof(sign));

let anything = null;
console.log(typeof(anything));

let something;
console.log(typeof(something));

name = "Hashir Shakeel"
console.log(name);

const num = 2;
console.log(typeof(num));

const student = {
    name : "Hashir",
    batch : 2023,
    roll_no : 96,
}
console.log(student["name"])
console.log(student.batch)
student.name = "Hashir Shakeel"

const Employee = {
    name : "Malik Hashir"
}