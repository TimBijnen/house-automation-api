const Pin = require("./Pin");

class RaspberryPi {
   constructor() {
      this.pins = [];
   }

   addPin(number, type) {
      const pin = new Pin(number, type);
      this.pins = [...this.pins, pin];
   }
}

module.exports = RaspberryPi;
