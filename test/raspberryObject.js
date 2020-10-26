const assert = require('assert');
const RaspberryPi = require("../src/models/RaspberryPi");
const Pin = require("../src/models/Pin");
const PinType = require("../src/enums/PinType");

describe('RaspberryPi', function() {
  const rpi = new RaspberryPi();

  describe('Pins', function() {
    it('can add a pin', function() {
      rpi.addPin("gardenLightsFront", 27, PinType.OUT );
      assert.strictEqual(rpi.pins.length, 1);
      rpi.addPin("gardenLightsBack", 21, PinType.OUT );
      assert.strictEqual(rpi.pins.length, 2);
    });

    it('can cannot add a pin with the same name or number twice', function() {
      rpi.addPin("gardenLightsBack", 21, PinType.OUT );
      assert.strictEqual(rpi.pins.length, 2);
    });
  });
});

