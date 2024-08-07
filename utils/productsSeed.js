const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../api/models/product');


fs.readFile('./products.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const products = JSON.parse(data);

  try {
    await Product.insertMany(products);
    console.log('Productos guardados en la base de datos');
  } catch (error) {
    console.error('Error guardando los productos en la base de datos:', error);
  } finally {
    mongoose.connection.close();
  }
});
