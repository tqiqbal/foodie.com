const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    required: true
  },
  username: {
    type: String,
    minlength: 3,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})


const User = mongoose.model('User', userSchema)

exports.User = User
