// Executed event when user logs into the server 
mp.events.add("playerJoin", (player) => {
    player.setProp(1,35,0) //Glasses
    player.setProp(0,55,2) //Hat
    player.setClothes(2,75,0,2); //Hair
    player.setClothes(3,2,0,2); //Torso
    player.setClothes(8,15,0,2); //Undershirts
    player.setClothes(6,48,0,2); //Shoes
    player.setClothes(4,26,0,2); //Legs
    player.setClothes(11,134,0,2); //Top

    console.log("Player Joined!")
});


// Executed events on player death
let spawnPoints = require("./spawnPoints.json").SpawnPoints;

mp.events.add("playerDeath", (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);

    player.health = 100;
    player.armour = 100;
});