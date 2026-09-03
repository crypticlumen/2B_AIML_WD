// Rest Operator in JavaScript

// The rest operator allows us to represent an indefinite number of arguments as an array.
// It is denoted by three dots (...) followed by a variable name.


function sum(...value){
    let total = 0;
    for (let num of value) {
        total += num;
    }
    return total;
}
console.log(sum (10, 20, 30, 40, 50)); 
console.log(sum (10, 20, 30)); 