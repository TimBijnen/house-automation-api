const RpiController = require( '../controllers/rpiController' );
const routes = require("express").Router();

routes.get('/rpi', RpiController.getStatus);
routes.get('/rpi/:id', RpiController.getSingleStatus);

module.exports = routes;
