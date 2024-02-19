//here we are learning how to define variables in ts.
// Syntax:: let variableName : Type = value 
//here Type is datatype. this is how we define variables in ts


//let have a string as a datatype.
let myName: string = "Hello, Sahil";
console.log(myName);

const word: string =  myName.charAt(2);
console.log(word);


//let have number as a datatrype
let myage: number;
myage = 24;
console.log(myage);

//number
let userId: number = 321145;
let user_id: number = 234.564;

//Type inference -- this is the good pratice in ts
let user_ID_1 = 4563;
user_ID_1.toFixed();




// boolean
let isLogggedIn: boolean = true;

// Any datatype
//TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// let hero;
// function getHero(){
//     return "Spiderman"
// }
// hero = getHero();
//above hero is inferred as any and we dont want this in ts otherwise there is no point in using ts
// so avoid this we can give particular datatype to variables
let hero: string;
function getHero(){
    return "Spiderman"
}
hero = getHero(); //now our hero variable always accept string datatype not the other datatype.
console.log(hero);



export  {}; //temporary solution for removing the error.