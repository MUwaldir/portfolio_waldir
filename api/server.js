
// const express = require('express');
// const app = express();
import app from './src/app.js'
// const app = require('./src/app.js')
import { connectDB} from './src/db.js';

const port = 3000;

// Inicia el servidor y comienza a escuchar en el puerto especificado
app.listen(port, (err) => {
  if (err) {
    return console.log('Error:', err);
  }
  connectDB()
  console.log(`Servidor está escuchando en http://localhost:${port}`);
});
