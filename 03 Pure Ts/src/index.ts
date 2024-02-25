// here we willl write our TypeScript code.
// here we will write our production ts code.

// now writing our ts file and checking
// console.log("TypeScript is here!!");
//tsc -w  command to run the ts file and in watch mode an keep track of it whenever there is change in our ts file.

// console.log("Typescript is again good!!");

let userName: string;
userName = "Sahil sharma";
// console.log(userName);

let userList: number[] = [24, 67, 78, 12, 55];
 userList.forEach((num) => console.log(num));

 const newList: number[] = userList.map((num) => (num * 3));
//  console.log(newList);
 
 //classes in Ts
 //this is how we define the classes in Ts
 class User {
    //make sure that Ts ia aware of email and name in advance this is the right syntaxx..
    email: string
    name: string
    readonly city: string = "delhi" //just giving initiator so that it will not give error, we are not using it in our constructor function
    //making private one of the property: we can only access private property in class only but cannot access it outside
    private income:  string= "3.0cr" //there is no such thing in js world it has #income as aan examlem in js.

    //making public property in class
    public status: boolean;
    constructor(email: string, name: string){
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

    readonly ticketId: string = "XYWI_HHWNNSAQWUI_NMSJ12327829"
    constructor(
        public ticketNumber: number, 
        public ticketIssueDate: string,
        private ticketOwner: string
        ){
    }
 }