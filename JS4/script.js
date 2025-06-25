let myVar = 34;
let myVar2 = "String";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

//OBJECTS - STORES KEY/VALUE PAIR
let employee ={
    name: "Harsh",
    Salary: 50000,
    YOE: 0,
    "Able to relocate": true,
}
console.log(employee);
console.log(employee["Salary"])
console.log(employee.YOE)

//ARRAYS
let subjects = ["CN","DBMS","DSA","PM","OS","SE"];
console.log(subjects);
console.log(subjects[2]);

let subjs = new Array(1,8,3,7,5,undefined,null);
console.log(subjs.length);
subjs.push("This is harsh");
console.log(subjs);
console.log(subjs.sort());






