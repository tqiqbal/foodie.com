const { Order } = require('../modules/order')
const express = require('express')

const router = express.Router()


// Get all orders
router.get('/api/order/all', async (req, res) => {
  try {
   let orders = await Order.find({})

   res.send(orders)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }
})

// Get order history by username
router.get('/api/order/:username', async (req, res) => {
  try {
   let orders = await Order.find({username: req.params.username}).exec()

   res.send(orders)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }
})



//create new order
router.post('/api/order/:id', async (req, res) => {
  try {
    let order = req.fields
    let createOrder = {
      orderId: (Math.random() + 1).toString(36).substring(7),
      username: req.params.id,
      restaurantName: order.restaurant,
      orderText: order.detail
    }

    const newOrder = new Order(createOrder)

    newOrder.save(function (err, order) {
        if (err) {
            // error
        }
      })

    res.send({ status: "ok"})
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})

module.exports = router