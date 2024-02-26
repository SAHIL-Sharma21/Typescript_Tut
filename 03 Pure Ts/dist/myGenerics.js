"use strict";
// here we are going to learn about generics in Ts.
//one way to define generics
const score = [];
const names = [];
//problem in previous code
// It dosent work for string surely there is a problem we dont want to write | string in return type so we will solve this problem using generics.
function identityOne(val) {
    return val;
}
// we cannot use any type as it has loopholes >>> not solve our problem this also.
// this can take any type of value and return any type of value, this is the problem. eg: number as input and return as string not a good idea.
function identityTwo(val) {
    return val;
}
// solutuions to the above problems
// it work as any type can be any like number, strings and val is also number but it will return only the type which is locked first eg if val is number then function return type is number.
function identityThree(val) {
    return val;
}
identityThree(3); //function identityThree<3>(val: 3): 3
identityThree("4"); //function identityThree<"4">(val: "4"): "4"
// how programmer define above generic function >>> shortcut to defining the generics.
function identityFour(val) {
    return val;
}
// making function call 
identityFour({ brand: "Cello", type: 20 }); //function identityFour<Bottle>(val: Bottle): Bottle
