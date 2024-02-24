const speedCount = document.getElementsByClassName("speed_actual")[0];
const gasMeter = document.getElementsByClassName("gas")[0];

updateGauges = (speed, gas) => {
    if (speedCount) {
        speedCount.innerHTML = speed;
    }

    if (gasMeter) {
        gasMeter.style.width = gas + "%";
    }
};

// 1.....
hideZeroOne = () => {
    document.getElementById("z1").style.display = "none";
};

showZeroOne = () => {
    document.getElementById("z1").style.display = "block";
};

// 2.....
hideZeroTwo = () => {
    document.getElementById("z2").style.display = "none";
};

showZeroTwo = () => {
    document.getElementById("z2").style.display = "block";
};

//.....
hideSpeedometer = () => {
    document.getElementsByTagName("body")[0].style.display = "none";
};

showSpeedometer = () => {
    document.getElementsByTagName("body")[0].style.display = "block";
};