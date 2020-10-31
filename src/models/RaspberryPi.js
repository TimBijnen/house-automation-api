const { find } = require("../util/find");
const Pin = require("./Pin");
const CONFIG = {
   pins: [],
};

class RaspberryPi {
   constructor(config = CONFIG) {
      this.pins = [];

      if ( config.pins.length > 0 ) {
         config.pins.map( p => {
            const pin = new Pin(p);
            this.pins = [ ...this.pins, pin ]
         } );
      }
   }

   addPin(name, number, type) {
      const isAvailable = !find( this.pins, name ) && !find( this.pins, number );
      if ( isAvailable ) {
         const pin = new Pin(name, number, type);
         this.pins = [ ...this.pins, pin ];
      }
   }

   activate( nameOrNumber, activate ) {
      if ( nameOrNumber !== "ALL" ) {
         const pin = find( this.pins, nameOrNumber );
         if ( pin ) {
            pin.activate( activate );
            return pin.isActive;
         } 
      } else {
         this.pins.map( pin => pin.activate( activate ) );
         return this.pins.filter( ( { isActive } ) => isActive === !activate ).length === 0;
      }
   }
}

module.exports = RaspberryPi;
