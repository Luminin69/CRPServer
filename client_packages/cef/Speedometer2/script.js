/**SPEEDOMETER #2
 * mp.browsers.new(); creates a new browser window.
 * 'speedometer' variable is used to interact with the browser window.
*/
let Speedometer2 = mp.browsers.new("package://cef/Speedometer2/index.html");
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
            Speedometer2.execute("showSpeedometer();");
            showed = true;
        }

        let velocity = (player.vehicle.getSpeed() * 2.23694).toFixed(0); //KMH 3.6 >> MPH 2.23694 For use when customization update is being pushed.
        if (velocity > 9) {
            Speedometer2.execute("hideZeroOne();")
        } else {
            Speedometer2.execute("showZeroOne();")
        }

        if (velocity > 99) {
            Speedometer2.execute("hideZeroTwo();")
        } else {
            Speedometer2.execute("showZeroTwo();")
        }

        let gas = player.vehicle.getPetrolTankHealth() < 0 ? 0: player.vehicle.getPetrolTankHealth() / 10;
        Speedometer2.execute(`updateGauges(${velocity}, ${gas});`);


        } else if (showed) {
        Speedometer2.execute("hideSpeedometer();");
        showed = false;
    }
});
