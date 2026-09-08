// Spread Operator in JavaScript

// The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// It is denoted by three dots (...) followed by the iterable.

function sum(...values){
    let sum = 0;
    for (let i in values){
        sum += values[i];
    }
    console.log(sum);
};
let input = prompt("Enter numbers separated by spaces:");

let arr = input.split(" ").map(Number);

sum (...arr);   