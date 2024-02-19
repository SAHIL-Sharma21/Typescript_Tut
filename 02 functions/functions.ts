// here we will be learning whole functions in ts
//problem with any type

// function addTwo(num){
//     num.toUpperCase(); //this is not allowed but ts is allowing us to do  as it has inferred to any type.
//     return num + 2;
// }
// addTwo("3");

// Solution to above problem can be solve by this
//number method
function addTwo(num: number) {
    return num + 2;
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


export {};