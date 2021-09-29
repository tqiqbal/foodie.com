const { User } = require('./modules/user')


async function createAdminUser() {
    try {
        console.log("Create Admin User")
        let user = await User.findOne({ username: "admin" }).exec()

        if (!user) {
            const newUser = new User({
                "name": "Admin",
                "username": "admin",
                "email": "admin@foodie.com",
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

    }
}

createAdminUser()