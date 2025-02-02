function sum (first, second) {
    return first + second;
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);