// API ensemble de route et on applique les methode CRUD de mongodb

const express = require('express')
const userController = require('../controllers/user.controllers')
const router = express.Router()

router.post('/create', userController.create)
router.get('/find', userController.getAll)
router.get('/findOne',userController.getOne)
router.put('/update', userController.updateUser)
router.delete('/delete', userController.deleteUser)


module.exports = router