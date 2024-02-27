// here we are going to learn about type narrowing
//problem
//problem comes when there is number array below is the solution by using typeof
function dectectType(val: string | number) {
    if(typeof val === "string"){
        val.toLowerCase();
        return val;
    } 
    return val + 3 
}

//another function
function provideId(id: string | null){
    if(!id){
        console.log("Please provide Id");
        return
    }
    id.toLowerCase();
}


// another example with string | Array | null
function printStr(str: string | string[] | null) {
    //if string is present then str is not null
    if(str){
        if(typeof str === "object"){
            for(const s of str) {
                console.log(s);
            }
        } else if (typeof str === "string"){
            console.log(str);
        }
    }
}