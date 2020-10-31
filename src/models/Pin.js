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
        let value = activate ? 1 : 0;
        value = this.inverted ? (value + 1) %2 : value;
        this.gpio && this.gpio.writeSync( value );
        console.log( `setting ${value} pin ${ this.number }: ${ this.name }`);
        this.isActive = activate;
    }
}
  
module.exports = Pin;
