var fan1Rotation = 0;

function fanrotate1() {
    var fan = document.getElementById('fan1')
    fan1Rotation++;
    if (fan1Rotation%2===1) {
        fan.classList.add('fan-rotate');
    }
    else {
        fan.classList.remove('fan-rotate');
    }
}