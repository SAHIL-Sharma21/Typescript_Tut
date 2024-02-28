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
