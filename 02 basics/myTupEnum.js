"use strict";
// HERE we are going to learn about tuple in typescript..
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["Sahil", 3]; //user variables with both string and number array.
// there are special cases or situation where we want to specific things to be pushed down to our array. >> usually like in API Call.
// concept of tuple
// defining tuple
var tuser;
tuser = ["Sahil", 25, true]; // we can do this
// tuser = [true, "Sahil", 25]; // but we cannot do this as it is tuple.
console.log(tuser);
// real example 
var rgb; // as rgb is like (255, 255, 255) all three are numbers
rgb = [0, 255, 255];
var newUser = [12, "Sahil"];
console.log(newUser);
//overriding these values
newUser[1] = "sahil@dev.com";
console.log(newUser);
//oneloop hole as newUser is array and we can use array method but it wil not follow the tuple restrictions
// newUser.push(true);
newUser.push(34);
console.log(newUser);
