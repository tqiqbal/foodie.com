const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./api/user')

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
app.get('/', (req, res) => {
    res.send("Test response")
})

app.use('/', user)

app.listen(3000, () => console.log(`Listening on app port 3000...`))
