const express = require("express")
const app = express()
const port = 3001
const Pin = require("./models/pin");
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))



let valves = {};
valves.gardenLightsBack = new Pin(17, 'out');
valves.gardenLightsFront = new Pin(18, 'out');
valves.gardenWater = new Pin(19, 'out');


app.get('/start', (req, res) => {
    // VALVE.writeSync(1);
    valves.gardenWater.activate();
    res.send("Started watering")
})
app.get("/stop", (req, res) => {
    // VALVE.writeSync(0);
    valves.gardenWater.deactivate();
    res.send("Stopped watering");
})

app.get("/lighting", (req, res) => {
    // get lighting settings
    res.send( {
        gardenLightsBack: valves.gardenLightsBack.activated,
        gardenLightsFront: valves.gardenLightsBack.activated,
    } )
});
app.post("/lighting", (req, res) => {
    const {
        gardenLightsBack,
        gardenLightsFront,
    } = req.body;

    valves.gardenLightsBack.setActive( gardenLightsBack );
    valves.gardenLightsFront.setActive( gardenLightsFront );

    console.log(req.body)
    // console.log(gardenLightsBack,valves.gardenLightsBack)
    res.send( {
        gardenLightsBack: valves.gardenLightsBack.getActive(),
        gardenLightsFront: valves.gardenLightsFront.getActive(),
    } )
    // set new lighting setting
	// {
	//     gardenBack: int,
	//     gardenFront: int,
	// }
} );

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
