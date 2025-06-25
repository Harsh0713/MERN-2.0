let i=0;

//FOR LOOP
for(i=1; i<=5; i++){
    console.log(i);
}

let subjects = ["CS", "DBMS", "OS", "SE", 'Cloud computing'];
// for(let j=0; j<subjects.length;j++){
//     let k=subjects[j];
//     console.log("Subject name: "+k);
// }

//FOR EACH LOOP
// subjects.forEach(element => {
//     console.log("My subjects "+element);
// });


//FOR OF
for(element of subjects){
    console.log("The subjects "+element);
}

let employee={
    name: "Harsh",
    age: 22,
    salary: 50000,
    relocate: true,
}

for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`)
}

let n=100;
// while(n<5){
//     console.log("n is less than 5");
//     i++;
// }

//DO-WHILE

do{
    console.log(`${n} is less than 5`);
}while(n<5);

