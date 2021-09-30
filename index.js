const bodyParser = require('body-parser')
const express = require('express')
const formidableMiddleware = require('express-formidable')


require('./startup')


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

app.listen(port, () => console.log(`Listening on port ${port}...`))






