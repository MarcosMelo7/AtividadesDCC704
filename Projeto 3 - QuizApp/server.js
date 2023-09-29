// server.js
const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const port = process.env.PORT || 3000;

// Configure o cors para permitir todas as origens 
app.use(cors());

// Importe e use as rotas definidas em routes.js
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
