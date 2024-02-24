"use strict";
// here we are going to learn about interfaces
//let suppose we are creating a user with its properties
Object.defineProperty(exports, "__esModule", { value: true });
// crating a user 
var userDetails = {
    DbId: 3123333,
    email: "Sahil@dev.sde",
    userId: 2324,
    startTrial: function () {
        return "Trial done!";
    },
    // getCoupoun(name) {
    //     console.log(name);
    //     return 6363276;
    // },
    //another way
    getCoupoun: function (name, off) {
        console.log(off);
        return 10;
    }
};
userDetails.email = "Sahil@sde.google";
console.log(userDetails.startTrial());
// console.log(userDetails.getCoupoun("diwali sale discount"));
console.log(userDetails.getCoupoun("", 23));
