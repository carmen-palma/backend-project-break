const Product = require('../models/Product');

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al mostrar los productos');
  }
};

module.exports = { showProducts };