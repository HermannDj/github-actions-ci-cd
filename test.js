const greet = require('./index');

console.log("Running tests ...");

if (greet() === "Hello, World!") {
    console.log("Test passed!");
    Process.exit(0);
} else {
    console.log("Test failed");
    process.exit(1)
}

