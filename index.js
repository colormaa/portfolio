const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.port|| 3000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})