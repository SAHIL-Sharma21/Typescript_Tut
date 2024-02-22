// HERE we are going to see about union types.
// Union is a combination of 2 or 3 or more types of data that we can include in a variable, Array and etc...
//union types eg:
var score = 45; // now score can be number or string
score = "4563"; //we are assigning string to score.
console.log(score);
// defining the variable
var sahilSharma = {
    name: "Sahil Sharma",
    id: 34
};
console.log(sahilSharma);
//if we want to change sahil to Admin
sahilSharma = {
    username: "Sahil_Admin",
    id: 34
};
console.log(sahilSharma);
// union types in functions
// function getDbId(id: number | string){
//     // business code for for getting id
//     console.log(id);
// }
// getDbId(23); //number
// getDbId("56"); //String
//now making more efficient code
function getDbId(id) {
    //Business logic
    //checking if id is string then convrting id to lowerCase
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id += 2; // adding 2 to existing id
    }
    return id;
}
console.log(getDbId(4));
console.log(getDbId("DEQ_JSJNE_ASSDA"));
