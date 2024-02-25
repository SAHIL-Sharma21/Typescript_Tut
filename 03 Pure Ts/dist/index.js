"use strict";
// here we willl write our TypeScript code.
// here we will write our production ts code.
// now writing our ts file and checking
// console.log("TypeScript is here!!");
//tsc -w  command to run the ts file and in watch mode an keep track of it whenever there is change in our ts file.
// console.log("Typescript is again good!!");
let userName;
userName = "Sahil sharma";
// console.log(userName);
let userList = [24, 67, 78, 12, 55];
userList.forEach((num) => console.log(num));
const newList = userList.map((num) => (num * 3));
//  console.log(newList);
//classes in Ts
//this is how we define the classes in Ts
class User {
    constructor(email, name) {
        this.city = "delhi"; //just giving initiator so that it will not give error, we are not using it in our constructor function
        //making private one of the property: we can only access private property in class only but cannot access it outside
        this.income = "3.0cr"; //there is no such thing in js world it has #income as aan examlem in js.
        this.email = email;
        this.name = name;
        this.income; // here we are accessing private property
        this.status = true;
    }
}
// creating object from our User class
const sahil = new User("sahiil@gmaail.com", "Sahil");
//  sahil.city = "delhi";
console.log(sahil.city);
console.log(sahil.name);
console.log(sahil.status);
// how classes are writen by profesinal devloper
class Ticket {
    constructor(ticketNumber, ticketIssueDate, ticketOwner) {
        this.ticketNumber = ticketNumber;
        this.ticketIssueDate = ticketIssueDate;
        this.ticketOwner = ticketOwner;
        // getter amd seter so below is the exmaple
        this._ticketValue = 1; //making private proerty of ticketValue and we are going to define getter and setter for this property.
        this.ticketId = "XYWI_HHWNNSAQWUI_NMSJ12327829";
    }
    //private method in Ticket Class
    deleteTicket() {
        console.log("ticket is deleted!");
    }
    //getter and setter
    //getter
    get getTicketNumber() {
        return `ticket number ${this.ticketNumber}`;
    }
    //getter amd setter for this property
    get ticketCount() {
        return this._ticketValue;
    }
    // making setter and interview question arrives >> setter does not have a retuen type
    set ticketCount(ticketNumber) {
        if (ticketNumber <= 1) {
            throw new Error("ticket number should be greater than 1");
        }
        this._ticketValue = ticketNumber; // setting ticketValue to ticketNumber
    }
}
const newTicket = new Ticket(45, "25/02/2024", "Sahil");
// newTicket.deleteTicket(); cannot access as methos is private.
console.log(newTicket.getTicketNumber);
