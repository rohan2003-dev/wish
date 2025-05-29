// script.js
document.getElementById("wishButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    const music = document.getElementById("bgMusic");
    message.classList.remove("hidden");
    music.play();

    for (let i = 0; i < 20; i++) {
        createFloatingElement("balloon");
        createFloatingElement("heart");
    }
});

function createFloatingElement(type) {
    const element = document.createElement("div");
    element.classList.add(type);

    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDuration = (Math.random() * 2 + 4) + "s";

    if (type === "balloon") {
        document.getElementById("balloons").appendChild(element);
    } else {
        document.getElementById("hearts").appendChild(element);
    }

    setTimeout(() => {
        element.remove();
    }, 7000);
}