// verifier mail
const User = require("../models/Users.models")
const bcrypt = require('bcrypt')
exports.register = (req, res) => {
    const checkUser = User.findOne({ email: req.body.email })
    if (!req.body) {
        return res.status(400).send({
            message: "please complete all field"
        })

    }
    // if (checkUser) {
    //     return res.status(400).send({
    //         message: "Email already exist"
    //     })
    // }
    // hetha il pass n7ib ndecryptih
    // const newPassword =
    const user = new User({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        is_active: req.body.is_active,
        is_verified: req.body.is_verified,

    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) { return callback(err); };
                user.password = hash;
                user.save().then(data => res.send(data)).catch(err => {
                        res.status(500).send({ message: err.message || "something wrong when create user" })
                    })
                    // verification requiste ili wislitni kima schema wala
                    // status 400 bad request b3athtli haja manich mitwa9aha
                    // 500 pb cote Server 401 requette verified
                    // 404 lien non disponible
                    // 200 ok 
                    // 201 ok and created

            })
            // user.save().then(data => res.send(data)).catch(err => {
            //         res.status(500).send({ message: err.message || "something wrong when create user" })
            //     })
            //     // verification requiste ili wislitni kima schema wala
            //     // status 400 bad request b3athtli haja manich mitwa9aha
            //     // 500 pb cote Server 401 requette verified
            //     // 404 lien non disponible
            //     // 200 ok 
            //     // 201 ok and created



    })
}