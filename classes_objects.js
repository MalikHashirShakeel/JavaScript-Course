// const student = {
//     name : "Hashir",
//     roll_no : 96,
//     student_data(){
//         console.log(`The name of student is ${this.name} and the roll number is ${this.roll_no}.`);
//     }
// }
// student.student_data()
// console.log(student);

// const studentUpdated = {
//     name : "Hashir2",
//     roll_no : 100
// }
// console.log(studentUpdated);
// studentUpdated.__proto__ = student;
// console.log(studentUpdated)
// studentUpdated.student_data();

// class Employee{
//     constructor(id,name,age){
//         this.employeeID = id,
//         this.employeeName = name,
//         this.employeeAge = age
//     }

//     employeeData(){
//         console.log(`The name of the employee is ${this.employeeName} and the age is ${this.employeeAge}`);
//     }
// }

// class Programmer extends Employee{
//     constructor(id,name,age,experience,language){
//         super(id,name,age);
//         this.experience = experience,
//         this.language = language
//     }

//     programmerData(){
//         super.employeeData();
//         console.log(`He/She is the ${this.language} programmer with an experience of ${this.experience} years.`);
//     }
// }

// p1 = new Programmer(96,"Hashir",18,0.02,"python/Javascript");
// p1.programmerData();


// class Employee {
//     constructor(name ,age ,id){
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     employeeData(){
//         console.log(`The name of the emloyee is ${this.name} and the age of the employee ${this.age}.`);
//     }
// }

// class Programmer extends Employee{
//     constructor(name ,age ,id ,language ,experience){
//         super(name ,age ,id);
//         this.language = language;
//         this.experience = experience;
//     }

//     employeeData(){
//         super.employeeData();
//         console.log(`He/She is ${this.age} years old with an experience of ${this.experience} years.`);
//     }
// }

// let obj = new Programmer("Hashir" ,18 ,420 ,"Python" ,1);
// obj.employeeData();