// 3ibaratan class se forme schema pour faire plusieur instance
const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
    // mongoose.Schema({

// })
const userSchema = mongoose.Schema({
        fullName: String,
        phone: String,
        email: String,
        password: String,
        is_active: { type: Boolean, default: false },
        is_verified: { type: Boolean, default: false }
    }, { Timestamp: true }


)

module.exports = mongoose.model('User', userSchema)