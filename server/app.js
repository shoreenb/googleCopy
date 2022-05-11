const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hi Shoreen and Nadir!'))



module.exports = app;
