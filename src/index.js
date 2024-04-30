const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Configuración de las vistas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

// Rutas
app.use('/', productRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));