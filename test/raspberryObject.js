const assert = require('assert');
const RaspberryPi = require("../src/models/RaspberryPi");
const Pin = require("../src/models/Pin");
const PinType = require("../src/enums/PinType");

describe('RaspberryPi', function() {
  const rpi = new RaspberryPi();

  describe('Pins', function() {
    const p = new Pin("gardenLightsFront", 27, PinType.OUT );
    const p2 = new Pin("gardenLightsBack", 21, PinType.OUT );
    
    it('can add a pin', function() {
      rpi.addPin(p);
      assert.strictEqual(rpi.pins.length, 1);
      rpi.addPin(p2);
      assert.strictEqual(rpi.pins.length, 2);
    });

    it('can cannot add a pin with the same name or number twice', function() {
      rpi.addPin(p);
      assert.strictEqual(rpi.pins.length, 2);
    });
  });
});

