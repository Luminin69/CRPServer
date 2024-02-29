//Reggae Beach parking attendant
let staticPed = mp.peds.new(mp.joaat("ig_trafficwarden"), new mp.Vector3(-2027.8145, -465.3748, 11.4532),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});

//Random parking attendant
let staticPed2 = mp.peds.new(mp.joaat("ig_trafficwarden"), new mp.Vector3(101.0815, -1071.7567, 29.2327),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});

// TruckingJobManager (Manages all trucking)
let truckDepotManager1 = mp.peds.new(mp.joaat("ig_zimbor"), new mp.Vector3(94.7532, 6362.7485, 31.3758),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});

// Trucker Check-in Gaurd
let truckDepotGaurd1 = mp.peds.new(mp.joaat("mp_m_securoguard_01"), new mp.Vector3(-793.1161, 5422.9741, 34.9124),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});

let truckDepotGaurd2 = mp.peds.new(mp.joaat("mp_m_securoguard_01"), new mp.Vector3(-35.083, 6287.8745, 31.389),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});

let truckDepotGaurd3 = mp.peds.new(mp.joaat("mp_m_securoguard_01"), new mp.Vector3(2915.2568, 4367.6474, 50.4430),
{    
      dynamic: false,
      frozen: true,
      invincible: true
});