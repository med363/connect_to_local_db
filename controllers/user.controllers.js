// les methode CRUD que on veut appeller

const { ServerHeartbeatSucceededEvent } = require('mongodb')
const User = require('../models/Users.models')

// create and save new user

exports.create = (req, res) => {
    // create new user
    const user = new User({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        is_active: req.body.is_active,
        is_verified: req.body.is_verified,

    })
    user.save().then(data => res.send(data)).catch(err => {
            res.status(500).send({ message: err.message || "something wrong when create user" })
        })
        // verification requiste ili wislitni kima schema wala
        // status 400 bad request b3athtli haja manich mitwa9aha
        // 500 pb cote Server 401 requette verified
        // 404 lien non disponible
        // 200 ok 
        // 201 ok and created
    if (!req.body) {
        return res.status(400).send({
            message: "please complete all field"
        })

    }


}