// here we are again going to learn about interface from ios world into typescript world
// console.log("second ts file");
// wrting protocol to take photo

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

// making class of Instagram which implements this protocaol
class Instagram implements TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// another class for youtube >> we can add more fields as it is not in interface
class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string, // ading extra field but not throwing error here.
    ){}
}