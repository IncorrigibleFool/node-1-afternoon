const products = require('../products.json')

const getProducts = (req, res) => {
    if(req.query.price){
        var filteredProducts = products.filter(val =>{
            return val.price >= parseInt(req.query.price)
        })
        return res.status(200).send(filteredProducts)
    }
    res.status(200).send(products)
}

module.exports = {getProducts}