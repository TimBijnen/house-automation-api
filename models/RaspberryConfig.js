const PinType = require("../enums/PinType.js");

class RaspberryConfig {
    constructor() {
	this.pins = [
	  { GpioNumber: 27, type: PinType.OUT },
	  { GpioNumber: 21, type: PinType.OUT },
	];
    }
};

module.exports = RaspberryConfig;
