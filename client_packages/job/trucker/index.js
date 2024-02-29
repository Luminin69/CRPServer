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
    position: new mp.Vector3(2915.2568, 4367.6474, 50.4430)
  }
  // Add more trucking options
];


checkInLocations.forEach(location => {
  const marker = mp.markers.new(0, location.position, 0.5, {
    color: [255, 165, 0, 255],
    visible: true,
  });
  marker.setVariable("label", location.label);

  const colshape = mp.colshapes.newSphere(location.position.x, location.position.y, location.position.z, 2);
  colshape.setVariable("label", location.label);
});

const playerEnterTruckerCheckIn = (PlayerMp) => {
  if(PlayerMp) {
    mp.gui.chat.push(`${PlayerMp.name} checked in successfully!`)
  }
}

mp.events.add("playerEnterColshape", playerEnterTruckerCheckIn)