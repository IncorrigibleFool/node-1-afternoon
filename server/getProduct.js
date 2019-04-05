const products = require('../products.json')

const getProduct = (req, res) => {
    var {id} = req.params
    var item = products.find(val => val.id == id)
    if(!item){
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
}

module.exports = {getProduct}