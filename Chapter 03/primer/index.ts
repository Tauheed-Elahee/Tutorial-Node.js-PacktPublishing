import { Name, WeatherLocation } from "./modules";

function sum(first: number, second: number | string) {
    return first + (second as any);
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);


let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

let place: string | undefined | null;
console.log("Place Value: " + place + " Type: " + typeof(place));
place = "London";
console.log("Place: " + place + " Type: " + typeof(place));
place = null;
console.log("Place: " + place + " Type: " + typeof(place));

let firstBool = true;
let secondBool = false;

let firstString = "This is a string";
let secondString = 'And so is this';

console.log(`Place: ${place} Type${typeof(place)}`);

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

let person1 = "Alice";
let person2: string | undefined = "Bob";

let firstName = "Adam";
if (firstName == "Adam") {
    console.log("firstName is Adam");
} else if (firstName == "Jacqui") {
    console.log("firstName is Jacqui");
} else {
    console.log("firstName is neither Adam or Jacqui");
}
switch(firstName) {
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

let firstVal: any = 5;
let secondVal: any = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
} else {
    console.log("They are NOT the same");
}
if (firstVal === secondVal) {
    console.log("They are the same");
} else {
    console.log("They are NOT the same");
}

let val1: string | undefined;
let val2: string | undefined = "London";
let val3: number | undefined = 0;
let coalesced1 = val1 ?? "fallback value";
let coalesced2 = val2 ?? "fallback value";
let coalesced3 = val3 ?? 100;
console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);

let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}
let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2}`);

function writeValueExtra(val: string = "default value", ...extraInfo: string[]) {
  console.log(`Value: ${val}, Extras: ${extraInfo}`);
}
writeValueExtra("London", "Raining", "Cold");
writeValueExtra("Paris", "Sunny")
writeValueExtra("New York");
writeValueExtra();

function composeString(val: string): string {
    return `Compose string: ${val}`;
}
function writeValue(val?: string) {
    console.log(composeString(val ?? "Fallback value"));
}
writeValue("London");
writeValue();

function getUKCapital(): string {
    return "London";
}
function writeCity(f: () => string) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
writeCity(() => "Paris");
let myCity = "Rome"
writeCity(() => myCity);

let myArray: (number | string | boolean)[] = [100, "Adam", true];
// myArray[0] = 100;
// myArray[1] = "Adam";
// myArray[2] = true;

let val = myArray[0];
console.log(`Value: ${val}`);
myArray[0] = "Tuesday";
val = myArray[0];
console.log(`Value: ${val}`);

for (let i  = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach((value, index) =>
    console.log("Index " + index + ": " + value));

console.log("---");
let otherArray = [...myArray, 200, "Bob", false];
otherArray.forEach((value, index) =>
    console.log("Index " + index + ": " + value));


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
    constructor(public name: string, public price: number, public category?: string) {}
    printDetails() {
        if (this.category != undefined){
            console.log(`Name: ${this.name}, Price: ${this.price}, ` + `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

class DiscountProduct extends Product {
    constructor(name: string, price: number, private discount: number) {
        super(name, price - discount);
    }
}

let hat = new Product("Hat", 100);
let hatDiscount = new DiscountProduct("Hat", 100, 10);
let boots = new Product("Boots", 100, "Snow Gear");

console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);

function printDetails(product: { name: string, price: number,category?: string }) {
    if (product.category != undefined){
        console.log(`Name: ${product.name}, Price: ${product.price}, ` + `Category: ${product.category}`);
    } else {
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}
printDetails(hat);
printDetails(boots);
console.log("---");
hat.printDetails();
boots.printDetails();
console.log("---");
hatDiscount.printDetails();
console.log("---");
console.log(`Discounted Hat is a Product? ${hatDiscount instanceof Product}`);
console.log(`Discounted Hat is a DiscountProduct? ${hatDiscount instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log(`Boots is a DiscountProduct? ${boots instanceof DiscountProduct}`);

let name = new Name("Tauheed", "Elahee");
let loc = new WeatherLocation("snowing", "Ottawa");
console.log(name.nameMessage);
console.log(loc.weatherMessage);