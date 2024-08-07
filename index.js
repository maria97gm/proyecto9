require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const productRoutes = require('./src/api/routes/product')

const app = express()
connectDB()

app.use('/api/v1/productosZiaja', productRoutes)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

app.use('*', (req, res) => {
  res.status(404).json('Hola')
})
