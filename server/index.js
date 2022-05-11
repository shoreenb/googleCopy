const app = require('./app')
const port = 3000;

app.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))
