const savedCount= localStorage.getItem("myCount");
let count= savedCount ? Number(savedCount) : 0;

// 1. GRAB THE ELEMENTS (The things we need to change)
const Display = document.getElementById("display");
const PosBtn = document.getElementById("pos-btn");
const NegBtn = document.getElementById("neg-btn");
const stepInput = document.getElementById("step-input");


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

    // Fourth, save the new number in localStorage
    localStorage.setItem("myCount", count);
}

render(); // Run the render function once at the start to show the initial state

// 4. THE ACTIONS (The buttons)
function plus() {
    if (count >= 100){
        count = 100;
    }else{
    const step= Number(stepInput.value);
    count+= step;
    render();
    }
}

function minus() {
    if (count <= -100){
        count = -100;
    }else{
    const step= Number(stepInput.value);
    count-= step;
    render();
    }
}