const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hi Shoreen and Nadir!'))



module.exports = app;
