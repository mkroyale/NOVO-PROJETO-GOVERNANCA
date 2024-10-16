const express = require('express');
const app = express();

// Define uma rota para o caminho "/"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
