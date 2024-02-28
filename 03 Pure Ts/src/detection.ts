// here we are going to learn about type narrowing
//problem
//problem comes when there is number array below is the solution by using typeof
function dectectType(val: string | number) {
    if(typeof val === "string"){
        val.toLowerCase();
        return val;
    } 
    return val + 3 
}

//another function
function provideId(id: string | null){
    if(!id){
        console.log("Please provide Id");
        return
    }
    id.toLowerCase();
}


// another example with string | Array | null
function printStr(str: string | string[] | null) {
    //if string is present then str is not null
    if(str){
        if(typeof str === "object"){
            for(const s of str) {
                console.log(s);
            }
        } else if (typeof str === "string"){
            console.log(str);
        }
    }
}

// The in operator narrowing
interface User {
    email: string,
    name: string
}

interface Admin {
    email: string,
    name: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    //checking if isAdmin in account then return account.isAdmin.
    if("isAdmin" in account) {
        return account.isAdmin;
    }
}

// Date is created by Date object with the new keyword
// instance of narrowing
//instance of is only used when ther is new keyword so this I have to remember....
function logValue(x: Date | string){
    if( x instanceof Date) {
        console.log(x.toUTCString);
    } else {
        console.log(x.toLowerCase());
    }
}

// type predicate

//making type
type Fish = {swim: () => void};
type Bird  = {fly: () => void};

// using type predicate
function isFish(pet: Fish | Bird): pet is Fish {
    //in documentaion example they have typecasted pet as fish, so we are going to do the same
    return (pet as Fish).swim !== undefined;
}

//implemting our example
function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Foood";
    } else {
        pet
        return "Bird Food";
    }
}