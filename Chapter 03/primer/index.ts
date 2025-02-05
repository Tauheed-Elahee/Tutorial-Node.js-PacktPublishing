function sum(first: number, second: number | string) {
    return first + (second as any);
}

let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);


let condition: boolean = true;
let person: String = "Bob";
const age: number = 40;