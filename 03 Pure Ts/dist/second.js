"use strict";
// here we are again going to learn about interface from ios world into typescript world
// console.log("second ts file");
// wrting protocol to take photo
// making class of Instagram which implements this protocaol
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }
// another class for youtube >> we can add more fields as it is not in interface
// what if Youtube want to have the Story interface, so we do it like this 
class Youtube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        return `The story is created and in your drafts`;
    }
}
