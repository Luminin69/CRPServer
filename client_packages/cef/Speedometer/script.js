/**SPEEDOMETER
 * mp.browsers.new(); creates a new browser window.
 * 'speedometer' variable is used to interact with the browser window.
*/
let Speedometer = mp.browsers.new("package://cef/Speedometer/index.html");
let player = mp.players.local;
let showed = false;

/**
 * The render event is listened for by
 * the browser window, which emitts the browser every frame.
 * The function then checks IF the player is in the vehicle and is the driver, if True
 * then the speedometer is shown, else if false (does not show).
 */
mp.events.add("render", () => {
    if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) {
        if (!showed) {
            Speedometer.execute("showSpeedometer();");
            showed = true;
        }

        // Calculates speed of vehicle and adjust on the dash in KM/H
        let velocity = (player.vehicle.getSpeed() * 3.6).toFixed(0);

        // Calculates gas amount and adjusts it on the dash
        let gas = player.vehicle.getPetrolTankHealth() < 0 ? 0 : player.vehicle.getPetrolTankHealth() / 10;

        // Gas usage (Currently doesn't work [Tested])

        // Executes both gas and velocity variables
        Speedometer.execute(`updateGauges(${velocity}, ${gas});`);
         
    } else if (showed) {
        Speedometer.execute("hideSpeedometer();");
        showed = false;
    }
});