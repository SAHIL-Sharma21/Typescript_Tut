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
type User = {
    name: string,
    email: string,
    isPaid: boolean
}

//now lets create function >>> pssing user of type User
// function createUser(user: User) {}
createUser({name: "Sahil", email: "", isPaid: true});

//return type is also User.
function createUser(user: User): User {
    return {name: user.name, email: user.email, isPaid: user.isPaid}
}
console.log(createUser({name: "Robin", email: "Robin@demon.com", isPaid: true}));




export {}