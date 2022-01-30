// API ensemble de route et on applique les methode CRUD de mongodb

const express = require('express')
const userController = require('../controllers/user.controllers')
const router = express.Router()

router.post('/create', userController.create)

module.exports = router