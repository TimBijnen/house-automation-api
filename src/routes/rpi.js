const RpiController = require( '../controllers/rpiController' );
const routes = require("express").Router();

routes.get('/rpi', RpiController.getStatus);
routes.post('/rpi', RpiController.setStatus);
routes.post('/rpi/activate', RpiController.activateAll);
routes.post('/rpi/deactivate', RpiController.deactivateAll);
routes.get('/rpi/:id', RpiController.getSingleStatus);
routes.post('/rpi/:id', RpiController.setSingleStatus);

module.exports = routes;
