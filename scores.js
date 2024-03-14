// scores.js
const express = require('express');
const router = express.Router();

// Armazena os placares (simulando um banco de dados temporário)
const scores = {};

// Rota para adicionar um placar
router.post('/add', (req, res) => {
  const { team1, team2, score1, score2 } = req.body;
  scores[team1] = score1;
  scores[team2] = score2;
  res.status(201).json({ message: 'Placar adicionado com sucesso!' });
});

// Rota para consultar os placares
router.get('/scores', (req, res) => {
  res.json(scores);
});

module.exports = router;