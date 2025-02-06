// Typing Effect for Heading
const text = "Welcome to SafetySphere – Your Cyber Safety Hub";
let index = 0;

function typeEffect() {
    document.getElementById("typing-text").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

