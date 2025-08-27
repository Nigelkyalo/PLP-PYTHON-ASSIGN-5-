const birthYear = 2002; 

console.log('I was born in ' + birthYear);

//Arithmetic (Mathematical) Operators +,-, /, *
console.log(10 +50);
console.log(10 * 50);
console.log(10 / 50);
console.log(20 % 6); // modulus

//comparison operators
console.log(5 == "5"); //true (loose comparison - value )
console.log(5 === "5"); //not true (strict - value and data type)

// Functions named block of code
/*
Declaring functions

1.function functionName(){
    statements
}


*/

function greet(){
    console.log('Hello world. This message is through a function')
}

greet();

// 2. function expression - store a function inside a variable

const hello = function(){
    console.log('Hi there! This is a message using a function expression.')
}

hello();

// 3. arrow function

const goodbye = () => console.log("Goodbye from an arrow function");

goodbye();

//parameters and return values

function multiply(numberOne, numberTwo, numberThree){
    return numberOne * numberTwo * numberThree;
}

console.log(multiply(2, 3, 10));
console.log(multiply(6, 3, 10));
console.log(multiply(5, 3, 10));
console.log(multiply(9, 3, 10));
console.log(multiply(9, 83, 10));


function changeText(){
    //changing an element
    let title = document.getElementById("title");
    title.textContent = "Hello Web Module Session One!"
    title.style.color = "red";
    //adding an element
    let newDiv = document.createElement("div");
    newDiv.textContent = "Hey! I was not here before!!!";
    document.body.appendChild(newDiv);
}