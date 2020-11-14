const PinType = require("../src/enums/PinType");

const pins = [
    { name: "gardenLightsBack", number: 27, type: PinType.OUT, inverted: true },
    { name: "gardenLightsFront", number: 17, type: PinType.OUT, inverted: true },
    { name: "gardenLightsBorderBack", number: 37, type: PinType.OUT, inverted: true },
    { name: "gardenLightsBorderRight", number: 47, type: PinType.OUT, inverted: true },
];

module.exports = pins;