console.log('This is about Subjects')


function mySubjects(subjects){
    console.log(subjects+msg);
}



let subject = "CN";
let subject2 = "DBMS";
let subject3 = "SE";
let subject4 = "PYTHON";
let subject5 = "WEB DEV";
let msg = " : Hello this is Harsh"


mySubjects(subject, msg);
mySubjects(subject2, msg);
mySubjects(subject3, msg);
mySubjects(subject4, msg);
mySubjects(subject5, msg);

// console.log(subject + ": This is the subject");
// console.log(subject2 + ": This is the subject");
// console.log(subject3 + ": This is the subject");
// console.log(subject4 + ": This is the subject");
// console.log(subject5 + ": This is the subject");


//Returning a value

function harsh(a,b,c){
    let sum = a+b+c;
    return sum;
}

let harsh1 = harsh(3,6,9);
console.log(harsh1);

