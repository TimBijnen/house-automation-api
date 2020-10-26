console.log(new Date(), "Run activation script");

const RaspberryPi = require("../src/models/RaspberryPi");
const pins = require("../config/pins");
const config = { pins };

const rpi = new RaspberryPi(config);
rpi.activate();

console.log(new Date(), "End activation script");
console.log("");
process.exit(1);
