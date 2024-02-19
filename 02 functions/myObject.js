"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// here we are going to learn about objects in typescript
//basic way for definig functions are
var user = {
    name: "Sahil",
    email: "sahil@dev.com",
    isActive: true
};
// ----------------------------------------------------------------------------------------------------------//
function createUser(user) {
    console.log(user.name);
    console.log(user.isPaid);
}
createUser({ name: "Sahil", isPaid: false });
//whats if we give one extra key - value pair in object
// createUser({name:"Rahul", isPaid: true, email: "Rahul@support.com"}); this is the error we cannot pass so to make this working we can do like this.
var newUser = {
    name: "Rahul",
    isPaid: false,
    email: "Rahul@support.com"
};
//now we will pass this object in our function call
var result = createUser(newUser); // this is not showing error.
console.log(result);
// function return object
function createCourse() {
    return {};
}
//special syntax must retun object can be done by this
function createUserCourse() {
    return { name: "Nextjs", price: 50000 };
}
console.log(createUserCourse());
