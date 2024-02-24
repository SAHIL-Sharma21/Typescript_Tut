// here we willl write our TypeScript code.
// here we will write our production ts code.

// now writing our ts file and checking
console.log("TypeScript is here!!");
//tsc -w  command to run the ts file and in watch mode an keep track of it whenever there is change in our ts file.

console.log("Typescript is again good!!");

let userName: string;
userName = "Sahil sharma";
console.log(userName);

let userList: number[] = [24, 67, 78, 12, 55];
 userList.forEach((num) => console.log(num));

 const newList: number[] = userList.map((num) => (num * 3));
 console.log(newList);
 