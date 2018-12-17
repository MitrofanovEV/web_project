const db = require('./dbController')

module.exports.getProducts = async function (req, res) {
    let Product = await db.getAllProducts()
    res.send(Product)
}

module.exports.getOne = async function (req, res) {
    let name = req.url.slice(11)
    let Product = await db.findProductById(name)
    res.send(Product)
}

module.exports.sell = async function (req, res) {
    
    let r = await db.findUserByToken(req.user.id)
    console.log(r);
    let d = await db.setOwner(req.body._id, r._id)
    let r = await db.changeStatus(req.body._id)
    res.redirect('/')
}