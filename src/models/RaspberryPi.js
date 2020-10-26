const Pin = require("./Pin");
const CONFIG = {
   pins: [],
};

class RaspberryPi {
   constructor(config = CONFIG) {
      this.pins = [];

      if ( config.pins.length > 0 ) {
         config.pins.map( ( { name, number, type } ) => {
            const pin = new Pin(name, number, type);
            this.pins = [ ...this.pins, pin ]
         } );
      }
   }

   addPin(name, number, type) {
      const pin = new Pin(name, number, type);
      const hasPin = this.pins.filter( ( { name, number } ) =>
         name === pin.name || number === pin.number
      ).length !== 0;
      if ( !hasPin ) {
         this.pins = [...this.pins, pin];
      }
   }

   activate( name ) {
      if ( name ) {
         
      } else {
         this.pins.map( pin => pin.activate() );
      }
   }

   deactivate( name ) {
      if ( name ) {

      } else {
         this.pins.map( pin => pin.deactivate() );
      }
   }
}

module.exports = RaspberryPi;
