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