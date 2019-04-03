const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))



const GPIO = require('onoff').Gpio
const VALVE = new GPIO(17, 'out');

app.get('/start', (req, res) => {
    VALVE.writeSync(1);
    res.send("Started watering")
})
app.get("/stop", (req, res) => {
    VALVE.writeSync(0);
    res.send("Stopped watering");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
