"use strict";
// here we will be learning whole functions in ts
//problem with any type
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num){
//     num.toUpperCase(); //this is not allowed but ts is allowing us to do  as it has inferred to any type.
//     return num + 2;
// }
// addTwo("3");
// Solution to above problem can be solve by this
//number method
function addTwo(num) {
    return num + 2;
}
var result = addTwo(3); // alwyas pass a number to it >> that is the work of Ts.
console.log(result);
//String Method
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("Sahil"));
//funtions with more than 1 parameters
function signedUp(name, email, isPaid) {
    // console.log(`the user ${name} with email ${email} is a paid user? ${isPaid}`);
    return "the user ".concat(name, " with email ").concat(email, " is a paid user? ").concat(isPaid);
}
var data = signedUp("Sahil", "sahil@dev.co", true);
console.log(data);
// function with default parameter and arrow functions in ts
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "user ".concat(name, " logged in ").concat(email, " and a paid user ").concat(isPaid);
};
var userData = login("Sahil", "sahil@dev");
console.log(userData);
