const Pin = require("./Pin");
const CONFIG = {
   pins: [],
};

class RaspberryPi {
   constructor(config = CONFIG) {
      this.pins = [];

      if ( config.pins.length > 0 ) {
         config.pins.map( ( { name, number, type, inverted } ) => {
            const pin = new Pin(name, number, type, inverted);
            this.pins = [ ...this.pins, pin ]
         } );
      }
   }

   findPin(n) {
      return this.findPinByName( n ) || this.findPinByNumber( n );
   }

   findPinByName(n) {
      return this.pins.find( ( { name } ) => name === n );
   }

   findPinByNumber(n) {
      return this.pins.find( ( { number } ) => number === parseInt(n, 10));
   }

   addPin(name, number, type) {
      const isAvailable = !this.findPin( name ) && !this.findPin( number );
      if ( isAvailable ) {
         const pin = new Pin(name, number, type);
         this.pins = [ ...this.pins, pin ];
      }
   }

   activate( nameOrNumber ) {
      if ( nameOrNumber ) {
         const pin = this.findPin( nameOrNumber );
         if ( pin ) {
            pin.activate();
            return pin.isActive;
         } 
      } else {
         this.pins.map( pin => pin.activate() );
         return this.pins.filter( ( { isActive } ) => isActive === false ).length === 0;
      }
   }

   deactivate( nameOrNumber ) {
      if ( nameOrNumber ) {
         const pin = this.findPin( nameOrNumber );
         if ( pin ) {
            pin.deactivate();
            return pin.isActive;
         } 
      } else {
         this.pins.map( pin => pin.deactivate() );
         return this.pins.filter( ( { isActive } ) => isActive === true ).length === 0;
      }
   }
}

module.exports = RaspberryPi;
