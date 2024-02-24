const vehicles = require('./vehicles');


///// Command to chat in the chat box
mp.events.addCommand("me", (player, fullText) => {
    player.outputChatBox(`${player.name} ${fullText}`);
});


///// Command to spawn any transportation (DEV)
mp.events.addCommand("veh", (player, _, model, fullText) => {
    let vehicle = mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position.x, player.position.y, player.position.z),
        {
            heading: player.heading,
            locked: false,
            engine: true,
        });
    vehicle.numberPlate = "Troyzhen";
    vehicle.setColorRGB(152, 210, 35, 0, 0, 0);
});

///// Command to fix transportation (vehicles)
mp.events.addCommand("fix", (player) => {
    if (player.vehicle)
        player.vehicle.repair();
    else
        player.outputChatBox(`you are not in the vehicle!`);
});


///// Set player hp, with value entered, or full if value was not entered. (DEV USE)
mp.events.addCommand("hp", (player, _, hp) => {
    if (hp === undefined) {
        player.health = 100
    }else {
        player.health = parseInt(hp);
    }
});

///// Command to spawn any weapon in game (DEV USE)
mp.events.addCommand("weapon", (player, fullText, weapon, ammo) => {
    let weaponHash = mp.joaat(weapon);
    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
});

///// Command to kill "self"
mp.events.addCommand("kill", (player) => {
    player.health = 0;
});

///// Command to change the time of day in game world (DEV)
mp.events.addCommand("time", (player, fullText, hour, minute, second) => {
    mp.world.time.set(hour, minute, second);
});

///// Command to switch the world weather (DEV USE)
mp.events.addCommand("weather", (player, _, weather) => {
    if (weather.length > 0) {
        mp.world.weather = weather;
    }
});

//DRAWLABEL TEST move to new js file!!!!
let startLabel = mp.labels.new("Shop No.1", new mp.Vector3(-1335.6156, -1283.5101, 4.8359),
{
    los: false,
    font: 4,
    drawDistance: 2.0,
});

// Draw labels on screen (DEV USE)
mp.events.addCommand("labeldistance", (player, _, dist) => {
    startLabel.drawDistance = parseInt(dist);
});

// TEST PED SPAWN
mp.events.addCommand("ped", (player, fulltext) => {
    mp.peds.new(mp.joaat("s_m_y_blackops_01"), new mp.Vector3(-2027.8145, -465.3748, 11.4532),
        {    
            dynamic: true, 
            frozen: false,
            invincible: false
        }
    )
});

// Shows available vehicles to spawn (DEV USE)
mp.events.addCommand("vehlist", (player, fulltext) => {
    player.outputChatBox(`Here's a list of available vehicles: ${vehicles}`)
})