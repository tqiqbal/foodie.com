const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./api/user')
const order = require('./api/order')
const restaurant = require('./api/restaurant')


const options = {
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/foodie', options)
    .then(() => {
      console.log({ level: 'info', message: 'Connected to User DB...' })
    })
    .catch(err => console.log(err.message))

const app = express()

app.use(bodyParser.json())

app.use('/', user)
app.use('/', order)
app.use('/', restaurant)

app.get('/', (req, res) => {
    res.send("Test response")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}...`))
