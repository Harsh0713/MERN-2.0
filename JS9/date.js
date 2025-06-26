let now = new Date();
console.log(now);

let dt = new Date(1000);
console.log(dt);


//Date - year, month, date, minute, seconds, milliseconds
let newdate = new Date("2024-09-29")
console.log(newdate);

newdate.setFullYear(2025);
newdate.setDate(15);
newdate.setMonth(2);
newdate.setHours(12);
newdate.setMinutes(30);

let time = newdate.getFullYear();
console.log(time)

let currentdate = newdate.getDate();
console.log(currentdate);

let currenthr = newdate.getHours();
console.log(currenthr);

let currentmin = newdate.getMinutes();
console.log(currentmin);




