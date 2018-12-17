const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const productController = require('../controllers/productController.js')

router.get('/products', productController.getProducts)

router.get('/userinfo', userController.getUser)

router.get('/info=*', productController.getOne)

router.post('/sell', productController.sell)

//outer.post('/addFilm', userController.addFilm)

module.exports = router