const mongoose = require('mongoose')
const connection = require('../config/db')

const productSchema = mongoose.Schema({
    Name: String,
    Count: Number,
    Description: String,
    Status:String,
    Owner:String,
    Img: String
})

const Product = connection.model('Product', productSchema)

module.exports = Product