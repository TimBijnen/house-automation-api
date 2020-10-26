const PinType = require("../src/enums/PinType");

const pins = [
    { name: "gardenLightsBack", number: 27, type: PinType.OUT },
    { name: "gardenLightsFront", number: 17, type: PinType.OUT },
];

module.exports = pins;