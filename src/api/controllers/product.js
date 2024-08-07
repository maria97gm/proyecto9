const Product = require('../models/product')

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find()
    return res.status(200).json(allProducts)
  } catch (error) {
    return res.status(404).json('No hemos accedido a los productos')
  }
}

module.exports = { getAllProducts }
