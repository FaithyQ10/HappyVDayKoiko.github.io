// Elements
const envelope = document.getElementById("envelope-container");
const windowContainer = document.getElementById("window-container");
const noBtn = document.querySelector(".no-btn");
const YesBtn = document.querySelector(".btn[alt='Yes']");
const loveBtn = document.getElementById("love-button");
const letterContainer = document.getElementById("letter-container");

const title = document.getElementById("window-title");
const koishi = document.getElementById("touhou-pic");
const buttons = document.getElementById("window-buttons");
const winfin = document.getElementById("window-final-text");

// Open envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    windowContainer.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".window").classList.add("open");
    }, 50);
});

// No button moves randomly

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked
YesBtn.addEventListener("click", () => {
    title.textContent = "Yippie! I love you!!! ♡";

    koishi.src = "koishidance.gif";

    buttons.style.display = "none";
    loveBtn.style.display = "block";
});

// Open final love letter
loveBtn.addEventListener("click", () => {

    // hide the whole valentine window scene
    windowContainer.style.display = "none";

    // show the letter scene
    letterContainer.style.display = "flex";

    // optional: little animation
    setTimeout(() => {
        document.querySelector(".letter").classList.add("open");
    }, 50);
});


