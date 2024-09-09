function bulblight1() {
    let bulbswitch1 = document.getElementById("bulbswitch1");
    let bulbimg1 = document.getElementById("bulbimg1");
    let bulbon1 = document.getElementById("bulbon1");

    if (bulbswitch1.checked === true) {
        bulbimg1.style.display = "none";
        bulbon1.style.display = "block";
    } else {
        bulbimg1.style.display = "block";
        bulbon1.style.display = "none";
    }
}