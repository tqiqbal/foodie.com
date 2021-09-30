const { User } = require('./modules/user')
const mongoose = require('mongoose')



const options = {
    autoIndex: false, // Don't build indexes
    // poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }


const mongoURL = process.env.MONGO_CONNECTION_STRING || 'mongodb://mongo-db:27017'


var connectWithRetry = function() {
    return mongoose.connect(`${mongoURL}/foodie`, options, function(err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 3 sec', err)
            setTimeout(connectWithRetry, 3000)
        } else {
            console.log({ level: 'info', message: 'Connected to Foodie Database...' })
            // create admin user
            createAdminUser()
        }
    })
}

// Retry Mongo-db connection
connectWithRetry()


async function createAdminUser() {
    try {
        let user = await User.findOne({ username: "admin" }).exec()

        if (!user) {
            const newUser = new User({
                "name": "Admin",
                "username": "admin",
                "password": "manage"
            })

            newUser.save(function (err, user) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Username 'admin' with password 'manage' created.")
                }
            })
        }
    } catch (error) {
      console.log(error.message)
    }
}

