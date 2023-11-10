require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

console.log(ORIGIN);

app.use(
  cors({
    origin: ORIGIN,
  }),
);

app.use(express.json());

const mailRoutes = require('./routes/mailRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/contact', mailRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
