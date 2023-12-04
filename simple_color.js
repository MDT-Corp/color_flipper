const colors = ["red", "blue", "green", "yellow", "pink", "orange", "white", "purple"];

let currentColor = [0];

const body = document.body;

const colorBtn = document.getElementById("button");

const text = document.getElementById("textColor");

colorBtn.addEventListener("click", () => {
    currentColor = (currentColor + 1) % colors.length;
    body.style.backgroundColor = colors[currentColor];
    
    text.style.color = colors[currentColor];
    text.innerHTML = colors[currentColor];
})