let fruits=['apple','orange'];
let fruits2=['banana','mango']

let student_data=[['maheer',80],['mariyam',80],['lakshna',80]]

console.log(fruits);
console.log(fruits[0]);
console.log(student_data);
console.log(student_data[0][0],student_data[2][0]);

console.log(fruits);
// fruits.push('banana');
// fruits.pop();
// fruits.pop();
// fruits.unshift('mango');
// fruits.shift();
// console.log(fruits.shift());
console.log(fruits.indexOf('orange'));
console.log(fruits.includes("banana"));

let new_fruits=fruits.concat(fruits2);

console.log(1);

for(let i=1;i<=100;i++){
     console.log(i,'string');
}

// for(let i=1;i<=5;i--){
//     console.log(i);
// }
for(let i=0;i<new_fruits.length;i++){
    console.log(new_fruits[i]);
}

for(fruit of fruits){
    console.log(fruit);
}