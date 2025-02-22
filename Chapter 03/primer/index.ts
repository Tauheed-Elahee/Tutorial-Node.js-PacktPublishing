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

let myArray: any[] = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;