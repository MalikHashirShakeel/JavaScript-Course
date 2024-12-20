//------------------------------------------FOR LOOP------------------------------------------------------------------

// for (let i = 0 ; i <= 100 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//------------------------------------------WHILE LOOP---------------------------------------------------------------

// let num = 50;
// let choice = prompt("Enter a number between 1 and 100: ");
// while(num != choice){
//     console.log("Wrong input! please try again.");
//     choice = prompt("Please enter the number again: ")
// }
// console.log("Congratulations! you've guessed the number correctly.")

//-----------------------------------------DO WHILE LOOP-------------------------------------------------------------

// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i <= 5);

//----------------------------------------FOR OF LOOP----------------------------------------------------------------

// let name = "Malik Hashir Shakeel";
// for(let character of name){
//     console.log(character);
// }

//-------------------------------------------FOR IN LOOP------------------------------------------------------------

// const student = {
//     name : "Hashir",
//     roll : 96,
//     batch : 2023,
// }

// for(let word in student){
//     console.log(student[word]);
// }

//-----------------------------------------STRINGS IN JS-------------------------------------------------------------

//TEMPLATE LITERALS

let name = "Hashir";
let age  = 18;
console.log(`My name is ${name} and I am ${age} years old.`)

//METHODS IN STRINGS

let word = "  Polymorphism   "
console.log(word.length)
console.log(word[0])
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.trim())
console.log(word.charAt(5))
console.log(word.slice(0,5))
word = word.replace("P","H")
console.log(word)