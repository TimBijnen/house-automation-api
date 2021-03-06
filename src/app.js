const express = require("express")
const app = express()
const appPort = 3001;
const rpiRoutes = require("./routes/rpi");
const Rpi = require("./models/RaspberryPi");
const bodyParser = require("body-parser");
const cors = require('cors')
const pins = require("../config/pins");

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use( cors( corsOptions ) );
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", rpiRoutes);
app.locals.rpi = new Rpi({ pins });

app.listen(appPort, () => console.log(`Example app listening on port ${appPort}!`))

module.exports = app;