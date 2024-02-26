"use strict";
// here we are going to lear about  abstract class 
// creating class of takePhoto
// from abstract class we cannot create the object 
// in abstract classes they are exactly as blueprints we cannot create the objects from it
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // defining one method
    getReelsTime() {
        // some complex calculations
        return 30;
    }
}
//making object from above class
// const hobby = new TakePhoto("Test", "Osolo");// here we cannot create the object as the TakePhoto is as abstract class
//suppose we have to use above class in some other class
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // if we want to use constructor like this then we have to use super function in which we have to pass all the required value.
        super(cameraMode, filter); // common syntax >> we have passed required value.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // we have implement getSepia method 
    getSepia() {
        console.log("Get sepia function called.");
    }
}
//1st differnece --->> but we can create the object from Instagram class which is extending TakePhoto class
const hobby = new Instagram("Test", "Osolo", 20);
// console.log(hobby.getReelsTime());
