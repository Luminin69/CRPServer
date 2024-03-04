const spawnHauler = () => {
 mp.vehicles.new(mp.game.joaat("hauler"), new mp.Vector3(50.7731, 6393.2802, 31.2257), {
    locked: false,
    engine: true,
    heading: [215],
  });
};

const spawnPhantom = () => {
    mp.vehicles.new(mp.game.joaat("phantom"), new mp.Vector3(48.7106, 6389.7329, 31.2257), {
       locked: false,
       engine: true,
       heading: [215],
     });
   };

const spawnDumptruck = () => {
    mp.vehicles.new(mp.game.joaat("rubble"), new mp.Vector3(46.2705, 6386.3408, 31.2257), {
       locked: false,
       engine: true,
       heading: [215],
     });
   };

exports.spawnHauler = spawnHauler;
exports.spawnPhantom = spawnPhantom;
exports.spawnDumptruck =spawnDumptruck;
