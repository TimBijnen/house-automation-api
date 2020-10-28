const GPIO = require('onoff').Gpio

class Pin {
    constructor(name, number, type, inverted) {
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

    activate() {
        this.gpio && this.gpio.writeSync( this.inverted ? 0 : 1 );
        console.log( `activating pin ${ this.number }: ${ this.name }`);
        this.isActive = true;
    }

    deactivate() {
        this.gpio && this.gpio.writeSync( this.inverted ? 1 : 0 );
        console.log( `deactivating pin ${ this.number }: ${ this.name }`);
        this.isActive = false;
    }
}
  
module.exports = Pin;
