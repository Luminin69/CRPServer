// JOB INITIATION
const truckinglabel = mp.labels.new(
  "/start",
  new mp.Vector3(94.7532, 6362.7485, 31.3758),
  {
    los: false,
    font: 4,
    drawDistance: 2.0,
  }
);

// Marker --- Colshape
mp.markers.new(2, new mp.Vector3(94.7532, 6362.7485, 32.4400), 0.3,
  {
    rotation: new mp.Vector3(0, 180, 0),
  }
);
const colshape = mp.colshapes.newSphere(94.7532, 6362.7485, 31.3758, 2);

const playerInitJobTest = (PlayerMp) => {
  let player = "McLovin'"
  if (PlayerMp) {
    mp.gui.chat.push(`${player} you're now a Trucker!`);
    spawnChosenVeh();
  }
};

mp.events.add("playerEnterColshape", playerInitJobTest);


// AFTER JOB IS INITIATED
const checkInLocations = [
  {
    label: "Products & Goods",
    position: new mp.Vector3(-35.083, 6287.8745, 31.389),
  },
  {
    label: "Logging",
    position: new mp.Vector3(-793.1161, 5422.9741, 34.9124),
  },
  {
    label: "Fuel and natural resources",
    position: new mp.Vector3(2915.2568, 4367.6474, 50.443),
  },
  // Add more trucking options
];

// Change "hauler" --> model so its dynamic to player choice
const spawnChosenVeh = () => {
  mp.vehicles.new(mp.game.joaat("hauler"), new mp.Vector3(50.7731, 6393.2802, 31.2257),
    {
      locked: false,
      engine: true,
      heading: 4
    }
  )};

checkInLocations.forEach((location) => {
  const marker = mp.markers.new(0, location.position, 0.5, {
    color: [255, 165, 0, 255],
    visible: true,
  });
  marker.setVariable("label", location.label);

  const colshape = mp.colshapes.newSphere(location.position.x, location.position.y, location.position.z, 2);
  colshape.setVariable("label", location.label);
});

const playerEnterTruckerCheckIn = (PlayerMp) => {
  if (PlayerMp) {
    mp.gui.chat.push(`${PlayerMp.name} checked in successfully!`);
  }
};

mp.events.add("playerEnterColshape", playerEnterTruckerCheckIn);
