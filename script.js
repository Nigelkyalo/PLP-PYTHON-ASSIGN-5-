const birthYear = 2001;
console.log('I was born in '+ birthYear);
function greet() {
    console.log('Hello, world!');
}

const goodbye = () => {
    console.log('Goodbye, world!');
}   
greet();
goodbye();

function changetext() {
    let title = document.getElementById('title');
    title.textContent = "JavaScript Basics - Updated"
    title.style.color = "blue";
    newDiv . textContent = "This is a new div added by JavaScript.";
    document.body.appendChild(newDiv);
}