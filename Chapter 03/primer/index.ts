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