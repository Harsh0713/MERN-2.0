let jsonObj={
    name: "Harsh",
    company: "XYZ",
    location: "Mumbai",
    YOE: 3,
    Relocate: true,
}

console.log(jsonObj);

let jsonStr = JSON.stringify(jsonObj)
console.log(jsonStr)


//Replacing in JSON
jsonStr = jsonStr.replace("Mumbai", "Pune")
console.log(jsonStr)

newJson = JSON.parse(jsonStr);
console.log(newJson);