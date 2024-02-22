//Arrays in Ts

// const hashrias = [];
// hashrias.push("Giyu"); // this will give error as hashrias is type of never and we cannot assign string to it
//below  is the solution >> how we define the array.

const hashirays: string[] = []; //now hashrias is a type of string array.
hashirays.push("Giyu");
console.log(hashirays);

//number array
const hashiraPower: number[] = []; // now hashiraPower is type number array
hashiraPower.push(2);
console.log(hashiraPower);

//another way of defining type of the arrays is
const power: Array<number> = []; //now the power is a type of array of numbers.


//another example with our User type which we will define
type User = {
    name: string
    isActive: boolean
}

const allUser: User[] = []; // allUser is type of user array
allUser.push({name: "Sahil", isActive: true})
console.log(allUser);


//another way is array of array
const MLpoints: number[][] = [
    [2, 4, 6],
    [3, 5, 7],
    [8, 10, 12],
    [9, 11, 13]
];
console.log(MLpoints);
