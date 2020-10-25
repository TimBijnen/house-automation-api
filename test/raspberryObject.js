const assert = require('assert');
const RaspberryPi = require("../models/RaspberryPi");
const Pin = require("../models/Pin");
const PinType = require("../enums/PinType");

describe('RaspberryPi', function() {
  const rpi = new RaspberryPi();

  describe('Pins', function() {
    it('can add a pin', function() {
      const p = new Pin("gardenLightsFront", 27, PinType.OUT );
      rpi.addPin(p);
      assert.strictEqual(rpi.pins.length, 1);
    });
  });
});

