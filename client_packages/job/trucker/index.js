const truckModules = require('./job/trucker/truckSpawn');

// JOB INITIATION
const infoLabel = mp.labels.new(
  "Use /start to apply for this job!",
  new mp.Vector3(94.7532, 6362.7485, 31.3758),
  {
    los: false,
    font: 4,
    drawDistance: 2.0,
  }
);

// TRUCK PARKING
const truckParkingMarkers = [
  {
    type: 11,
    loc: new mp.Vector3(50.7731, 6393.2802, 31.2257),
    label: "Parking One"
  },
  {
    type: 12,
    loc: new mp.Vector3(47.6961, 6391.0937, 31.2257),
    label: "Parking Two"
  },
  {
    type: 13,
    loc: new mp.Vector3(44.6191, 6388.9072, 31.2257),
    label: "Parking Three"
  },
];

truckParkingMarkers.forEach((markerData) => {
  const marker = mp.markers.new(markerData.type, markerData.loc, 1, {
    color: [255, 165, 0, 255],
    visible: true,
  });
  marker.setVariable("label", markerData.label);

});

// Trucking MANAGER
mp.markers.new(2, new mp.Vector3(94.7532, 6362.7485, 32.4400), 0.3,
  {
    rotation: new mp.Vector3(0, 180, 0),
  }
);
const truckingManagerCol = mp.colshapes.newSphere(94.7532, 6362.7485, 31.3758, 2);

const playerInitJob = (PlayerMp) => {
  let player = "McLovin'"
  if (PlayerMp) {
    mp.gui.chat.push(`${player} you're now a Trucker!`);
    truckModules.spawnHauler();
    truckModules.spawnPhantom();
    truckModules.spawnDumptruck();
  }
};

mp.events.add("playerEnterColshape", playerInitJob);



//⚠️ AFTER JOB IS INITIATED (POSSIBLY REMOVE CHECK-INS BECAUSE ITS KIND OF POINTLESS) EVEN THO COMMENTED OUT NPCs STILL STAND

// const truckerCheckInLocs = [
//   {
//     label: "Products & Goods",
//     position: new mp.Vector3(-35.083, 6287.8745, 31.389),
//   },
//   {
//     label: "Logging",
//     position: new mp.Vector3(-793.1161, 5422.9741, 34.9124),
//   },
//   {
//     label: "Fuel and natural resources",
//     position: new mp.Vector3(2915.2568, 4367.6474, 50.443),
//   },
//   // Add more trucking options
// ];


// truckerCheckInLocs.forEach((location) => {
//   const marker = mp.markers.new(0, location.position, 0.5, {
//     color: [255, 165, 0, 255],
//     visible: true,
//   });
//   marker.setVariable("label", location.label);

//   const colshape = mp.colshapes.newSphere(location.position.x, location.position.y, location.position.z, 2);
//   colshape.setVariable("label", location.label);
// });

// const playerEnterTruckerCheckIn = (PlayerMp) => {
//   if (PlayerMp) {
//     mp.gui.chat.push(`${PlayerMp.name} checked in successfully!`);
//   }
// };

// mp.events.add("playerEnterColshape", playerEnterTruckerCheckIn);
