const GPIO = require('onoff').Gpio

class Pin {
    constructor({ name, number, type, inverted }) {
        this.name = name;
        this.number = number;
        this.inverted = inverted;
        this.isActive = false;
        try {
            this.gpio = new GPIO(number, type);
        } catch (err) {
            console.log("Not running on a raspberry");
        }
    }

    activate( activate ) {
        const value = activate && !this.inverted ? 1 : 0;
        this.gpio && this.gpio.writeSync( value );
        console.log( `activating pin ${ this.number }: ${ this.name }`);
        this.isActive = activate;
    }
}
  
module.exports = Pin;
