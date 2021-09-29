const { User } = require('../modules/user')
const express = require('express')

const router = express.Router()


router.get('/api/user/profile/:username', async (req, res) => {
  try {
   let user = await User.findOne({username: req.params.username}).exec()
   if(!user) {
       res.send({error: { code: 404, message: "User not found."}})
   }
   res.send(user)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }
})


router.post('/api/user/register', async (req, res) => {
  try {
    const request = req.fields

    let user = await User.findOne({ username: request.username }).exec()
    if (user) return res.send({ error: { code: 400, message: 'User already registered.' } })

    user = await User.findOne({ email: request.email }).exec()
    if (user) return res.send({ error: { code: 400, message: 'User already registered.' } })

    const newUser = new User(request)

    newUser.save(function (err, user) {
        if (err){
            // error
        }
      })

    res.send({ status: "ok"})
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})

router.post('/api/user/auth', async(req, res) => {
    const auth = req.fields
    if(!auth.username) {
        return res.send({ error: { code: 400,  message: "Bad Request. Username is missing"} })
    }

    if(!auth.password) {
        return res.send({ error: { code: 400,  message: "Bad Request. Password is missing"} })
    }
    
    let user = await User.findOne({ username: auth.username, password: auth.password }).exec()

    if(!user) {
        return res.send({ error: { code: 400,  message: "Invalid username or password"} })
    }

  
    res.send({ status: "ok" })
  
  })








module.exports = router