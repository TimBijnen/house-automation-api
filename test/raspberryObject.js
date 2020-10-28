const assert = require('assert');
const RaspberryPi = require("../src/models/RaspberryPi");
const PinType = require("../src/enums/PinType");
const pins = require("../config/pins");

describe('RaspberryPi', function() { 
  describe('Pins', function() {
    it('can add a pin', function() {
      const rpi = new RaspberryPi({ pins });
      assert.strictEqual(rpi.pins.length, 2);
      rpi.addPin("Test", 22, PinType.OUT);
      assert.strictEqual(rpi.pins.length, 3);

    });

    it('can cannot add a pin with the same name or number twice', function() {
      const rpi = new RaspberryPi({ pins });
      rpi.addPin("gardenLightsBack", 21, PinType.OUT );
      assert.strictEqual(rpi.pins.length, 2);
    });

    it('can activate and deactivate a pin', function() {
      const rpi = new RaspberryPi({ pins });
      const n = pins[0].name;
      rpi.activate( n );
      assert.strictEqual(rpi.findPin( n ).isActive, true);
      rpi.deactivate( n );
      assert.strictEqual(rpi.findPin( n ).isActive, false);
    });
  });
});

