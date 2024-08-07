const { getAllProducts } = require('../controllers/product')

const productRoutes = require('express').Router()

productRoutes.get('/', getAllProducts)

module.exports = productRoutes
