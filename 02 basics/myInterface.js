"use strict";
// here we are going to learn about interfaces
//let suppose we are creating a user with its properties
Object.defineProperty(exports, "__esModule", { value: true });
// crating a user 
// const userDetails: User = {
//     DbId: 3123333,
//     email: "Sahil@dev.sde",
//     userId: 2324,
//     gitHubtoken: "github",
//     startTrial: () => {
//         return "Trial done!"
//     },
//     // getCoupoun(name) {
//     //     console.log(name);
//     //     return 6363276;
//     // },
//     //another way
//     getCoupoun: (name: "diwali sale discount", off: 30) => {
//         console.log(off);
//         return 10
//     }
// }
// userDetails.email = "Sahil@sde.google"
// console.log(userDetails.startTrial());
// // console.log(userDetails.getCoupoun("diwali sale discount"));
// console.log(userDetails.getCoupoun("", 23));
// admin 
var userDetails = {
    role: "Learner",
    DbId: 3123333,
    email: "Sahil@dev.sde",
    userId: 2324,
    gitHubtoken: "github",
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
console.log(userDetails.role);
