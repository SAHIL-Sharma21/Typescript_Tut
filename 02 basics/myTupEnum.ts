// HERE we are going to learn about tuple in typescript..

const user: (string | number)[] = ["Sahil", 3]; //user variables with both string and number array.

// there are special cases or situation where we want to specific things to be pushed down to our array. >> usually like in API Call.
// concept of tuple
// defining tuple
let tuser: [string, number, boolean];
tuser = ["Sahil", 25, true]; // we can do this
// tuser = [true, "Sahil", 25]; // but we cannot do this as it is tuple.
console.log(tuser);


// real example 




export {};