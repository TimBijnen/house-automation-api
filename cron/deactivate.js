console.log(new Date(), "Run deactivation script");

const RaspberryPi = require("../src/models/RaspberryPi");
const pins = require("../config/pins");
const config = { pins };

const rpi = new RaspberryPi(config);
rpi.deactivate();

console.log(new Date(), "End deactivation script\n");
process.exit(1);
