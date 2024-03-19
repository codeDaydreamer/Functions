// Define a function to say hello
function sayHello() {
    var message = "Hello, World!";
    document.getElementById("output").innerHTML = message;
}

// Define a function to calculate the square of a number
function square(num) {
    return num * num;
}

// Define a function to display the square of a number
function displaySquare() {
    var inputNumber = parseInt(prompt("Enter a number to square:"));
    var result = square(inputNumber);
    document.getElementById("squareOutput").innerHTML = "The square of " + inputNumber + " is " + result;
}

// Define a function to calculate the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Define a function to display the sum of two numbers
function displaySum() {
    var num1 = parseInt(prompt("Enter the first number:"));
    var num2 = parseInt(prompt("Enter the second number:"));
    var result = sum(num1, num2);
    document.getElementById("sumOutput").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result;
}
