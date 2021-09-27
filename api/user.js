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
 
    let user = await User.findOne({ username: req.body.username }).exec()
    if (user) return res.send({ error: { code: 400, message: 'User already registered.' } })

    user = await User.findOne({ email: req.body.email }).exec()
    if (user) return res.send({ error: { code: 400, message: 'User already registered.' } })

    const newUser = new User(req.body)

    newUser.save(function (err, user) {
        if (err){
            // error
        }
      })

    res.send(newUser)
  } catch (error) {
    res.send({ error: { code: 500, message: error.message } })
  }

})

router.post('/api/user/auth', async(req, res) => {
    const auth = req.body
    if(!auth.username) {
        return res.send({ error: { code: 400,  message: "Bad Request. Username is missing"} })
    }

    if(!auth.password) {
        return res.send({ error: { code: 400,  message: "Bad Request. Password is missing"} })
    }
    
    let user = await User.findOne({ username: req.body.username, password: req.body.password }).exec()

    if(!user) {
        return res.send({ error: { code: 400,  message: "Invalid username or password"} })
    }

  
    res.send({ status: "ok" })
  
  })








module.exports = router