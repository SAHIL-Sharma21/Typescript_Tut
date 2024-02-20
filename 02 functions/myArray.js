//Arrays in Ts
// const hashrias = [];
// hashrias.push("Giyu"); // this will give error as hashrias is type of never and we cannot assign string to it
//below  is the solution >> how we define the array.
var hashirays = []; //now hashrias is a type of string array.
hashirays.push("Giyu");
console.log(hashirays);
//number array
var hashiraPower = []; // now hashiraPower is type number array
hashiraPower.push(2);
console.log(hashiraPower);
//another way of defining type of the arrays is
var power = []; //now the power is a type of array of numbers.
var allUser = []; // allUser is type of user array
allUser.push({ name: "Sahil", isActive: true });
console.log(allUser);
//another way is array of array
var MLpoints = [
    [2, 4, 6],
    [3, 5, 7],
    [8, 10, 12],
    [9, 11, 13]
];
console.log(MLpoints);
