  const UserModel = require('../models/user.js')
const ProductModel = require('../models/product.js')

exports.isUser = function(token){
  return UserModel.findOne({Token: token},function(err, user){
      if(err)
        return res.send('Error')
        
      if(!user){
        return false
      }
        
      return true
    })
}

exports.findUserByToken = function (id) {
    return UserModel.findOne({Token:id})
  }


exports.findProductById = function(id){
    return ProductModel.findById(id)
}

exports.createUser = function(User){
  return UserModel.create(User)
}

exports.getAllProducts = async function(){
  return ProductModel.find({})
}


exports.changeStatus = async function(id){
  return ProductModel.findOneAndUpdate({ _id: id }, { $set: { Status: 'Продано' } })
}

exports.setOwner = async function(id_cat, id_owner){
  return ProductModel.findOneAndUpdate({ _id: id_cat }, { $set: { Owner: id_owner } })
}