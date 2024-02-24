const checkInLocations = [
  {
    label: "Trucking Check-in 1",
    position: new mp.Vector3(-35.083, 6287.8745, 31.389),
  },
  {
    label: "Trucking Check-in 2",
    position: new mp.Vector3(-50.0, 6300.0, 31.0),
  },
  {
    label: "Trucking Check-In 3",
    position: new mp.Vector3(-39.3962, 6305.0795, 31.3139)
  }
];

/** JOB INITIATION
 *  Player will have to initiate the job before any of the routes gets available to them.
 *  When a player initiates the trucker job, they will get a assigned the trucker class they applied to
 *  for ex: sand.trucker, log.trucker etc.
 *  The class will prevent just any player from triggering thr trucker checkpoints.
 *  So there will be checks to see if the player that triggered a checkpoint is a trucker.
 *  else if the player is not a trucker, they get prompted to apply at the specified location.
 */

let truckDepotManager = mp.peds.new(mp.joaat("ig_zimbor"), new mp.Vector3(94.7532, 6362.7485, 31.3758),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});
const truckDepotColshape = mp.colshapes.newSphere(position.x, position.y, position.z, 2);

const truckDepotMarker = mp.markers.new(0, position, 0.5, {
  color: [255, 165, 0, 255],
  visible: true,
});

mp.events.add("truckerInit", (player, jobStart) => {
  let truckDepotColshape = jobStart;
  if (jobStart == truckDepotColshape) {
    mp.gui.chat.push(`${player.name} Checked In Successfully at!`);
  }
});

const truckerJob = () => {
  if(player) {
    player.prompt(mp.gui.chat.push("Do you want to be a trucker?"))
  }
}

setupTruckingLocations = () => {
  checkInLocations.forEach((location) => {
    const { position } = location;

    // Defines the position of the colshape and marker
    const colshape = mp.colshapes.newSphere(position.x, position.y, position.z, 2);

    const marker = mp.markers.new(0, position, 0.5, {
      color: [255, 165, 0, 255],
      visible: true,
    });

    /**
     * Create a new function that triggers the event only if the setup function was fired.
     * 
     */
    mp.events.add("playerEnterColshape", (player, shape) => {
      let colshape = shape;
      if (shape == colshape) {
        mp.gui.chat.push(`${player.name} Checked In Successfully at ${location.label}!`);
      }
    });
  });
};


// Currently the function gets called on all colshapes when player interacts with any single one.
setupTruckingLocations();