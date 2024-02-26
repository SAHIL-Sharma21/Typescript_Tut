"use strict";
// here we are again going to learn about interface from ios world into typescript world
// console.log("second ts file");
// wrting protocol to take photo
// making class of Instagram which implements this protocaol
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// another class for youtube >> we can add more fields as it is not in interface
class Youtube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
}
