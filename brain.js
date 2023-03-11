function appendToInput(value) {
    document.getElementById("input").value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
    document.getElementById("result").textContent = "";
}

function calculate() {
    const input = document.getElementById("input").value;
    const result = eval(input);
    document.getElementById("result").value = result;
}
