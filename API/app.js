// app.js
const express = require('express');
const app = express();
const scoresRouter = require('./scores');

app.use(express.json());
app.use('/api/scores', scoresRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
