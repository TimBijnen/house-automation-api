const Pin = require("./Pin");

class RaspberryPi {
   constructor() {
      this.pins = [];
   }

   addPin(pin) {
      // const pin = new Pin(number, type);
      this.pins = [...this.pins, pin];
   }
}

module.exports = RaspberryPi;
