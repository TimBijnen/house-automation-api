console.log(new Date(), "Run activation script");

const RaspberryPi = require("../src/models/RaspberryPi");
const PinType = require("../src/enums/PinType");

const config = {
    pins: [
        { name: "gardenLightsBack", number: 27, type: PinType.OUT },
        { name: "gardenLightsFront", number: 17, type: PinType.OUT },
    ],
};

const rpi = new RaspberryPi(config);
rpi.activate();

console.log(new Date(), "End activation script\n");
process.exit(1);
