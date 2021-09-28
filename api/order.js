const { Order } = require('../modules/order')
const express = require('express')

const router = express.Router()


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
router.post('/api/order', async (req, res) => {
  try {
    let order = req.body
    // generate order id
    let orderId = (Math.random() + 1).toString(36).substring(7)
    order.orderId = orderId

    const newOrder = new Order(order)

    newOrder.save(function (err, order) {
        if (err){
            // error
        }
      })

    res.send(newOrder)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})

module.exports = router