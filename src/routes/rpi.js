const RpiController = require( '../controllers/rpiController' );
const routes = require("express").Router();

routes.get('/rpi', RpiController.getStatus);
routes.post('/rpi', RpiController.setStatus);
routes.get('/rpi/:id', RpiController.getSingleStatus);
routes.post('/rpi/:id', RpiController.setSingleStatus);

module.exports = routes;
