"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
let condition = true;
let person = "Bob";
const age = 40;
let place;
console.log("Place Value: " + place + " Type: " + typeof (place));
place = "London";
console.log("Place: " + place + " Type: " + typeof (place));
place = null;
console.log("Place: " + place + " Type: " + typeof (place));
let firstBool = true;
let secondBool = false;
let firstString = "This is a string";
let secondString = 'And so is this';
console.log(`Place: ${place} Type${typeof (place)}`);
let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;
let person1 = "Alice";
let person2 = "Bob";
let firstName = "Adam";
if (firstName == "Adam") {
    console.log("firstName is Adam");
}
else if (firstName == "Jacqui") {
    console.log("firstName is Jacqui");
}
else {
    console.log("firstName is neither Adam or Jacqui");
}
switch (firstName) {
    case "Adam":
        console.log("firstName is Adam");
        break;
    case "Jacqui":
        console.log("firstName is Jacqui");
        break;
    default:
        console.log("firstName is neither Adam or Jacqui");
        break;
}
let firstVal = 5;
let secondVal = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
if (firstVal === secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
let val1;
let val2 = "London";
let val3 = 0;
let coalesced1 = val1 ?? "fallback value";
let coalesced2 = val2 ?? "fallback value";
let coalesced3 = val3 ?? 100;
console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);
let count = 100;
if (count != null && count != undefined) {
    let result1 = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}
let result2 = count?.toFixed(2);
console.log(`Result 2: ${result2}`);
function writeValueExtra(val = "default value", ...extraInfo) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`);
}
writeValueExtra("London", "Raining", "Cold");
writeValueExtra("Paris", "Sunny");
writeValueExtra("New York");
writeValueExtra();
function composeString(val) {
    return `Compose string: ${val}`;
}
function writeValue(val) {
    console.log(composeString(val ?? "Fallback value"));
}
writeValue("London");
writeValue();
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
writeCity(() => "Paris");
let myCity = "Rome";
writeCity(() => myCity);
let myArray = [100, "Adam", true];
// myArray[0] = 100;
// myArray[1] = "Adam";
// myArray[2] = true;
let val = myArray[0];
console.log(`Value: ${val}`);
myArray[0] = "Tuesday";
val = myArray[0];
console.log(`Value: ${val}`);
for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach((value, index) => console.log("Index " + index + ": " + value));
console.log("---");
let otherArray = [...myArray, 200, "Bob", false];
otherArray.forEach((value, index) => console.log("Index " + index + ": " + value));
/* Define Objects using literal syntax
let hat = {
    name: "Hat",
    price: 100
};
let boots = {
    name: "Boots",
    price: 100,
    category: "Snow Gear"
};
*/
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    name;
    price;
    category;
}
let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
function printDetails(product) {
    if (product.category != undefined) {
        console.log(`Name: ${product.name}, Price: ${product.price}, ` + `Category: ${product.category}`);
    }
    else {
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}
printDetails(hat);
printDetails(boots);
