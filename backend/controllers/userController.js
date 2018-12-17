const db = require('./dbController')



module.exports.getUser= function(req,res){
    let username = req.user.name.givenName + ' ' + req.user.name.familyName
        res.send({Username : username})
}
