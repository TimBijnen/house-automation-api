const Pin = require("./Pin");

class RaspberryPi {
   constructor() {
      this.pins = [];
   }

   pinExists( pin ) {
      return this.pins.filter( ( { name, number } ) => name === pin.name || number === pin.number ).length !== 0;
   }

   addPin(pin) {
      const hasPin = this.pins.filter( ( { name, number } ) => name === pin.name || number === pin.number ).length !== 0;
      if ( !this.pinExists(pin) ) {
         this.pins = [...this.pins, pin];
      }
   }
}

module.exports = RaspberryPi;
