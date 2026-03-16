const Display = document.getElementById("display");
const PosBtn = document.getElementById("pos-btn");
const NegBtn = document.getElementById("neg-btn");
// 2. STATE (The data)
let count = 0;

// 3. THE "BRAINS" (This runs every time the number changes)
function render() {
    // First, tell the number what to say
    Display.textContent = count;

    // Second, clear out any old colors so we start fresh
    Display.classList.remove("text-black", "text-red-600", "text-green-600");

    // Third, pick the new color based on the number
    if (count > 0) {
        Display.classList.add("text-green-600");
    } else if (count < 0) {
        Display.classList.add("text-red-600");
    } else {
        Display.classList.add("text-black");
    }
}

// 4. THE ACTIONS (The buttons)
function plus() {
    count++;
    render();
}

function minus() {
    count--;
    render();
}