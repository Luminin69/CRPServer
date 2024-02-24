let street = mp.browsers.new("package://cef/StreetLoc/index.html");
let player = mp.players.local;

mp.events.add("render", () => {
    let getStreet = mp.game.pathfind.getStreetNameAtCoord(player.position.x, player.position.y, player.position.z, 0, 0);
    let streetName = mp.game.ui.getStreetNameFromHashKey(getStreet.streetName);
    let crossingName = mp.game.ui.getStreetNameFromHashKey(getStreet.crossingRoad);
    let crossing = crossingName ? ` | ${crossingName}` : "";
    let zoneName = mp.game.gxt.get(mp.game.zone.getNameOfZone(player.position.x, player.position.y, player.position.z));
    let dir = player.getHeading() < 45 || player.getHeading() > 315 ? "N" : 
    player.getHeading() > 45 && player.getHeading() < 135 ? "W" : 
    player.getHeading() > 135 && player.getHeading() < 225 ? "S" : 
    player.getHeading() > 225 && player.getHeading() < 315 ? "E" : "";
    street.execute(`updateLoc("${streetName}", "${crossing}", "${zoneName}", "${dir}");`);
});