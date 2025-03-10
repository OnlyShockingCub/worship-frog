const timeText = document.getElementById('time-text');
let seconds = 0;
const frogContainer = document.body;

setInterval(() => {
    seconds++;
    timeText.textContent = `${seconds}`;
}, 1000);

function getRandomPosition() {
    const screenWidth = window.innerWidth;
    const randomX = Math.random() * screenWidth;
    return { x: randomX, y: -100 };
}

function createFallingFrog() {
    const frog = document.createElement('img');
    frog.src = 'cute_frog.jpg';
    frog.classList.add('falling-frog');
    
    const position = getRandomPosition();
    frog.style.left = `${position.x}px`;
    frog.style.top = `${position.y}px`;
    
    frogContainer.appendChild(frog);
    
    setTimeout(() => {
        frog.style.top = `${window.innerHeight}px`;
    }, 0);
    
    setTimeout(() => {
        frog.remove(); 
    }, 4000);
}

setInterval(createFallingFrog, 1000);

const toggleButton = document.getElementById("toggle-cursor");
const body = document.body;

let isCursorEnabled = true;

function toggleCursor() {
    if (isCursorEnabled) {
        body.style.cursor = 'auto';
    } else {
        body.style.cursor = 'url("hand-pointer.svg") 16 16, auto';
    }
    isCursorEnabled = !isCursorEnabled;
}

toggleButton.addEventListener("click", toggleCursor);
