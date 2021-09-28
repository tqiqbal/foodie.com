const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  restaurantId: {
    type: String,
    required: false
  }
})


const Restaurant = mongoose.model('Restaurant', restaurantSchema)

exports.Restaurant = Restaurant
