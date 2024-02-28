"use strict";
// here we are going to learn about type narrowing
//problem
//problem comes when there is number array below is the solution by using typeof
function dectectType(val) {
    if (typeof val === "string") {
        val.toLowerCase();
        return val;
    }
    return val + 3;
}
//another function
function provideId(id) {
    if (!id) {
        console.log("Please provide Id");
        return;
    }
    id.toLowerCase();
}
// another example with string | Array | null
function printStr(str) {
    //if string is present then str is not null
    if (str) {
        if (typeof str === "object") {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}
function isAdminAccount(account) {
    //checking if isAdmin in account then return account.isAdmin.
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// Date is created by Date object with the new keyword
// instance of narrowing
//instance of is only used when ther is new keyword so this I have to remember....
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toLowerCase());
    }
}
// using type predicate
function isFish(pet) {
    //in documentaion example they have typecasted pet as fish, so we are going to do the same
    return pet.swim !== undefined;
}
//implemting our example
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Foood";
    }
    else {
        pet;
        return "Bird Food";
    }
}
//creating function 
function getTrueName(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}
// The never type
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape; // error is giving ass we can not checking for all the exhaustive cases i.e. Rectangle
            return _defaultForShape;
    }
}
