//-----------------------------------------ORDINARY FUNCTION-------------------------------------------------------

// function calcAvg(num1,num2){
//     return (num1 + num2) / 2
// }
// let avg = calcAvg(100,50)
// console.log(avg)

//----------------------------------------ARROW FUNCTIONS-------------------------------------------------------------

// let avg = (list) => {
//     result = 0;
//     for(let element of list){
//         result += element;
//     }
//     return result / list.length;
// }

// console.log(avg([22,23,24,25]));

//------------------------------------------FOR EACH------------------------------------------------------------------

// let arr = [0,1,2,3,4,5,6,7,8,9]

// arr.forEach((val) => {
//     console.log(val ** 2);
// }

//WE CAN ALSO DO IT AS

// arr.forEach(function square(val){
//     console.log(val ** 2);
// });

//-------------------------------------------MAP----------------------------------------------------------------------

// let arr = [0,1,2,3,4,5,6,7,8,9];

// let squaredArr = arr.map((val) => {
//     return val **2;
// });

// console.log(squaredArr)

//------------------------------------------------FILTER--------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9];

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(newArr);

//------------------------------------------------REDUCE---------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9];

// const answer = arr.reduce((prev,current) => {
//     return prev + current;
// });

// console.log(answer);

//----------------------------------------------PROBLEM---------------------------------------------------------------

let arr = [88,92,93,84,73,47,46];
// let newArr = arr.filter((val) => {
//     return val > 90;
// });
// console.log(newArr);

//without any method
// newArr = [];
// for (let i = 0 ; i < arr.length ; i++ ){
//     if (arr[i] > 90){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// const value = arr.reduce((result ,current_val ) => {
//     return result + current_val
// })

// console.log(value)

let arrSum = arr.reduce((result ,next) => {
    return result + next;
})

console.log(arrSum);

