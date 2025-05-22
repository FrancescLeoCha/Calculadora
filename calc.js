function addnum(num) {
    let display = document.getElementById("display");
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function calcular() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}

function borrarPantalla() {
    display.textContent = "0";
}