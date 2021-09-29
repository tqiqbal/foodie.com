const { Restaurant } = require('../modules/restaurant')
const express = require('express')

const router = express.Router()


// List restaurant
router.get('/api/restaurant', async (req, res) => {
  try {
   let restaurants = await Restaurant.find().exec()
   res.send(restaurants)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }
})


//create new order
router.post('/api/restaurant', async (req, res) => {
  try {
    let restaurant = req.fields
    // generate order id
    let restaurantId = (Math.random() + 1).toString(36).substring(7)
    restaurant.restaurantId = restaurantId

    const newRestaurant = new Restaurant(restaurant)

    newRestaurant.save(function (err, order) {
        if (err){
            // error
        }
      })

    res.send({ status: "ok" })
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})


// update detail
router.put('/api/restaurant', async (req, res) => {

  try {
    let request = req.fields
    await Restaurant.updateOne({ restaurantId: request.restaurantId }, { $set: { name: request.name, description: request.description } })
    res.send({ status: "ok"})
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})


// update restaurant
router.delete('/api/restaurant/:id', async (req, res) => {
  try {
    await Restaurant.deleteOne({ restaurantId: req.params.id})
    res.send({ status: "ok"})
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})

module.exports = router