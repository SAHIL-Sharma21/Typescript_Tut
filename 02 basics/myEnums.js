"use strict";
// here we are going to learn about Enums in typescript.
// setting up enums to gives choices
Object.defineProperty(exports, "__esModule", { value: true });
// this enum after hovering we are seeing count from 0 but we can change it
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
})(seatChoice || (seatChoice = {}));
// now declaring varibale
var sahilSeat = seatChoice.WINDOW; // simple and clean code by using enums
//assigning/changing the count
var streamChoice;
(function (streamChoice) {
    streamChoice[streamChoice["SCIENCE"] = 10] = "SCIENCE";
    streamChoice[streamChoice["COMMERCE"] = 11] = "COMMERCE";
    streamChoice[streamChoice["ARTS"] = 12] = "ARTS";
})(streamChoice || (streamChoice = {}));
// another way is to put value
var seatChoice2;
(function (seatChoice2) {
    seatChoice2["AISLE"] = "aisle";
    seatChoice2["MIDDLE"] = "middle";
    seatChoice2["WINDOW"] = "window";
    seatChoice2[seatChoice2["FOURTH"] = 0] = "FOURTH";
})(seatChoice2 || (seatChoice2 = {}));
console.log(4 /* seatChoice3.WINDOW */);
