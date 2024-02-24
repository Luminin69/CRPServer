const speedCount = document.getElementsByClassName("speed-count")[0];
const speedMeter = document.getElementsByClassName("speed-meter")[0];
const gasMeter = document.getElementsByClassName("gas-meter")[0];

updateGauges = (speed, gas) => {
    if (speedCount) {
        speedCount.innerHTML = speed;
    }
    if (speedMeter) {
        speedMeter.style.width = speed + "%";
    }
    if (gasMeter) {
        gasMeter.style.width = gas + "%";
    }
};

hideSpeedometer = () => {
    document.getElementsByTagName("body")[0].style.display = "none";
};

showSpeedometer = () => {
    document.getElementsByTagName("body")[0].style.display = "block";
};