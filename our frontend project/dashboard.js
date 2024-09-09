const gaugeElement = document.querySelector(".gauge");
function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
        return;
    }
    gauge.querySelector(".gauge_fill").style.transform = `rotate(${value / 2}turn)`;
    gauge.querySelector(".gauge_cover").textContent = `${Math.round(value * 100)}%`;
}

setGaugeValue(gaugeElement, 0.8);





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



// let fanswitch1 = document.getElementById("fanswitch1");
// let fan1 = document.getElementById("fan1");

// let fanswitch2 = document.getElementById("fanswitch2");
// let fan2 = document.getElementById("fan2");

// let fanswitch3 = document.getElementById("fanswitch3");
// let fan3 = document.getElementById("fan3");

// let fanswitch4 = document.getElementById("fanswitch4");
// let fan4 = document.getElementById("fan4");


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
















function startTime() {
    let today = new Date();  // Get current date and time
    let day = today.getDate();  // Get day of the month (1-31)
    let month = today.getMonth() + 1;  // Get month (0-11), so we add 1 to match conventional month numbering
    let year = today.getFullYear();  // Get full year (e.g., 2024)
    let h = today.getHours();  // Get hour (0-23)
    let m = today.getMinutes();  // Get minute (0-59)
    let s = today.getSeconds();  // Get second (0-59)
    
    // Ensure minutes and seconds are two digits (e.g., 05 instead of 5)
    m = checkTime(m);
    s = checkTime(s);
    
    // Define options for formatting the time
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    
    // Format the time using the options defined above
    let timeString = today.toLocaleString('en-US', options);
    
    // Update the HTML elements with the current date and time
    document.getElementById('date').innerHTML = day + "/" + month + "/" + year;  // Update date element
    document.getElementById('time').innerHTML = timeString;  // Update time element
    
    // Schedule the next update of the time after 500 milliseconds
    let t = setTimeout(function() {
        startTime();
    }, 500);
}

// Function to add leading zero to numbers less than 10
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // If number is less than 10, prepend '0' to it
    return i;  // Return the updated number
}
