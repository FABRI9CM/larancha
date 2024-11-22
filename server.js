const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;


app.use(express.static(path.join(__dirname,'homeadmin' ,'forms')));

// Rutas para servir las páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'homeadmin' ,'forms', 'page.tsx'));
});

app.get('/añadir', (req, res) => {
  res.sendFile(path.join(__dirname, 'homeadmin' ,'forms', 'formAddProduct.html'));
});

app.get('/modificar', (req, res) => {
  res.sendFile(path.join(__dirname, 'homeadmin' ,'forms', 'formUpdateproduct.html'));
});

app.get('/eliminar', (req, res) => {
  res.sendFile(path.join(__dirname, 'homeadmin' ,'forms', 'formDeleteProduct.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
