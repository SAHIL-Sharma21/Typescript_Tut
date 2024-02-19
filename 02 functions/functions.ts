// here we will be learning whole functions in ts
//problem with any type

// function addTwo(num){
//     num.toUpperCase(); //this is not allowed but ts is allowing us to do  as it has inferred to any type.
//     return num + 2;
// }
// addTwo("3");

// Solution to above problem can be solve by this
//number method
//returing from the function when we return hello in below method it will not give error but this is not we want.. we have to specify the return of the functions
function addTwo(num: number): number {
    return num + 2;
    // return "Hello";
}
const result = addTwo(3); // alwyas pass a number to it >> that is the work of Ts.
console.log(result);

//String Method
function getUpper(val: string) {
    return val.toUpperCase();
}
console.log(getUpper("Sahil"));


//funtions with more than 1 parameters
function signedUp(name: string, email: string, isPaid: boolean) {
    // console.log(`the user ${name} with email ${email} is a paid user? ${isPaid}`);
    return `the user ${name} with email ${email} is a paid user? ${isPaid}`;
    
}
const data = signedUp("Sahil", "sahil@dev.co", true);
console.log(data);

// function with default parameter and arrow functions in ts
const login = (name: string, email: string, isPaid: boolean = true) => {
    return `user ${name} logged in ${email} and a paid user ${isPaid}`
}
const userData = login("Sahil", "sahil@dev");
console.log(userData);


// Returing more than 1 type from functions
// function getValue(val: number): boolean {
//     if(val > 5) {
//         return true;
//     }
//     return "200 OK"
// }
// getValue(6);

// in arrow functions
const getHello = (s: string): string => {
    return "";
}

//Ts automatically predicts the type >> context switching
// const heros = ["Zoro", "Ace", "Luffy"];
const heros = [2, 4, 6];
// const heroVal = heros.map((val) => `hero: ${val}`);
const heroVal = heros.map((val): string => {
    return `hero is ${val}`
});
console.log(heroVal);

//Explicitly return from the function
function consoleError(errMsg: string): void {
    console.log(errMsg);
}
consoleError("404 page not found");

//never
//Some functions never return a value:
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
const handleError = (errMsg: string): never => {
    throw new Error(errMsg);
}


export {};