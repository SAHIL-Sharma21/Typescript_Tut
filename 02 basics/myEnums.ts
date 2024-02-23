// here we are going to learn about Enums in typescript.
// setting up enums to gives choices

// this enum after hovering we are seeing count from 0 but we can change it
enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

// now declaring varibale
const sahilSeat = seatChoice.WINDOW; // simple and clean code by using enums

//assigning/changing the count
enum streamChoice {
    SCIENCE = 10,
    COMMERCE, // now automatically commerce have a count of 11 after hovering.
    ARTS
}

// another way is to put value
enum seatChoice2 {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = 0
}

//NOTE: This enums ain ts are converted to IIFE in js >>> can be asked in interview.
// if we dont want to much code in js then we can use const keyword in frontof enum decleration
const enum seatChoice3 {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH = 0
}
console.log(seatChoice3.WINDOW);
 

export {}