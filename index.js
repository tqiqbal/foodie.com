const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./api/user')
const order = require('./api/order')

mongoose.connect('mongodb://localhost:27017/foodie', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log({ level: 'info', message: 'Connected to User DB...' })
    })
    .catch(err => console.log(err.message))

const app = express()

app.use(bodyParser.json())

app.use('/', user)
app.use('/', order)

app.get('/', (req, res) => {
    res.send("Test response")
})



app.listen(3000, () => console.log(`Listening on app port 3000...`))
