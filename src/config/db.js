require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectados con la BBDD')
  } catch (error) {
    console.log('No hemos conectado con la BBDD')
    console.log(error)
  }
}

module.exports = { connectDB }
