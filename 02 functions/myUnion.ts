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

// union types in functions
// function getDbId(id: number | string){
//     // business code for for getting id
//     console.log(id);
// }
// getDbId(23); //number
// getDbId("56"); //String

//now making more efficient code

function getDbId(id: number | string) {
    //Business logic
    //checking if id is string then convrting id to lowerCase
    if(typeof id === "string") { //union narrowing
        id.toLowerCase();
    } else {
        id += 2; // adding 2 to existing id
    }
    return id;
}
console.log(getDbId(4));
console.log(getDbId("DEQ_JSJNE_ASSDA"));

// union in Array
//problem >> using single type at one time
let data1: number[] = [4, 6, 12]; //number array
let data2: string[] = ["56", "21", "68"]; // string array

//now using both type
let data3: string[] | number[] = []; // this will have either string array or number array
let data4: (string | number)[] = [56, 89., "ghshj", 32]; // this will have both the type in the single array.

//literal type of assignment
let pi: 3.14 = 3.14;
// pi = 3.145; // this will give error.

// good example
let seatAlloatment: "Aisle" | "middle" | "window";
seatAlloatment = "Aisle";
// seatAlloatment = "crew"// not possible gives error.