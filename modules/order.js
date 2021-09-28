const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  username: {
    type: String,
    required: true
  },
  restaurantName: {
    type: String,
    required: true
  },
  orderText: {
    type: String,
    required: true
  }
})


const Order = mongoose.model('Order', orderSchema)

exports.Order = Order
