let age=10;

//decide a person can vote or not

if(age<18){
    console.log("You cannot vote");
}

else if(age<12){
    console.log("Age is too less")
}
else{
    console.log("You can vote");
}


//USE OF THE SWITCH CASE

let cups = 20;
switch (cups) {
    case 4:
        console.log("value of cups is 4")
        
        break;
        case 41:
            console.log("This value of cups is 41");

        break;

        case 42:
            console.log("The value of cups is 42");
        break;

    default:
        console.log("Unable to find numbers of cups");
        break;
}