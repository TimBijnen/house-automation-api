const GPIO = require('onoff').Gpio

class Pin {
//    active = false

    constructor(number, direction) {
        try {
            this.gpio = new GPIO(number, direction);
        } catch (err) {
            this.gpio = false;
        }
        this.active = false;
    }

    setActive( active ) {
        this.gpio && this.gpio.writeSync( active ? 1 : 0 );
        this.active = active;
    }

    getActive() {
        return this.active;
    }
}
  
module.exports = Pin;
