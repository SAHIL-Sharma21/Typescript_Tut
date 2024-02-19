"use strict";
//here we are learning how to define variables in ts.
// Syntax:: let variableName : Type = value 
//here Type is datatype. this is how we define variables in ts
Object.defineProperty(exports, "__esModule", { value: true });
//let have a string as a datatype.
var myName = "Hello, Sahil";
console.log(myName);
var word = myName.charAt(2);
console.log(word);
//let have number as a datatrype
var myage;
myage = 24;
console.log(myage);
//number
var userId = 321145;
var user_id = 234.564;
//Type inference -- this is the good pratice in ts
var user_ID_1 = 4563;
user_ID_1.toFixed();
// boolean
var isLogggedIn = true;
// Any datatype
// let hero;
// function getHero(){
//     return "Spiderman"
// }
// hero = getHero();
//above hero is inferred as any and we dont want this in ts otherwise there is no point in using ts
// so avoid this we can give particular datatype to variables
var hero;
function getHero() {
    return "Spiderman";
}
hero = getHero(); //now our hero variable always accept string datatype not the other datatype.
console.log(hero);
