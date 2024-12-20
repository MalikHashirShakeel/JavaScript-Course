//--------------------------------------------OPERATORS-----------------------------------------------------------
let a = 1;
let b = 2;
let c = a + b;
console.log(c);//3
console.log(a + b); //3
console.log(a - b); //-1
console.log(a * b); //2
console.log(a / b); //0.5
console.log(a % b); //1

let x = 4;
let y = 6;
console.log(x++); //4
let z = x++; 
console.log(z); //6
console.log(++x);//7
console.log(++y);//7
x += 1;
y += 1;
console.log(x); //8
console.log(y); //8

//---------------------------------------COMPARISON OPERATORS-----------------------------------------------------

a = 5;
b = 5;
console.log(a == b); //true
console.log(a != b); //false
console.log(a === b); //true
console.log(a !== b); //false
console.log(a > b); //false
console.log(a < b); //false
console.log(a >= b); //true
console.log(a <= b); //true

//---------------------------------------IF/ELSEIF/ELSE------------------------------------------------------------

let age = 15;
if (age <= 16){
    console.log("You are strictly not egligible for driving");
} else if(age <= 18){
    console.log("You are not egligible for driving");
} else{
    console.log("You are egligible for driving");
} 

let mode = "light";

let color = mode === "dark" ? "Black" : "White"; //TERNARY OPERATORS
console.log(color)

if (color === "White") console.log("Light mode is on"); //SINGLE LINE CONDITIONAL STATEMENT

//SWITCH CASE
switch ("papaya"){
    case "Orange":
        console.log("Orange");
        break
    case "papaya":
        console.log("papaya");
        break
}

//-------------------------------------AND/OR/NOT------------------------------------------------------------------

a = true;
b = false;
console.log(a && b); //false
console.log(a || b); //true
console.log(!(a || b)); //false

                                            // THE END //

// let num;

// num = prompt("Enter a number here: ");

// if (num % 5 == 0){
//     console.log("The number is a multiple of 5.");
// } else {
//     console.log("The number is not a multiple of 5");
// }