// here we are going to learn about objects in typescript
//basic way for definig functions are
const user = {
    name: "Sahil",
    email: "sahil@dev.com",
    isActive: true
}

// ----------------------------------------------------------------------------------------------------------//
// function createUser(user :{name: string, isPaid: boolean}) {
//     console.log(user.name);
//     console.log(user.isPaid);
// }

// createUser({name: "Sahil", isPaid: false});

//whats if we give one extra key - value pair in object
// createUser({name:"Rahul", isPaid: true, email: "Rahul@support.com"}); this is the error we cannot pass so to make this working we can do like this.
let newUser = {
    name: "Rahul",
    isPaid: false,
    email: "Rahul@support.com"
}

//now we will pass this object in our function call
// const result = createUser(newUser); // this is not showing error.
// console.log(result);


// function return object
function createCourse(): {}{
    return {}
}

//special syntax must retun object can be done by this
function createUserCourse(): {name: string, price: number}{
    return {name: "Nextjs", price: 50000}
}
console.log(createUserCourse());
 


// Type aliases
// type User = {
//     name: string,
//     email: string,
//     isPaid: boolean
// }

// //now lets create function >>> pssing user of type User
// // function createUser(user: User) {}
// createUser({name: "Sahil", email: "", isPaid: true});

// //return type is also User.
// function createUser(user: User): User {
//     return {name: user.name, email: user.email, isPaid: user.isPaid}
// }
// console.log(createUser({name: "Robin", email: "Robin@demon.com", isPaid: true}));


//readonly and optional
type User = {
    readonly _id: string // after putting readonly the no one chnage the value _id it will be rreadonly.  real example to store this in mongoDB database.
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number // this ? is optional if we cannot pass this values then it will not give error.
}

//creating a user of type User
let myUser: User = {
    _id : "42552",
    name : "Sahil",
    email: "Sahil@dev.com",
    isActive: false,
}
//changing myUser values after defining
// myUser._id = "72372" // we cannot re-assign as _id is readonly
myUser.email = "Sahil@gmail.com";
// myUser.creditCardDetails = 737;

//combining 2 type
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

//here combinig two types >>> definig new type with combination of 2 previous types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let details: cardDetails = {
    cardNumber: "FGTYWN527282",
    cardDate: "24/01/2039",
    cvv: 456
}
console.log(details);





export {}