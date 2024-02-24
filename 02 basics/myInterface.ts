// here we are going to learn about interfaces
//let suppose we are creating a user with its properties

//creating interface
// we can create function in interface 
interface User {
    readonly DbId: number, //readonly field
    email: string,
    userId: number,
    googleId?: string, //optional property as it has question mark
    // definig function of string return type
    // startTrial: () => string // string method
    //another way to write the method is
    startTrial(): string, //startTrial is a method which return string 
    //getCoupoun method
    getCoupoun(coupounName: string, value: number): number,
}

// crating a user 
const userDetails: User = {
    DbId: 3123333,
    email: "Sahil@dev.sde",
    userId: 2324,
    startTrial: () => {
        return "Trial done!"
    },
    // getCoupoun(name) {
    //     console.log(name);
    //     return 6363276;
    // },
    //another way
    getCoupoun: (name: "diwali sale discount", off: 30) => {
        console.log(off);
        
        return 10
    }
}
userDetails.email = "Sahil@sde.google"
console.log(userDetails.startTrial());
// console.log(userDetails.getCoupoun("diwali sale discount"));
console.log(userDetails.getCoupoun("", 23));
 

export {}