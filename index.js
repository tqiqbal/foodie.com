const bodyParser = require('body-parser')
const express = require('express')
const formidableMiddleware = require('express-formidable')

const mongoose = require('mongoose')
const user = require('./api/user')
const order = require('./api/order')
const restaurant = require('./api/restaurant')



const app = express()
app.use(formidableMiddleware())

app.use('/', user)
app.use('/', order)
app.use('/', restaurant)

app.use(express.static('public'))

app.get('/healthz', (req, res) => {
    res.send({ "Status": "ok" })
})


const port = process.env.PORT || 3000

const options = {
  autoIndex: false, // Don't build indexes
  // poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/foodie', options)
    .then(() => {
      console.log({ level: 'info', message: 'Connected to User DB...' })
      app.listen(port, () => console.log(`Listening on port ${port}...`))
      require('./startup')
    })
    .catch(err => console.log(err.message))


