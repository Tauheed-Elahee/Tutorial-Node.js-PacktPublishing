function sum (first, second) {
    if (typeof first == "number" && typeof second == "number") {
        return first + second;
    }
    throw Error("Expected two numbers");
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);