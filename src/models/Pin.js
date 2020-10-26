const GPIO = require('onoff').Gpio

class Pin {
    constructor(name, number, type) {
        this.name = name;
        this.number = number;
        try {
            this.gpio = new GPIO(number, type);
        } catch (err) {
            console.log("Not running on a raspberry");
        }
    }

}
  
module.exports = Pin;
