const RaspberryPi = require("../src/models/RaspberryPi");
const PinType = require("../src/enums/PinType");

const config = {
    pins: [
        { name: "gardenLightsBack", number: 27, type: PinType.OUT },
        { name: "gardenLightsFront", number: 17, type: PinType.OUT },
    ]
}

const rpi = new RaspberryPi(config);

console.log(new Date(), "Run deactivation script");
rpi.deactivate();
console.log(new Date(), "End deactivation script");
process.exit(1);
