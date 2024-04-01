// scores.js
const express = require('express');
const router = express.Router();

// Armazena os placares (simulando um banco de dados temporário)
const scores = {
  team1:{
    name: 'Time 1', 
    score: 0
  },
  team2:{
    name: 'Time 2',  
    score: 0
  }
};

// Rota para adicionar um placar
router.post('/add', (req, res) => {
  const { team1, team2, score1, score2 } = req.body;
  scores.team1.name = team1;
  scores.team2.name = team2;
  
  res.status(201).json({ message: 'Placar adicionado com sucesso!' });
});

router.put('/add/team1', (req, res) => {
  scores.team1.score++
  res.status(200).send('Score Team 1 updated!')
});

router.put('/add/team2', (req, res) => {
  scores.team2.score++
  res.status(200).send('Score Team 2 updated!')
});

// Rota para consultar os placares
router.get('/scores', (req, res) => {
  res.json(scores);
});

module.exports = router;