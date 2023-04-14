const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido!');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  const clientes = ['Josue Castillo', 'Lionel Messi', 'Cristiano Ronaldo'];
  res.send(clientes);
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = ['Teclado Logitech RGB', 'Mouse G203', 'Audifonos Razer RGB'];
  res.send(productos);
});

// Puerto de escucha
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});