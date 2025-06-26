greet=()=>{
    console.log("Hello good evening")
}

greet();

setTimeout(()=>{
    // console.log("We are inside setTimeout")
    // alert("This is an alert")
},3000)

// let sum=(a,b)=>{
//     return a+b;
// }

let sum=(a,b)=>a+b;

let add=sum(2,3);
console.log(add)

let half=a=>a/2;

let halfof=half(8);
console.log(halfof);

let obj={
    names : ['CN',"DBMS", "SE"],
    speak(){
        //This obj is active at that point of time
        this.names.forEach((subjects)=>{
            console.log("Our subjects "+subjects)
        })
    }
}
obj.speak();