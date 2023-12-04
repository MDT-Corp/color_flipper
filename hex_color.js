const colors = ["#ca69ca", "#6969ca", "#69ca79", "#a0ca69", "#ca6969", "#69caad", "#c0ca69", "#caa369"];

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