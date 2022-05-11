const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hi Shoreen and Nadir!'))

app.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))
