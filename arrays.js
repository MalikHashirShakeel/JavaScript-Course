let fruits = ["apple","mango","banana","peach","pear","plum"];

//Indexing

console.log(fruits[0]);

//LOOPING OVER AN ARRAY

let marks = [96,85,85,67,78,93,82,88];
sum = 0;
for(let i = 0 ; i < marks.length ; i++){
    sum += marks[i];
}
average = sum / marks.length;
console.log(average);

let i = 1;
for(let fruit of fruits){
    console.log(`Fruit ${i} : ${fruit}`);
    i++;
}

//ARRAY METHODS
let arr = [1,2,3,4,5,6,7,8];
console.log(arr.slice(0,2));
arr.push(9);
console.log(arr);
arr.pop(9);
console.log(arr);
arr.unshift(0);
console.log(arr);
console.log(arr.shift());
arr.splice(2,1,"*")
console.log(arr);
