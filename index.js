const express = require("express")
const app = express()
const port = 3001
const Pin = require("./models/pin");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

let valves = {};
valves.gardenLightsBack = new Pin(17, 'out');
valves.gardenLightsFront = new Pin(18, 'out');
valves.gardenWater = new Pin(19, 'out');

let gardenLightsBack = false;
let gardenLightsFront = false;

app.get("/lighting", (req, res) => {
    res.send( {
        gardenLightsBack,
        gardenLightsFront,
    } );
});
app.post("/lighting", (req, res) => {
    const {
        gardenLightsBack: glb,
        gardenLightsFront: glf,
    } = req.body;
    
    gardenLightsBack = glb;
    gardenLightsFront = glf;

    res.json( {
        gardenLightsBack,
        gardenLightsFront,
    } );
} );

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
