// here we are again going to learn about interface from ios world into typescript world
// console.log("second ts file");
// wrting protocol to take photo

interface TakePhoto1 {
    cameraMode: string
    filter: string
    burst: number
}

//another intrface which has method in it
interface Story {
    createStory(): string, //createStory is a method which return string.
}

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
class Youtube implements TakePhoto1, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string, // ading extra field but not throwing error here.
    ){}

    createStory(): string {
        return `The story is created and in your drafts`;
    }
}