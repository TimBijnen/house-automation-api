const GPIO = require('onoff').Gpio

class Pin {
    activated = false;

    constructor(number, direction) {
        try {
            this.gpio = new GPIO(number, direction);
        } catch (err) {
            this.gpio = false;
        }
    }

    activate() {
        this.gpio && this.gpio.writeSync(1);
        this.activated = true;
    }

    deactivate() {
        this.gpio && this.gpio.writeSync(0);
        this.activated = false;
    }
}
  
module.exports = Pin;