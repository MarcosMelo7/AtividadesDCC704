// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db'); // Importa a conexão com o banco de dados

router.use(express.json()); // Middleware para análise de JSON

router.post('/api/salvar-usuario', (req, res) => {
  const { nome, email, pontuacao } = req.body;
  
  // Insere os dados na tabela "usuarios"
  connection.query(
    'INSERT INTO usuarios (nome, email, pontuacao) VALUES (?, ?, ?)',
    [nome, email, pontuacao], // Incluindo a pontuação aqui
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao criar o usuário' });
      } else {
        res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
      }
    }
  );
});

module.exports = router;
