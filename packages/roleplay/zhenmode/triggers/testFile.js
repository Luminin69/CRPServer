//Reggae Beach Parking sm -- Testing parking triggers
// pos x: -2033.13427734375 y: -480.0606994628906 z: 11.698022842407227
mp.markers.new(27, new mp.Vector3(-2033.1342, -470.0606, 10.699), 1, //1 is the scale
{
        direction: new mp.Vector3(-2033.1342, -480.0606, 10.699),
        rotation: new mp.Vector3(0, 0, 0),
        color: [255, 255, 255, 255], //255 is opaque
        visible: true,
        dimension: 0
});

// Col (PLAYER ENTER COLSHAPE)
let someColShape = mp.colshapes.newTube(-2033.1342, -470.0606, 10.699, 1, .5); //Sec-last digit is range and the last is dimension (Dimension is how big colshape is)

    function playerEnterColshapeHandler(player, shape) {
        let someColShape = shape;
        if(shape == someColShape) {
            console.log(`${player.name} entered the colshape`);
        }
    }

    mp.events.add("playerEnterColshape", playerEnterColshapeHandler);