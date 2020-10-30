
const express = require("express")
const app = express()
const appPort = 3001;
const socketPort = 3002;
const rpiRoutes = require("./routes/rpi");
const Rpi = require("./models/RaspberryPi");
const bodyParser = require("body-parser");
const cors = require('cors')
const pins = require("../config/pins");

const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use( cors( corsOptions ) );
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", rpiRoutes);
// valves.gardenLightsBack = new Pin(17, 'out');
// valves.gardenLightsFront = new Pin(27, 'out');
// valves.gardenWater = new Pin(22, 'out');
app.locals.rpi = new Rpi({ pins });


const server = require("./socket")(app);
app.listen(appPort, () => console.log(`Example app listening on port ${appPort}!`))
server.listen(socketPort, () => console.log(`Example app listening on port ${socketPort}!`))


module.exports = app;