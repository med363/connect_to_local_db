require('./db/mongoose')

const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routers/users.routes')
const authRoute = require('./routers/auth.routes')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    // const { MongoClient } = require('mongodb');
    // const assert = require('assert')

// const dbName = "users";






// MongoClient.connect(Mongo_url, (err, client) => {
//     assert.equal(err, null, 'DATA FAILED')
//     const db = client.db(dbName)
// })
const port = 5000

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.listen(port, () => {
    console.log(`connected on ${port}`);
})