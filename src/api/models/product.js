const mongoose = require('mongoose')
const { connectDB } = require('../../config/db')

connectDB()

const productSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true }
  },
  { timestamps: true, collection: 'products' }
)

const Product = mongoose.model('products', productSchema, 'products')

module.exports = Product
