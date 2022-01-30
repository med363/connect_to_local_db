const mongoose = require('mongoose')


const Mongo_url = "mongodb://localhost:27017/usersdb"

// connection database
mongoose.connect(Mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection succesfully')
}).catch(err => {
    console.log('failed connection', err)
})