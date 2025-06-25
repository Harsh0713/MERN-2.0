//SET TIMEOUT --> It allows us to run the function after the interval of the time

function greet(msg,msg2){
    console.log("Hello! Everyone"+msg+msg2)
}

// let timeOut = setTimeout(greet,10000, " Welcome"+" to the course");
// console.log(timeOut);
// clearTimeout(timeOut);

// //SET INTERVAL --> Allows us to run a function repeatedly after the interval of a time

// let IntervalId = setInterval(greet,3000, "welcome" , "to the course")
// clearInterval(IntervalId); 

function displayTime(){
    let time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);

