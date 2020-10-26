
const express = require("express")
const app = express()
const port = 3001;
const rpiRoutes = require("./routes/rpi");
// const Pin = require("../models/pin");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", rpiRoutes);
// valves.gardenLightsBack = new Pin(17, 'out');
// valves.gardenLightsFront = new Pin(27, 'out');
// valves.gardenWater = new Pin(22, 'out');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;