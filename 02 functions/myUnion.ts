// HERE we are going to see about union types.
// Union is a combination of 2 or 3 or more types of data that we can include in a variable, Array and etc...

//union types eg:
let score: number | string = 45; // now score can be number or string
score = "4563"; //we are assigning string to score.
console.log(score);


// union types with our own custom derived datatype
type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

// defining the variable
let sahilSharma: User | Admin = {
    name: "Sahil Sharma",
    id: 34
}
console.log(sahilSharma);

//if we want to change sahil to Admin
sahilSharma = {
    username: "Sahil_Admin", 
    id: 34
}
console.log(sahilSharma);

