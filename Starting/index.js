const express = require('express')
const res = require('express/lib/response')
const app = express()
require('dotenv').config()

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter name is changes to X')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login <h1>')

})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})