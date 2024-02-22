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
// function createUser(user :{name: string, isPaid: boolean}) {
//     console.log(user.name);
//     console.log(user.isPaid);
// }
// createUser({name: "Sahil", isPaid: false});
//whats if we give one extra key - value pair in object
// createUser({name:"Rahul", isPaid: true, email: "Rahul@support.com"}); this is the error we cannot pass so to make this working we can do like this.
var newUser = {
    name: "Rahul",
    isPaid: false,
    email: "Rahul@support.com"
};
//now we will pass this object in our function call
// const result = createUser(newUser); // this is not showing error.
// console.log(result);
// function return object
function createCourse() {
    return {};
}
//special syntax must retun object can be done by this
function createUserCourse() {
    return { name: "Nextjs", price: 50000 };
}
console.log(createUserCourse());
//creating a user of type User
var myUser = {
    _id: "42552",
    name: "Sahil",
    email: "Sahil@dev.com",
    isActive: false,
};
//changing myUser values after defining
// myUser._id = "72372" // we cannot re-assign as _id is readonly
myUser.email = "Sahil@gmail.com";
var details = {
    cardNumber: "FGTYWN527282",
    cardDate: "24/01/2039",
    cvv: 456
};
console.log(details);
