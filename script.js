const messages = [
    "Te amo muchísimo, mi amor.",
    "Eres lo mejor que me ha pasado.",
    "Quiero tenerte cerca cada día de mi vida.",
    "No existe momento del día en el que no piense en ti.",
    "Estoy muy orgulloso de ti, eres mi más grande orgullo.",
    "Eres mi motivación para seguir adelante.",
    "Cada momento a tu lado lo atesoro en mi corazón.",
    "Quiero tenerte cerca siempre, eres mi todo.",
    "Te mereces todo lo lindo y hermoso de este mundo.",
    "Extraño mucho tenerte cerquita.",
    "Me hacen falta tus cálidos abracitos.",
    "Te adoro con todo mi corazón.",
    "Te quiero con cada partecita de mi ser.",
    "Amaría poder mimarte toda mi vida.",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left =  left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }

    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);